#define MASTER_EN   4
#define swdoor 43 //A0
bool statusMotor, statuswaterlevel = true;
bool anser_comma, statusdoor , statusoverload, statuscommandclasscompartment;
bool datastart, dataEnd, swloop , swd , status_command  , swloop_finish, swloop_finis_doorclose, status_command_open_door = false;
char receiveChar, receiveChar_slave;
char *findcomma;
int _class, _Compartment;
int Motorcurrent = 15;
String recInput, SumChar, receiveDatafilter, stock_name, locker_vending_name, _Command_order;
int slot_L[] = { A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11,};
int slot_R[] = { 7, 6, 5, 4, 3, 2, 47, 49 , A15, A14, A13, A12};

void setup() {
  
  // put your setup code here, to run once:
  locker_vending_name = "stock01";
  pinMode(MASTER_EN , OUTPUT);
  Serial.begin(9600);
  Serial1.begin(9600);
  
}

void loop() {

  datacom_from_computer();
  rx_data();
  
}

void tx_data() { //ส่งข้อมูลไป slave

  if (status_command & _class == 0 && _Compartment == 0) { // กรณีส่งคำสั่ง

    pinMode(MASTER_EN , OUTPUT);
    digitalWrite(MASTER_EN , HIGH);     // Make Enable pin high to send Data
    delay(5);

    //    Serial.print("message out put => : ");
    //    Serial.println(String(">") + stock_name + String(",") + _Command_order + String("<") + String("*"));
    //--serial computer
    Serial1.println(String(">") + stock_name + String(",") + _Command_order + String("<") + String("*"));
    Serial1.flush();                     // wait for transmission of data
    //--serial slave
    digitalWrite(MASTER_EN , LOW);      // Receiving mode ON

    status_command = false;
    //    stock_name = "";
    _Command_order = "";
    _class = 0;
    _Compartment = 0;

  }

  else { // กรณีส่งชั้นช่อง

    pinMode(MASTER_EN , OUTPUT);
    digitalWrite(MASTER_EN , HIGH);     // Make Enable pin high to send Data
    delay(5);

    //    Serial.print("message out put => : ");
    //    Serial.println(String(">") + stock_name + String(",") + _class + String(",") + _Compartment + String("<") + String("*"));
    //--serial computer
    Serial1.println(String(">") + stock_name + String(",") + _class + String(",") + _Compartment + String("<") + String("*"));
    Serial1.flush();                     // wait for transmission of data
    //--serial slave
    digitalWrite(MASTER_EN , LOW);      // Receiving mode ON

    //    stock_name = "";
    _Command_order = "";
    _class = 0;
    _Compartment = 0;

  }
}

void rx_data() //รับค่าจาก slave
{
  
  pinMode(MASTER_EN , OUTPUT);
  digitalWrite(MASTER_EN , LOW);

  while (Serial1.available())                  // If serial data is available then enter into while loop
  {
    
    recInput = Serial1.readStringUntil('*');     // Receive Serial data in Variable

    if (recInput.length() > 2) {
      Serial.println(String("message in put <= : ") + recInput);                   // Print Data
    }

  }
  
}

void datacom_from_computer() { //รับค่าจากคอมพิวเตอร์
  while (Serial.available() > 0) {
    receiveChar = Serial.read();
    SumChar += receiveChar;
    //    Serial.println("receiveChar : ");
    //    Serial.println(receiveChar);

  }
  if (receiveChar == '>') {
    datastart = true;
  }
  if (receiveChar == '<') {
    dataEnd = true;
  }
  if (datastart and dataEnd) {
    char charBuf[50];
    SumChar.toCharArray(charBuf, 50);  // คัดลอกอักขระของชุดอักขระไปยังตัวแปร charBuf
    Serial.println(String("IN PUT KEYBOARD : ") + SumChar);
    splint_string(charBuf);
    SumChar = "";
    receiveChar = 0;
    datastart = false;
    dataEnd = false;
    swloop = true;
  }
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

            //              Serial.println(String("Compartment : ") + cutComma);
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
          Serial.print("stock01 say : ");
          Serial.println("DOORCLOSE");
          swloop = false;
        }
        else if (!statusdoor) {
          Serial.print("stock01 say : ");
          Serial.println("DOOROPEN");
          swloop = false;
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
          Serial.println("CR-READY");
          swloop = false;
        }
        else {
          Serial.println("CR-RUNNING");
          swloop = false;
        }
      }
      if (!statusdoor) {
        Serial.println("CR-DOOROPEN");
        swloop = false;
      }
      if (!statuswaterlevel) {
        Serial.println("CR-NOTBALANCE");
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
          Serial.println("RE-FINISH");
          swloop = false;
        }
        else {
          Serial.println("RE-RESTARTING");
          swloop = false;
        }
      }
      if (!statusdoor) {
        Serial.println("RE-DOOROPEN");
        swloop = false;
      }
      if (statusoverload) {
        Serial.println("RE-OVERLOAD");
        swloop = false;
      }
    }
  }
}

void commandclasscompartment() {
  if (status_command_open_door) {
    status_command_open_door = false;
    if (swloop) {
      if (statusdoor and !statusoverload and statuswaterlevel) {
        statuscommandclasscompartment = true;
      }
      else if (!statusdoor) {
        Serial.println("CC-DOOROPEN");
        swloop = false;
      }
      else if (statusoverload) {
        Serial.println("CC-OVERLOAD");
        swloop = false;
      }
      else if (!statuswaterlevel) {
        Serial.println("CC-NOTBALANCE");
        swloop = false;
      }
      if (statuscommandclasscompartment and statusdoor) {
        Serial.println("CC-RUNNING");
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
      Serial.println("CC-FINISH");
      swloop_finish = false;
      swloop_finis_doorclose = true;
    }
  }
  if (swloop_finis_doorclose) {
    //    Serial.print("round 3 :");
    //    Serial.println(statusdoor);
    if (statusdoor) {
      Serial.println("CC-DOORCLOSE");
      swloop_finis_doorclose = false;
    }
  }
}

void filter_stock() {

  if (stock_name == locker_vending_name) {
    //    Serial.println("command in <= vending");
    //    Serial.println(String("vending name : ") + stock_name );
    //    swloop = false;
    checkDoor();
    checkready();
    checkoverload();
    commandrestart();
    commandclasscompartment();
  }

  else if (stock_name != locker_vending_name) {
    //    Serial.println("command out => vending");
    //    Serial.println(String("vending name : ") + stock_name );
    //    swloop = false;
    tx_data();
  }

}
