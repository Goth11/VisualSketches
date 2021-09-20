var n = 1, theta, r = 0;

function setup(){

	createCanvas(600, 600);
  	background(0);
}

function draw(){

    theta = n * 137.5;
  	Phyllotaxis(5, theta, width / 2, height / 2, 0);
  	n++;
}

function Phyllotaxis(c, hue, centerX, centerY, d){

		// colored
        // hue = theta
        colorMode(HSB);
  		hue %= 256;
  		r = c * sqrt(n);
  		noStroke();
  		fill(hue, 255, 255);
		ellipse(r * cos(radians(theta)) + centerX, 
          	    r * sin(radians(theta)) + centerY,
           		c + d, c + d);
}


/*function Phyllotaxis(c, hue, centerX, centerY, d){

		// black and white 
  		// hue = r
  		hue %= 256;
  		r = c * sqrt(n);
  		noStroke();
  		fill(hue);
		ellipse(r * cos(radians(theta)) + centerX, 
          	    r * sin(radians(theta)) + centerY,
           		c + d, c + d);
}*/
