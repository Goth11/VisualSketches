/*
Process 8

A rectangular surface densely filled with instances of Element 2, each with a different size, speed, and direction. Display the intersections by drawing a circle at each point of contact. Set the size of each circle relative to the distance between the centers of the overlapping Elements. Draw the smallest possible circle as black and largest as white, with varying grays representing sizes in between.

Casey Reas
*/
let w, h, scl, particleArray;

function setup() {
  w = 800;
  h = 800;
  scl = (w + h) / 60;
  scl0 = 20;
  createCanvas(w, h);
  particleArray = [];
  for (y = h / scl0; y < h; y += h / scl0)
    for (x = w / scl0; x < w; x += w / scl0) {
      particleArray.push(new Particle(x, y, random(scl / 8, scl), random(-1, 1), random(-1, 1)));
    }
  background(0);
}

function draw() {
  //background(0);
  for (index = 0; index < 10; index++)
  for (i = 0; i < particleArray.length; i++) {
   // particleArray[i].draw();
    checkColissions(i);
    particleArray[i].update();
  }
}

function checkColissions(i) {
  for (index = 0; index < particleArray.length; index++)
    if (index != i) {
      let circleDistance = distance(particleArray[i].x, particleArray[i].y, particleArray[index].x, particleArray[index].y);
      let radiusSum = particleArray[i].radius + particleArray[index].radius;
      if (circleDistance <= radiusSum * radiusSum) {
        let x = (particleArray[i].x + particleArray[index].x) / 2;
        let y = (particleArray[i].y + particleArray[index].y) / 2;
        let r1 = 1;
        let r2 = 2;
        let radius = map(circleDistance, 0, radiusSum * radiusSum, r1, r2);
        let col = map(radius, r1, r2, 0, 255);
        fill(col, 10);
        noStroke();
        circle(x, y, radius);
      } 
    }
}

function distance(x1, y1, x2, y2)
{
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}
