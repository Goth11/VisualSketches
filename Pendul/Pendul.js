let alpha, r, v, a;

function setup() {
    createCanvas(600, 600);
	alpha = PI / 2;
	r = width / 2;
  	v = 0.1;
}

function draw() { 
  
    translate(width / 2, 15);
  	let x = cos(alpha + PI / 2) * r;
  	let y = sin(alpha + PI / 2) * r;
  
  	background(0);
	stroke(255);
  	strokeWeight(1);
	line(0, 0, x, y);
  	fill(255, 255, 0);
  	strokeWeight(20);
  	stroke(255, 255, 100, 120);
  	ellipse(x, y, 30, 30);
  
  	a = -0.01 * sin(alpha);
  	alpha += v;
  	v += a;
  	v *= 0.986;
}
