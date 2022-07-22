let p;

function setup() {
  createCanvas(700, 700);
  p = [];
  let vBound = 1;
  let vaBound = 0.025;
  for (let i = 0; i < 1000; i++)
    {
      p.push(
        new Particle(
          random(width), random(height), 
          random(min(width, height) / 200, min(width, height) / 150),
          random(-vBound, vBound), random(-vBound, vBound), 
          random(-vaBound, vaBound)));
    }
  background(255);
}

function draw() {
  for (let i = 0; i < p.length; i++)
    {
      p[i].draw();
      p[i].update();
      if (p[i].outOfBounds())
        {
          p.splice(i, 1);
          i--;
        }
    }
}
