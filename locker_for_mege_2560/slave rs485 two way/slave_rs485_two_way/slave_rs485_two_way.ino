
#define SLAVE_EN  8
#define swdoor 13 //A0
String recInput;
int Motorcurrent = 15;
bool statusMotor, statuswaterlevel = true;
bool anser_comma, statusdoor , statusoverload, statuscommandclasscompartment;
bool datastart, dataEnd, swloop , swd , status_command , swloop_finish, swloop_finis_doorclose , status_command_open_door = false;
char receiveChar, receiveChar_slave;
char *findcomma;
String SumChar, receiveDatafilter, stock_name, locker_vending_name, _Command_order;
int _class, _Compartment;

void setup() {
  // put your setup code here, to run once:
  locker_vending_name = "stock02";
  Serial.begin(9600);                           // set serial communication baudrate
  pinMode(SLAVE_EN , OUTPUT);
  digitalWrite(SLAVE_EN , LOW);                 // Make Enable pin low, Receiving mode ON

}

void loop() {
  // put your main code here, to run repeatedly:
  rx_data();

}

void rx_data() //รับค่าจาก slave
{
  while (Serial.available())// If serial data is available then enter into while loop
    //    Serial.println(Serial.available());
  {
    recInput = Serial.readStringUntil('*');     // Receive Serial data in Variable
//    Serial.println(String("recInput : ") + recInput);
    char charBuf[50];
    recInput.toCharArray(charBuf, 50);  // คัดลอกอักขระของชุดอักขระไปยังตัวแปร charBuf
    splint_string(charBuf);
  }
}

void tx_data(String Message_to_master) //ส่งค่า
{
  digitalWrite(SLAVE_EN , HIGH);     // Make Enable pin high to send Data
  delay(5);

  Serial.println(Message_to_master + String("*"));

  Serial.flush();                     // wait for transmission of data
  digitalWrite(SLAVE_EN , LOW);      // Receiving mode ON

}

void splint_string(char sz[]) { // สร้างฟังชันต์ชื่อ splint_string กำหนดตัวแปรนำเข้าชื่อ sz ชนิด char แบบอาเรย์
  char *p = sz;  // สร้างตัวแปรชื่อ p ชนิด Pointer มีค่าเท่ากับ sz
  char *cutS;  // สร้างตัวแปรชื่อ str ชนิด Pointer
  char *noS;
  char *SumnoS;
  char *noSnoE;
  char *cutComma;
  char *noComma;
  int counter = 0;
  String Command_order, Class, Compartment;

  while ((cutS = strtok_r(p, ">" , &p)) != NULL) { // วนทำลูป while ซ้ำ โดยเรียกฟังชันต์ strtok_r() โดยทำการตัดค่าใน p เมื่อเจอเครื่องหมาย','
    noS = cutS;
    while ((SumnoS = strtok_r(noS, "<" , &noS)) != NULL) {
      receiveDatafilter = SumnoS;
      //      Serial.println(receiveDatafilter);
      findcomma = SumnoS;
      anser_comma = StrContains(findcomma, ",");
      if (anser_comma) {
        while ((cutComma = strtok_r(findcomma, "," , &findcomma)) != NULL) {
          counter++;
//          Serial.println(String("counter : ") + counter);
          if (counter == 1 ) {
            swloop = true;
//            Serial.println(String("stock_name : ") + cutComma);
            stock_name = cutComma;
          }
          if (counter == 2 ) {
            Class = cutComma;
            _class = Class.toInt();
//            Serial.println(String("Class : ") + _class);
            Class = "";


            if (_class == 0) {
              status_command = true;
//              Serial.println(String("commmand : ") + cutComma);
              Command_order = cutComma;
              _Command_order = Command_order;
              Command_order = "";
            }

          }
          if (counter == 3 ) {

//            Serial.println(String("Compartment : ") + cutComma);
            
            status_command = false;
            Compartment = cutComma;
            _Compartment = Compartment.toInt();
            Compartment = "";
            status_command_open_door = true;
          }
        }
        counter = 0;
        filter_stock();
      }
    }
  }
}

char StrContains(char *str, char *sfind) { //ค้นหาComma
  char found = 0;
  char index = 0;
  char len;
  len = strlen(str);
  if (strlen(sfind) > len) {
    return 0;
  }
  while (index < len) {
    if (str[index] == sfind[found]) {
      found++;
      if (strlen(sfind) == found) {
        return 1;
      }
    }
    else {
      found = 0;
    }
    index++;
  }
  return 0;
}


