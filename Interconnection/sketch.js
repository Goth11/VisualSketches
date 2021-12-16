let arr = [], maxR;

function setup() {
  createCanvas(800, 800);
  maxR = Math.sqrt(width * width + height * height) / 2;
  for (let i = 0; i < min(width, height) / 5; i++) {
    let ok = false;
    while (!ok) {
      ok = true;
      let vertices = [];
      for (let j = 0; j < 3; j++) {
        let r = random(maxR);
        let a = random(TWO_PI);
        vertices.push(new Vertex(r, a));
      }

      if (!Particle.isTriangle(vertices)) {
          ok = false;
      }
      else {
        let scl = 0.01;
        let rSpeed = map(noise(i), 0, 1, -scl, scl);//random(-scl, scl);
        let scl2 = 0.0025;
        let aSpeed = map(noise(i), 0, 1, -scl2, scl2);//random(-scl2, scl2);
        arr.push(new Particle(vertices, rSpeed, aSpeed))
      }
    }
  }
  background(0);return;
}

function draw() {
  //background(0);
  translate(width/2,height/2);
  for (let ind = 0; ind < 1; ind++)
  for (let i = 0; i < arr.length; i++) {
    arr[i].draw();
    arr[i].update();
  }
}
