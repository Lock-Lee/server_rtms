#include <avr/wdt.h>
#define SLAVE_EN  14

bool sw_loop = false;
String recInput, stock_name, locker_vending_name;
char *findcomma;
bool anser_comma;
int _class, _Compartment;
int slot_L[] = { A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, 49, 47};
int slot_R[] = { 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 25, 27, 29, 31, 33, 35};

void setup() {

  locker_vending_name = "stock02";

  pinMode(SLAVE_EN , OUTPUT);                   // Declare Enable pin as output
  Serial.begin(9600);                           // set serial communication baudrate
  digitalWrite(SLAVE_EN , LOW);                 // Make Enable pin low, Receiving mode ON

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

  wdt_enable(WDTO_2S);  //ตั้งเวลา ถ้าค้างเกิน 2 วิ ให้รีเซ็ต
}

void loop() {

  datacom_from_rs485();
  filter_stock();

  wdt_reset();  //รีเซ็ตตั้งเวลารีเซ็ต
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
      findcomma = SumnoS;
      anser_comma = StrContains(findcomma, ",");
      //      Serial.print("value anser_comma : ");
      //      Serial.println(anser_comma);
      if (anser_comma) {
        while ((cutComma = strtok_r(findcomma, "," , &findcomma)) != NULL) {
          counter++;
          if (counter == 1 ) {
            //            Serial.print("stock_name : ");
            //            Serial.println(cutComma);
            stock_name = cutComma;
          }
          if (counter == 2 ) {
            //                        Serial.print("Class : ");
            //                        Serial.println(cutComma);
            Class = cutComma;
            _class = Class.toInt();
          }
          if (counter == 3 ) {
            //                        Serial.print("Compartment : ");
            //                        Serial.println(cutComma);
            Compartment = cutComma;
            _Compartment = Compartment.toInt();
            sw_loop = true;
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

void filter_stock() { //

  if (stock_name == locker_vending_name && sw_loop == true ) { // เงื่อนไขตรวจสอบ Stock
    Serial.println("slave address stock02 say : ");
    Serial.print("stock name : ");
    Serial.println(stock_name);
    Serial.print("class : ");
    Serial.println(_class);
    Serial.print("Compartment : ");
    Serial.println(_Compartment);
    sw_loop = false;

    opendoor( _class, _Compartment);

    recInput = "";
    _class = "";
    _Compartment = "";

  }
}

void datacom_from_rs485() //รับค่า
{
  while (Serial.available())                    // If serial data is available then enter into while loop
  {
    recInput = Serial.readStringUntil('*');     // Receive Serial data in Variable
    //    Serial.print(recInput);                     // Print Data
    char charBuf[100];
    recInput.toCharArray(charBuf, 50);  // คัดลอกอักขระของชุดอักขระไปยังตัวแปร charBuf
    splint_string(charBuf);
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
    digitalWrite(slot_R[x - 1], 1);
    //    Serial.print("target : ");
    //    Serial.println(slot_R[x - 1]);
    delay(200);
    digitalWrite(slot_R[x - 1], 0);
  }  if (y == 2 ) {
    digitalWrite(slot_L[x - 1], 1);
    //    Serial.print("target : ");
    //    Serial.println(slot_L[x - 1]);
    delay(200);
    digitalWrite(slot_L[x - 1], 0);
  }

}
