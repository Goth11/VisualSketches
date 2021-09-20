let angle, r, rMult = 1.5;

function setup() {
  createCanvas(600, 600);
  angle = 0;
  r = min(width, height) / 4;
  //stroke(0, 100);
  strokeWeight(4);
  //frameRate(1);
  //colorMode(HSB);
  background(0);
}

function draw() {
  if (!mouseIsPressed)
    {
  translate(width / 2, height / 2);
  for (let i = 0; i < 2; ++i)
  {
  //background(220);
  
  let offset1 = random(1, rMult);
  let offset2 = random(1, rMult);
  let angleOffset = random(PI / 6);
  
  let x1 = cos(angle) * r * offset1;
  let y1 = sin(angle) * r * offset1;
  let x2 = cos(angle + angleOffset) * r * offset2;
  let y2 = sin(angle + angleOffset) * r * offset2;
  
  let a;
  if (angle < PI)
    a = map(angle, 0, PI, 0, 255);
  else
    a = map(angle, PI, TWO_PI, 255, 0);
  stroke(a, 125);
  line(x1, y1, x2, y2);
  
  angle += 0.08;
  if (angle >= TWO_PI)
    angle = 0;
  }
    }
}
