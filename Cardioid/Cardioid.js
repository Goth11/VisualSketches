let r, total, factor, colored;

function setup()
{
    createCanvas(600, 600);
	total = 200;
	r = min(width, height) / 2.1;
	factor = 0;
	colored = false;
}

function draw()
{
    background(0);
    translate(width / 2, height / 2);
	CheckMouse();
	for (let i = 0; i < total; i++)
	{
				let angle = map(i,0, total - 1, 0, TWO_PI) + PI;
				let v = 
				{
					x: cos(angle) * r,
					y: sin(angle) * r
				};
				if (colored)
				{
					colorMode(HSB);
					let hue = map(i, 0, total - 1, 0, 255);
					fill(hue, 255, 255);
					noStroke();
				}
				else
				{
					colorMode(RGB);
					fill(255);
					noStroke();
				}
	}
	
	for (let i = 0; i < total; i++)
	{
				let alpha = map(i,0, total - 1, 0, TWO_PI) + PI;
		    let beta = map(i * factor % total, 0, total - 1, 0, TWO_PI) + PI;
				let a = 
				{
					x: cos(alpha) * r,
					y: sin(alpha) * r
				};
		
				let b = 
				{
					x: cos(beta) * r,
					y: sin(beta) * r
				};
		
				if (colored)
				{
					colorMode(HSB);
					let hue = map(i, 0, total - 1, 0, 255);
					stroke(hue, 255, 255);
				}
				else
				{
					colorMode(RGB);
					stroke(255);
				}
				line(a.x, a.y, b.x, b.y);
	}
		
}

function CheckMouse()
{
	if (mouseIsPressed)
	{
			if (mouseX >= width / 2)
					factor += 0.01;
			else if (factor > 0)
					factor -= 0.01;
		
		if (mouseY >= height / 2)
				colored = true;
		else colored = false;
	}
}
