var i = 0, s, max = 700, variation;

function setup(){

	createCanvas(600, 600);
  	s = min(width, height) / 2.5;
  	variation = s / 3.5;
  	background(255);
  	noStroke();
  	fill(0, 50);
}

function draw(){
  	translate(width / 2, height / 2);
  	beginShape();
    var a = random(TWO_PI);
	for(var j = 0; j < 3; j++){

      	vertex(cos(a) * s + random(-variation, variation), 
               sin(a) * s + random(-variation, variation));
   							  }
    endShape();
  	i++;
  	if(i > max)noLoop();
      	
}
