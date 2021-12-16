let arr = [], maxR;

function setup() {
  createCanvas(800, 800);
  maxR = Math.sqrt(width * width + height * height) / 2;
  for (let i = 0; i < min(width, height) / 2; i++) {
    let ok = false;
    while (!ok) {
      ok = true;
      let vertices = [];
      let r0 = random(maxR);
      let a0= random(TWO_PI);
      for (let j = 0; j < 3; j++) {
        let r = random(r0,min(r0*1.5,maxR));
        let a = random(a0,min(a0*2,TWO_PI));
        vertices.push(new Vertex(r, a));
      }

      if (!Particle.isTriangle(vertices)) {
          ok = false;
      }
      else {
        let scl = min(width, height) / 80000;
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
