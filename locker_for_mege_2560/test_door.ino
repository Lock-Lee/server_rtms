int slot_L[] = { A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, 49, 47};
int slot_R[] = { 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 25, 27, 29, 31, 33, 35};

void setup(){
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
  for (int x = 0; x < sizeof(slot_L); x++) {
    digitalWrite(slot_L[x], 1);
    delay(500)
    digitalWrite(slot_L[x], 0);
  }
  for (int x = 0; x < sizeof(slot_R); x++) {
    digitalWrite(slot_R[x], 1);
    delay(500)
    digitalWrite(slot_R[x], 0);
  }
}
void loop(){

}