var x = 1.0, y = 1.0, z = 1.0, sigma = 10.0, rho = 28.0, beta = 8.0 / 3.0,
    color0;

function setup(){

	createCanvas(600, 600);
  	background(0);
  	color0 = random(10, 50);
}

function draw(){

	var dt = 0.01,
        dx = sigma * (y - x) * dt,
        dy = (x * (rho - z) - y) * dt,
        dz = (x * y - beta * z) * dt;
  		x += dx;
  		y += dy;
  		z += dz;
  	noFill();
  if(frameCount % 60 == 0){
    var rand = int(random(0, 3));
    if(rand == 2)color0++;
    else color0--;
    if(color0 < 10)color0 = 20;
    else
    if(color0 > 50)color0 = 50;

  						   }
  stroke(color0, 50);
  strokeWeight(10);
  ellipse(x + width / 2, y + height / 2, 300, 200);
  stroke(255, 10);
  fill(10);
  ellipse(x + width / 2, y + height / 2, 10, 10);

}
