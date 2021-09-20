let r, r2, offset;
function setup() {
  createCanvas(600, 600);
  r = min(width, height) / 5.5;
  r2 = r * 2.2;
  offset = r / 2;
  
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let a = 0; a < TWO_PI; a += 0.0015)
  {
    let b = rnd(0, TWO_PI);
    let off1 = rnd(-offset, offset);
    let off2 = rnd(-offset, offset);
    stroke(100, 0, 250, 60);
    line(cos(a) * r, sin(a) * r, 
         cos(b) * r2 + off1, sin(b) * r2 + off2);  
  }
    fill(0);
    noStroke();
    circle(0, 0, r * 1.925);
}

function rnd(v1, v2)
{
  return map(Math.random(), 0, 1, v1, v2);
}
