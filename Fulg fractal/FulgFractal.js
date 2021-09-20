let points;
let n;
let p;
let last;

function setup()
{
	createCanvas(600, 600);
  	Start();
}

function draw()
{
    translate(width / 2, height / 2);
  	//if (frameCount % 300 == 0) Start();
  	stroke(0, 100);
  	for (let i = 0; i < 700; i++)
    {
    	let index = floor(random(1, n + 1));
      	if (points[index] != last)
        {
        	p.x = (points[index].x + p.x) / 2;
          	p.y = (points[index].y + p.y) / 2;
          	point(p.x, p.y);
          	last = points[index];
        }
    }
 
}

function Start()
{
	points = [];
  	let add = random(256);
    n = 5;
  	let r = width / 1.65;
    for (let i = 1; i <= n; i++)
    {
    	let alpha = TWO_PI * i / n;
      	points[i] = 
        {
        	x: cos(alpha) * r,
          	y: sin(alpha) * r
        }
    }
  
  	p = 
    {
    	x: random(width),
    	y: random(height)
    };
  	background(255);
}
