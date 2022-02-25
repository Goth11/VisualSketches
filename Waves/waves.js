let yInitial = -50;
let yEnd = 0;
let y = yInitial;
let ySpeed = 2;
let sclSin = 50;
let sclNoise = 45;

function setup() {
  createCanvas(750, 750);
  yEnd = height * 1.15;
  background(0);
  //stroke(255,0,50);
  //frameRate(30);
}

function draw() {
  //colorMode(RGB);
  background(0, 2.5);
  for (let x = 0; x < width; x++) {
    let hue = map(x, 0, width - 1, 0, 255);
    //colorMode(HSB);
    stroke(255, 0, 50);
    //stroke(hue, 255, 255);
    let wavesNumber = map(y, yInitial, yEnd, 1, 10);
    point(x, sin(map(x, 0, width - 1, 0, TWO_PI * wavesNumber)) * sclSin + y + map(noise(x), 0, 1, -sclNoise, sclNoise));
  }
  //line(0, y, width, y);
  y += ySpeed;
  if (y > yEnd)
    y = yInitial;
}
