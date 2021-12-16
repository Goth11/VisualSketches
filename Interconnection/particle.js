class Particle {
  constructor(v, rSpeed, aSpeed) {
    this.v = v
    this.rSpeed = rSpeed
    this.aSpeed = aSpeed
  }
  
  draw() { 
    noFill();
    stroke(map(this.avgA(), 0, TWO_PI, 0, 255), 10);
    beginShape();
    for (let i = 0; i < 3; i++) {
      let x = this.v[i].r * Math.cos(this.v[i].a);
      let y = this.v[i].r * Math.sin(this.v[i].a);
      vertex(x, y);
      //fill(100, 10);
      //circle(x, y, 2);
    }endShape();
  }
  
  update() {
    for (let i = 0; i < this.v.length; i++) {
      this.v[i].r += this.rSpeed;
      if (this.v[i].r > maxR)
        this.v[i].r -= maxR;
      else if (this.v[i].r < 0)
        this.v[i].r += maxR;
      this.v[i].a += this.aSpeed;
      if (this.v[i].a > TWO_PI)
        this.v[i].a -= TWO_PI;
      else if (this.v[i].a < 0)
        this.v[i].a += TWO_PI;
    }
  }
  
  avgA() {
    let a = 0;
    for (let i = 0; i < 3; i++) {
      a += this.v[i].a;
    }
    a /= 3;
    return a;
  }
  
  static isTriangle(v) {
    return (v[0].a != v[1].a) || (v[0].a != v[2].a) || (v[1].a != v[2].a);
  }
}