void checkDoor() {

  static unsigned long Time = millis();
  if ((millis() - Time) > 20) {  //หน่วงเวลาการอ่านค่าของสวิตซ์ 20ms
    Time = millis();
    int   input_status_door = digitalRead(swdoor);

    if (input_status_door == HIGH) {
      statusdoor = true;
    }
    
    else if (input_status_door == LOW) {
      statusdoor = false;
    }

    if (_Command_order == "CHECKDOOR") {
      _Command_order = "";
      
      if (swloop) {

        if (statusdoor) {
          //          Serial.println("DOORCLOSE");
          tx_data("DOORCLOSE");

          swloop = false;
          //          _Command_order = "";
          //          locker_vending_name = "";
        }
        else if (!statusdoor) {
          //          Serial.println("DOOROPEN");
          tx_data("DOOROPEN");

          swloop = false;
          //          _Command_order = "";
          //          locker_vending_name = "";
        }
      }
    }
  }
}

void checkready() {
  if (_Command_order == "CHECKREADY") {
    _Command_order = "";
    if (swloop) {
      if (statusdoor and statuswaterlevel) {
        if (!statusMotor) {
          //          Serial.println("CR-READY");
          tx_data("CR-READY");
          swloop = false;
        }
        else {
          //          Serial.println("CR-RUNNING");
          tx_data("CR-RUNNING");
          swloop = false;
        }
      }
      if (!statusdoor) {
        //        Serial.println("CR-DOOROPEN");
        tx_data("CR-DOOROPEN");
        swloop = false;
      }
      if (!statuswaterlevel) {
        //        Serial.println("CR-NOTBALANCE");
        tx_data("CR-NOTBALANCE");
        swloop = false;
      }
    }
  }
}

void checkoverload() {
  if (Motorcurrent <= 15 ) {
    statusoverload = false;
  }
  else {
    statusoverload = true;
  }
}

void commandrestart() {
  if (_Command_order == "RESTART") {
    _Command_order = "";
    if (swloop) {
      if (statusdoor and !statusoverload) {
        if (!statusMotor) {
          //          Serial.println("RE-FINISH");
          tx_data("RE-FINISH");
          swloop = false;
        }
        else {
          //          Serial.println("RE-RESTARTING");
          tx_data("RE-RESTARTING");
          swloop = false;
        }
      }
      if (!statusdoor) {
        //        Serial.println("RE-DOOROPEN");
        tx_data("RE-DOOROPEN");
        swloop = false;
      }
      if (statusoverload) {
        //        Serial.println("RE-OVERLOAD");
        tx_data("RE-OVERLOAD");
        swloop = false;
      }
    }
  }
}

void commandclasscompartment () {
  if (status_command_open_door) {
    status_command_open_door = false;
    if (swloop) {
      if (statusdoor and !statusoverload and statuswaterlevel) {
        statuscommandclasscompartment = true;
      }
      else if (!statusdoor) {
        //        Serial.println("CC-DOOROPEN");
        tx_data("CC-DOOROPEN");
        swloop = false;
      }
      else if (statusoverload) {
        //        Serial.println("CC-OVERLOAD");
        tx_data("CC-OVERLOAD");
        swloop = false;
      }
      else if (!statuswaterlevel) {
        //        Serial.println("CC-NOTBALANCE");
        tx_data("CC-NOTBALANCE");
        swloop = false;
      }
      if (statuscommandclasscompartment and statusdoor) {
        //        Serial.println("CC-RUNNING");
        tx_data("CC-RUNNING");
        swloop = false;
        swloop_finish = true;

        //        Serial.println(String("Class : ") + _class);
        //        Serial.println(String("Compartment : ") + _Compartment);

      }
    }
  }
  if (swloop_finish) {
    //    Serial.print("round 1 :");
    //    Serial.println(statusdoor);
    if (!statusdoor) {
      //      Serial.print("round 2 :");
      //      Serial.println(statusdoor);

      //      Serial.println("CC-FINISH");
      tx_data("CC-FINISH");

      swloop_finish = false;
      swloop_finis_doorclose = true;
    }
  }
  if (swloop_finis_doorclose) {
    //    Serial.print("round 3 :");
    //    Serial.println(statusdoor);
    if (statusdoor) {

      //      Serial.println("CC-DOORCLOSE");
      tx_data("CC-DOORCLOSE");

      swloop_finis_doorclose = false;
    }
  }
}

void filter_stock() {

  if (stock_name == locker_vending_name) {

    stock_name = "";

    checkDoor();
    checkready();
    checkoverload();
    commandrestart();
    commandclasscompartment();
  }


}
