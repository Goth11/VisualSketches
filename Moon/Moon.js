var r;

function setup(){

	createCanvas(600, 600);
  	r = min(width, height) / 2.5;
  	background(0);
}

function draw(){

	var a = random(0, TWO_PI),
        b = random(0, TWO_PI),
        x0 = cos(a),
        y0 = sin(a),
        x1 = cos(b),
        y1 = sin(b);
  
 	stroke(255, 50);
  	line(x0 * r + width / 2, y0 * r + height / 2,
       x1 * r + width / 2, y1 * r + height / 2);
  
}
