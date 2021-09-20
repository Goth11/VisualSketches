var x, scl, increment, ellipse_size;

function setup()
{
	createCanvas(800, 800);
  	scl = width / 2;
  	increment = scl / 256;
  	x = -width / 2;
    ellipse_size = min(width, height) / 100;
    translate(width / 2, height / 2);
    Axe();
}

function draw()
{
    translate(width / 2, height / 2);
    for (let i = 0; i < 2; ++i)
    {
     // SquareX();
      DrawF();
      DrawX();
      x += increment;
      if(x > width / 2 + ellipse_size / 2) noLoop();
    }
}

function Axe()
{
  	strokeWeight(6);
 	stroke(0);
  	line(-width / 2, 0, width / 2, 0);
  	line(0, -height / 2, 0, height / 2);
}

function SquaretX()
{
    var text_size = min(width, height) / 16;
  	fill(151);
  	noStroke();
    rect(-width / 2, -height / 2, 
         text_size * 4, text_size * 1.1);
  	textSize(text_size);
  	fill(0);
  	text("x = " + int(x)/*int(x / scl * 100) / 100*/, 
         -width / 2, -height / 2 + text_size / 1.1);
}

function DrawF()
{
  	stroke(255, 0, 0);
    line(x - increment, -f((x - increment) / scl) * scl, 
         x, -f(x / scl) * scl);
}

function DrawX()
{
    noStroke();
    fill(0);
    ellipse(x - increment, 0, 6, 6);
    fill(255, 0, 0);
    ellipse(x, 0, 6, 6);
}

function f(a)
{
    return sqrt(abs(a));
}
