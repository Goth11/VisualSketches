var x = 0;

function setup(){

  	createCanvas(600, 600);
	background(255);
  	stroke(0, 5);
  	strokeWeight(16);
}

function draw(){

	line(x, 0, random(width), height);
  	x++;
  	if(x > width)x = 0;
}
