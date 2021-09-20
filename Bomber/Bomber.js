let V = [], i = 0;

function setup()
{
 	createCanvas(400, 400);
  	background(255);
  	Place();
    V[0].activated = true;
}

function draw()
{	
  
  	if (mouseIsPressed)
    {
      	let ok = true;
    	for (let i = 0; ok && i < V.length; i++)
          	if (dist(V[i].x, V[i].y, mouseX, mouseY) <= V[i].r0)
            {
            	ok = false;
              	V[i].activated = true;
            }
    }
  
  	if (frameCount % 40 == 0)
    {
      	let ok = true;
  		for (let i = 0; ok && i < V.length; i++)
      		if (V[i].activated && !V[i].exploded)
            {
              	ok = false;
      			Explode(i);
            }
    }
  
  
}

function Place()
{
 	for (let i = 0; i < 10; i++)
    {
     	V[i] = 
        {
        	x: random(5, width - 5),
          	y: random(5, height - 5),
          	r0: 10,
          	r: random(11, 300) / 2,
          	activated: false,
          	exploded: false,
          	draw: function()
         		  {
                   	fill(151);
                    noStroke();
            		ellipse(this.x, this.y, this.r0 * 2, this.r0 * 2);	
                   	noFill();
                   	stroke(0, 255, 0);
                   	ellipse(this.x, this.y, this.r * 2, this.r * 2);
                  }
        } 
        
        V[i].draw();
    }
}

function Explode(i)
{
  
  	stroke(255, 0, 0);
    noFill();
    ellipse(V[i].x, V[i].y, V[i].r * 2, V[i].r * 2);
	V[i].exploded = true;
  
  
	for (let ind = 0; ind < V.length; ind++)
       if (!V[ind].exploded && ind != i && 
           dist(V[i].x, V[i].y, V[ind].x, V[ind].y) - V[i].r0 <= V[i].r  
          )     
            	V[ind].activated = true;
 
}
