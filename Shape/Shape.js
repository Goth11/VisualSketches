var d, nr = 2;

function setup(){

	createCanvas(600, 600);
  	background(230);
  	d = width < height ? width / 2.2 : height / 2.2;
  	stroke(0, 50);
  	++nr;
}

function draw(){
  translate(width / 2, height / 2);
  if(frameCount % 30 == 0){
    background(230);
    nr++;
  	for(var a = 1; a <= nr; a++){
      	var alpha = map(a, 1, nr, 0, TWO_PI); 
      	for(var b = 1; b <= nr; b++){
	var beta = map(b, 1, nr, 0, TWO_PI);
  	line(cos(alpha) * d, sin(alpha) * d, cos(beta) * d, sin(beta) * d);
  	b++;
       							  }
    						   }
   if(nr == 39)noLoop();
  }
}
