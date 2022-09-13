let t;

function setup() {
  createCanvas(650, 650);
  t = new Tree();
  background(20);
  t.drawTrunk();
}

function draw() {
  for (let i = 0; i < 25; i++)
    t.draw();
}
