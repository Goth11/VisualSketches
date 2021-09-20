var body, spring, omega, t, friction;

function setup() 
{
	createCanvas(400, 400);
  	background(255);
  	CreateBody();
  	CreateSpring();
  	t = 0;
  	friction = 0.01;
    omega = sqrt(spring.k / body.m);
    body.y = body.A = 20;
}

function draw() 
{
    translate(width / 2, height / 2);
  	body.update();
  	spring.update();
  	background(255);
	body.draw();
    spring.draw();
  	t += 10;
}

function CreateBody()
{
	body = 
    {
      x: 0, y: 0, w: 25, h: 20, m: 750, A: 0, v: 0, a: 0,
      
      update: function()
      {
      	this.v = -this.A * cos(omega * t);
      	this.a = -(omega * omega) * this.A * sin(omega * t);
      	this.y += this.v;
      	this.v += this.a;
        if (this.A - friction >= 0) this.A -= friction;
        else this.A = 0;
      },
      
      draw: function() 
      {
        noStroke();
      	fill(60);
        rect(this.x, this.y, this.w, this.h);        
      }
    };
}

function CreateSpring()
{
	spring = 
    {
      w: body.w / 4, 
      h: body.y + width / 2, 
      x: (body.x + body.w) / 2 - (body.w / 8),
      y: -width / 2,
      k: 0.1,
      
      update: function()
      {
      	this.h = body.y + width / 2;
        this.w = map(this.h, 0, height, body.w / 2, body.w / 16);
        this.x = (body.x + body.w) / 2 - (this.w / 2); 
      },
      
      draw: function()
      {
      	noStroke();
        fill(151);
        rect(this.x, this.y, this.w, this.h);
      }
    }
}
