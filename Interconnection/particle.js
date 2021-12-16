class Particle {
  constructor(v, rSpeed, aSpeed) {
    this.v = v
    this.rSpeed = rSpeed
    this.aSpeed = aSpeed
  }
  
  draw() { 
    noStroke();
    for (let i = 0; i < 3; i++) {
      let x = this.v[i].r * Math.cos(this.v[0].a);
      let y = this.v[i].r * Math.sin(this.v[0].a);
      fill(100, 10);
      circle(x, y, 2);
    }
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
  
  static isTriangle(v) {
    return (v[0].a != v[1].a) || (v[0].a != v[2].a) || (v[1].a != v[2].a);
  }
}
