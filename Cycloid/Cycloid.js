var off, _circle= 
{
      x: 0, y: 0, r: 0,
      create: function(_x, _y, _r) {this.x = _x; this.y = _y; this.r = _r;},
      draw: function() 
      {
       // fill(255, 0, 0);
        //noStroke();
       // circle(this.x, this.y, 2 * this.r);
        var alpha = map(this.x, 0, off / 4, PI / 2, -3 * PI / 2);
        colorMode(HSB);
        noStroke();
        var hue = map(this.x, 0, off, 0, 255);
        fill(hue, 255, 255);
        var _r = this.r / 8;
        circle(
               this.x + this.r * cos(alpha),this.y - this.r * sin(alpha) - this.r,
               _r);
        circle(
               this.x + this.r * cos(alpha),this.y + this.r * sin(alpha) + this.r,
               _r);
        
        fill(255 - hue, 255, 255);
        circle(
               this.y - this.r * sin(alpha) - this.r,this.x + this.r * cos(alpha),
               _r);
        circle(
               this.y + this.r * sin(alpha) + this.r,this.x + this.r * cos(alpha),
               _r);
        colorMode(RGB);
      },
      
      update: function()
      {
        ++this.x;
        if (this.x > off)
          noLoop();
      },
};
var c;

function setup() {
  createCanvas(800, 800);
  off = min(width, height);
  c = _circle;
  c.create(0, height / 2, off / 8);
  background(0);
  //stroke(0);
  //line(0, height / 2 + c.r, width, height / 2 + c.r);
}

function draw() {
  //background(255);
  stroke(0);
  c.draw();
  c.update();
}
