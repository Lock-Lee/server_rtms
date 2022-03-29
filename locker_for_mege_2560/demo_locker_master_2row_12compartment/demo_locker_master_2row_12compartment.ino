#include <avr/wdt.h>
#define swdoor A0 //A0
#define MASTER_EN   14  // connected to RS485 Enable pin
bool statusMotor, statuswaterlevel = true;
bool anser_comma, statusdoor , statusoverload, statuscommandclasscompartment;
bool datastart, dataEnd, swloop , swd , status_command , message_agian , swloop_finish, swloop_finis_doorclose = false;
char receiveChar, receiveChar_slave;
char *findcomma;
int _class, _Compartment;
int Motorcurrent = 15;
String SumChar, receiveDatafilter, stock_name, locker_vending_code;
int control_power_relay = 41;
int slot_L[] = {  A0, A1, A2, A3, A4, A5};
int slot_R[] = { 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2};
//int slot_L[] = { A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, 49, 47};
//int slot_R[] = { 13, 12, 11, 10, 9, 8, 7, 6, 5, 4,0 3, 2, 25, 27, 29, 31, 33, 35};
int status_machine = 0;
void setup() {

  pinMode(control_power_relay, OUTPUT);
  digitalWrite(control_power_relay, LOW);
  delay(1000);
  digitalWrite(control_power_relay, HIGH);

  locker_vending_code = "SC001";
  pinMode(swdoor, INPUT_PULLUP);
  Serial.begin(9600);
  Serial.println(digitalRead(swdoor));
  for (int x = 0; x < sizeof(slot_R) / sizeof(int); x++) {
    pinMode(slot_R[x], OUTPUT);
  }

  for (int x = 0; x < sizeof(slot_L) / sizeof(int); x++) {
    pinMode(slot_L[x], OUTPUT);
  }

  for (int x = 0; x < sizeof(slot_L) / sizeof(int); x++) {
    digitalWrite(slot_L[x], LOW);
    digitalWrite(slot_R[x], LOW);
  }


  


  wdt_enable(WDTO_2S);  //ตั้งเวลา ถ้าค้างเกิน 2 วิ ให้รีเซ็ต

}

void loop() {
  
 if (digitalRead(swdoor) == HIGH ) {
    if (status_machine == 0) {
      Serial.println("CR-DOORCLOSE"); status_machine = 1;
    }
  else  if (digitalRead(swdoor) == LOW) {

    if (status_machine == 1) {
      Serial.println("CR-DOOROPEN"); status_machine = 0;
    }
  }


  }
  datacom_from_computer();
  checkDoor();
  //  checkwaterlevel();
  checkready();
  checkoverload();
  commandrestart();
  commandclasscompartment ();
 
   

  wdt_reset();  //รีเซ็ตตั้งเวลารีเซ็ต

}

void datacom_from_computer() { //รับค่าจากคอมพิวเตอร์
  while (Serial.available() > 0) {
    receiveChar = Serial.read();
    SumChar += receiveChar;
  }
  if (receiveChar == '>') {
    datastart = true;
  }
  if (receiveChar == '<') {
    dataEnd = true;
  }
  if (datastart and dataEnd) {
    char charBuf[100];
    SumChar.toCharArray(charBuf, 50);  // คัดลอกอักขระของชุดอักขระไปยังตัวแปร charBuf
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
  String Class;
  String Compartment;
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
          if (counter == 1 ) {
            //            Serial.print("stock_name : ");
            //            Serial.println(cutComma);
            stock_name = cutComma;
          }
          if (counter == 2 ) {
            //            Serial.print("Class : ");
            //            Serial.println(cutComma);
            Class = cutComma;
            _class = Class.toInt();
          }
          if (counter == 3 ) {
            //            Serial.print("Compartment : ");
            //            Serial.println(cutComma);
            Compartment = cutComma;
            _Compartment = Compartment.toInt();
          }
        }
        counter = 0;
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

void tx_data() { //ส่งข้อมูลไป slave

  if (status_command) { //เงื่อนการสั่งงานรอบแรก
    String message_to_slave = ">" + stock_name + "," + _class + "," + _Compartment + "<" + "*";
    //    Serial.print("master say : ");
    digitalWrite(MASTER_EN , HIGH);     // Make Enable pin high to send Data
    delay(5);
    Serial.println(message_to_slave);
    Serial.flush();                     // wait for transmission of data
    digitalWrite(MASTER_EN , LOW);      // Receiving mode ON
    swloop = false;
    status_command = false;
  }
}
void Restart(){
   wdt_enable(WDTO_1S);
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

    if (receiveDatafilter == "CHECKDOOR") {
      if (swloop) {
        if (statusdoor) {
          Serial.println("DOORCLOSE");
          swloop = false;
        }
        else if (!statusdoor) {
          Serial.println("DOOROPEN");
          swloop = false;
        }
      }
    }
  }
}

void checkready() {
  if (receiveDatafilter == "CHECKREADY") {

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
  if (receiveDatafilter == "RESTART") {
    Restart();
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

void commandclasscompartment () {
  if (anser_comma) {
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
        if (stock_name == locker_vending_code) {
          opendoor( _class, _Compartment);
        }
        else if (stock_name != locker_vending_code) {
          status_command = true;
          tx_data();
        }
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

void opendoor(int y, int x) {

  //int slot_L[] = { A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, 49, 47};
  //convert to decimal = {54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,49,47}
  //int slot_R[] = { 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 25, 27, 29, 31, 33, 35};

  //  Serial.print(y);
  //  Serial.print(" ");
  //  Serial.println(x);

  if (y == 1 ) {
    digitalWrite(slot_R[x - 1], HIGH);
    //        Serial.print("target : ");
    //        Serial.println(slot_R[x - 1]);
    delay(200);
    digitalWrite(slot_R[x - 1], LOW);
  }  if (y == 2 ) {
    digitalWrite(slot_L[x - 1], HIGH);
    //        Serial.print("target : ");
    //        Serial.println(slot_L[x - 1]);
    delay(200);
    digitalWrite(slot_L[x - 1], LOW);
  }

  //    Serial.print("Master say : ");
  //    Serial.println(receiveDatafilter);
  //
  //    Serial.print("stock_name : ");
  //    Serial.println(stock_name);
  //
  //    Serial.print("class : ");
  //    Serial.println(_class);
  //
  //    Serial.print("Compartment : ");
  //    Serial.println(_Compartment);

}
