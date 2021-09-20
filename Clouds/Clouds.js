var inc, scl;

function setup()
{
	createCanvas(600, 600);
    inc = 0.09; 
  	scl = 4;
  	NoiseMap();
}

function draw() 
{   
  	if (mouseIsPressed)
      	NoiseMap();
}

function NoiseMap()
{
   noiseSeed(random(4294967296));
   var y_off = 0;
   for (var y = 0; y < height / scl; ++y)
   {
      var x_off = 0;
      for (var x = 0; x < width / scl; ++x)
      {
           var val = noise(x_off, y_off);
           var color = {r: 135, g: 206, b: 235};
           var r = val * (255- color.r);
           var g = val * (255 - color.g);
           var b = val * (255 - color.b);
           noStroke();
           fill(color.r + r, color.g + g, color.b + b);
           rect(x * scl, y * scl, scl, scl);
           x_off += inc;
      }      
       y_off += inc;
    } 	
}
