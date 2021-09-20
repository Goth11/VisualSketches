let r, maxDist;

function setup() 
{
	createCanvas(600, 600);
  	r = 20;
  	maxDist = sqrt(width * width + height * height);
}

function draw() 
{
    translate(width / 2, height / 2);
  	background(0);
	for (let i = r; i <= width - r; i += r * 2)
      	for (let j = r; j <= height - r; j += r * 2)
        {
          noStroke();
          let i2 = map(i, 0, width, -width / 2, width / 2);
          let j2 = map(j, 0, height, -height / 2, height / 2);
          let r2 = map(dist(mouseX, mouseY, i, j), 0, maxDist, r, 1);
          let hue = map(r2, r, 1, 255, 0);
          colorMode(HSB);
          fill(hue, 255, 255);
          ellipse(i2, j2, r2 * 2, r2 * 2);
        }
}
