Particle p;
int xOff, yOff, offSpeed, sign;
float rOff, aOff;

void setup() {
  size(600, 600);
  p = new Particle(0, 0, min(width, height) / 512);
  xOff = yOff = 0;
  offSpeed = 2;
  rOff = 5;//width / 2 - 1;
  aOff = 0;
  sign = 1;
  rectMode(CENTER);
  background(0);
}

void draw() {
  while (!p.done)
  {
    p.draw();
    p.update();
  }
  float mapX = map(rOff * cos(aOff) + width / 2, 0, width - 1, 2, 8);
  float mapY = map(rOff * sin(aOff) + height / 2, 0, height - 1, 2, 8);
  p.reset();
  p.factorX = mapX;
  p.factorY = mapY;
  xOff += offSpeed;
  yOff += offSpeed;
  xOff %= width;
  yOff %= height;
  //fill(255, 0, 0);
  //square(rOff * cos(aOff) + width / 2, rOff * sin(aOff) + height / 2, 5);
  aOff -= sign * 0.25;
  aOff %= TWO_PI;
  rOff -= sign * 0.85;
  if (rOff < 5 || rOff > width / 2 - 1)
    sign *= -1;
}
