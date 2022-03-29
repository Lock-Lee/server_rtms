//#include <MPU9250_asukiaaa.h>
//MPU9250_asukiaaa mySensor;
//#ifdef _ESP32_HAL_I2C_H_
//#define SDA_PIN 21
//#define SCL_PIN 22
//#endif
//double aX, aY, aZ;
#include <ButtonDebounce.h>
#define swdoor 21
ButtonDebounce button(swdoor, 250);
bool swd = false;
char receiveChar;
char *findcomma;
bool datastart = false;
bool dataEnd = false;
String SumChar;
bool doorstatus = true;
bool swloop = false;
bool swloop_finish = false;
bool swloop_finis_doorclose = false;
String receiveDatafilter;
bool f1;
int _class, _Compartment;
int Gx ;
int Gy ;
int Gz ;
int Motorcurrent = 15;
bool statuswaterlevel;
bool statusdoor;
bool statusoverload;
bool statuscommandclasscompartment;
bool statusMotor = true;
int Class_[]  = {01, 02};
//int slot_R[] = { 2, 3, 4, 5, 6, 7, 8, 9, A0, A1, A2, A3 };
//int slot_L[] = { A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15 };
int slot_L[] = { A3, A2, A1, A0, 9, 8, 7, 6, 5, 2, 3, 4};
int slot_R[] = {  A8, A9, A10, A11, A12, A13, A14, A15, A4, A5, A6, A7};

void buttonChanged(int state) ;
void setup() {
  Serial.begin(115200);
  pinMode(swdoor, INPUT_PULLUP);


  for (int x = 0; x < sizeof(slot_R); x++) {
    pinMode(slot_R[x], OUTPUT);
  }

  for (int x = 0; x < sizeof(slot_L); x++) {
    pinMode(slot_L[x], OUTPUT);
  }
  for (int x = 0; x < sizeof(slot_L); x++) {
    digitalWrite(slot_L[x], 0);
    digitalWrite(slot_R[x], 0);
  }



  button.setCallback(buttonChanged);
  //#ifdef _ESP32_HAL_I2C_H_ // For ESP32
  //  Wire.begin(SDA_PIN, SCL_PIN);
  //  mySensor.setWire(&Wire);
  //#endif
  //  mySensor.beginAccel();
}
void loop() {
  //  Gxyz();
  button.update();
  datacom();
  checkDoor();
  checkwaterlevel();
  checkready();
  checkoverload();
  commandrestart();
  commandclasscompartment ();
  //checkbalance();
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
      findcomma = SumnoS;
      f1 = StrContains(findcomma, ",");
      if (f1) {
        while ((cutComma = strtok_r(findcomma, "," , &findcomma)) != NULL) {
          counter++;
          if (counter == 1 ) {
            //            Serial.print("Class : ");
            //            Serial.println(cutComma);
            Class = cutComma;
            _class = Class.toInt();
          }
          if (counter == 2 ) {
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
void datacom() { //รับค่า
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
    //    Serial.print("Arduino Say :");
    //    Serial.println(SumChar);
    char charBuf[100];
    SumChar.toCharArray(charBuf, 50);  // คัดลอกอักขระของชุดอักขระไปยังตัวแปร charBuf
    splint_string(charBuf);
    SumChar = "";
    receiveChar = 0;
    datastart = false;
    dataEnd = false;
    swloop = true;
    //    Serial.println(_class);
    //    Serial.println(_Compartment);
  }
}
void buttonChanged(int state) { //ตรวจสอบสถานะของประตู
  if (state != 1) {
    swd = true;
  }
  else {
    swd = false;
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
  if (swd) {
    statusdoor = true;
  }
  else {
    statusdoor = false;
  }
  if (receiveDatafilter == "CHECKDOOR") {
    if (swloop) {
      if (swd) {
        Serial.println("DOORCLOSE");
        swloop = false;
      }
      else {
        //        statusdoor = false;
        Serial.println("DOOROPEN");
        swloop = false;
      }
    }
  }
}
void checkwaterlevel() {
  if (Gx < 30 and Gy < 5 and Gz < 120 ) {
    statuswaterlevel = true;
  }
  else {
    statuswaterlevel = false;
  }
  if (receiveDatafilter == "CHECKWATERLEVEL") {
    if (swloop) {
      if (statuswaterlevel) {
        Serial.println("CW-BALANCE");
        swloop = false;
      }
      else {
        //        Serial.println("CW-NOTBALANCE");
        Serial.println("CW-" + String(Gx) + "," + String(Gy) + "," + String(Gz));
        swloop = false;
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
  if (f1) {
    if (swloop) {
      if (statusdoor and !statusoverload and statuswaterlevel) {
        statuscommandclasscompartment = true;
        opendoor( _class, _Compartment);
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

      }
    }
  }
  if (swloop_finish) {

    if (!statusdoor) {
      Serial.println("CC-FINISH");
      swloop_finish = false;
      swloop_finis_doorclose = true;


    }
  }
  if (swloop_finis_doorclose) {

    if (statusdoor) {
      Serial.println("CC-DOORCLOSE");
      swloop_finis_doorclose = false;
    }
  }
}
void opendoor(int y, int x) {
  Serial.print(y);
  Serial.print(" ");
  Serial.println(x);
  if (y == 1 ) {
    digitalWrite(slot_R[x - 1], 1);
    delay(400);
    digitalWrite(slot_R[x - 1], 0);
  }  if (y == 2 ) {
    digitalWrite(slot_L[x - 1], 1);
    delay(400);
    digitalWrite(slot_L[x - 1], 0);
  }



}
//void checkbalance() {
//  if (receiveDatafilter == "CHECKBALANCE") {
//    if (swloop) {
//      //        Serial.println(String(Gx)+","+String(Gy)+","+String(Gz));
//      Serial.println("CB-" + String(Gx) + "," + String(Gy) + "," + String(Gz));
//      swloop = false;
//    }
//  }
//}
//void Gxyz() {
//  static unsigned long Time = millis();
//  if ((millis() - Time) > 1000) {
//    Time = millis();
//    if (mySensor.accelUpdate() == 0) {
//      aX = mySensor.accelX();
//      aY = mySensor.accelY();
//      aZ = mySensor.accelZ();
//      Gx = abs(aX * 100);
//      Gy = abs(aY * 100);
//      Gz = abs(aZ * 100);
//    }
//  }
//}
