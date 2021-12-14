/*
B1: Move in a straight line
B5: Enter from the opposite edge after moving off the surface
*/
class Particle {
  constructor(x, y, radius, xSpeed, ySpeed) {
    this.x0 = x;
    this.y0 = y;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if ((this.x - this.radius > width) || (this.x + this.radius < 0) || (this.y - this.radius > height) || (this.y + this.radius < 0))
      {
        let kx1 = (this.x + this.radius) / this.xSpeed;
        let ky1 = (this.y + this.radius) / this.ySpeed;
        let kx2 = (this.x - this.radius - width) / this.xSpeed;
        let ky2 = (this.y - this.radius - height) / this.ySpeed;
        //print(kx1+" "+kx2+" "+ky1+" "+ky2);
        let kArray = [kx1, ky1, kx2, ky2].filter((a) => a > 0);
        kArray.sort((a, b) => Math.abs(a) - Math.abs(b));
        let k = kArray[1];
        //print("k is " + k);
        //let delta = this.xSpeed/(this.x-this.x0);
        //print("delta is " + delta);
        //print("k * delta is " + k * delta);
        this.x -= k * this.xSpeed;
        this.y -= k * this.ySpeed;
        //print("x: " + this.x+" y: "+this.y)
      }
      //this.y = height + this.radius;
  }
  
  draw() {
    fill(255,0,0);
    //noStroke();
    circle(this.x, this.y, this.radius * 2);
  }
  
}
