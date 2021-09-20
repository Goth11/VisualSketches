var r;

function setup(){

	createCanvas(600, 600);
  	r = max(width, height);
  	background(0);
}

function draw(){

  	stroke(200, 10);
  	for(var a = 0; a <= TWO_PI; a += 0.001){
      			var ran = random(4.5, 9);
    			line(cos(a) * r / (ran / 1.8)+ width / 2,
                     sin(a) * r / (ran / 1.8) + height / 2,
                     cos(a) * r / (ran / 3.3) + width / 2,
                     sin(a) * r / (ran / 3.3) + height / 2
                     );
    									}
	noLoop();
}
