let V = [], dim = 256;

function setup()
{
	createCanvas(600, 600);
  	for (let i = 0; i < dim; i++)
      	CreateParticle(i);
}

function draw()
{
    translate(width / 2, height / 2);
	background(0);
  	for (let i = 0; i < dim; i++)
    {
    	fill(255, 0, 0, 200);
      	noStroke();
      	let d = V[i].d * map(mouseY, 0, height, 1, 2);
      	ellipse(V[i].x, V[i].y, d, d);
      	V[i].x = cos(V[i].a) * V[i].r;
      	V[i].y = sin(V[i].a) * V[i].r;
      	V[i].r += V[i].v * map(mouseX, 0, width, 1, 3);
      	if (OutOfCanvas(i))
          	CreateParticle(i);
    }
}
            
function CreateParticle(i)
{
	V[i] = 
    {
        x: 0,
        y: 0,
        a: map(i, 0, dim - 1, 0, TWO_PI),
        r: 1,
        v: random(0.5, 7),
        d: random(15, 25)
     }
}

function OutOfCanvas(i)
{
return (V[i].x - V[i].d / 2 > width / 2 || V[i].x + V[i].d < -width / 2 ||
        V[i].y - V[i].d / 2 > height / 2 || V[i].y + V[i].d < -height / 2);
}
