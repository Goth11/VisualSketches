class Particle {
  constructor(x, y, l, vx, vy, va)
  {
    this.x = x;
    this.y = y;
    this.l = l;
    this.vx = vx;
    this.vy = vy;
    this.a = 0;
    this.va = va;
  }
  
  draw()
  {
    noStroke();
    fill(0, 10);
    push();
    translate(this.x, this.y);
    rotate(this.a);
    triangle(0, 0, -this.l * 1.5, -this.l, this.l * 0.25, this.l * 1.75);
    pop();
  }
  
  update()
  {
    this.x += this.vx;
    this.y += this.vy;
    this.a += this.va;
    this.a %= TWO_PI;
    //this.l += 0.001;
  }
  
  outOfBounds()
  {
    return this.x < 0 || this.y < 0 || this.x > width || this.y > height;
  }
}
