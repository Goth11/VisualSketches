let frames, arr;

function setup()
{
  createCanvas(800, 800);
  frames = 360;
  arr = [];
  for (let i = 0; i < 100; ++i)
  {
    arr[i] =
    {
        x: 0, y: 0, r: 0, a: 0, off: random(frames + 1),
        create: function() 
        {
                  this.r = random(5, 15);
                  this.x = random(this.r + 1, width - this.r - 1);
                  this.y = random(this.r + 1, height - this.r - 1);
        },

        update: function()
        {
          this.a = (frameCount + this.off) % frames;
          if (this.a < frames / 2)
            this.a = map(this.a, 0, frames / 2 - 1, 255, 0);
          else
            this.a = map(this.a, frames / 2, frames - 1, 0, 255);
        },
      
        draw: function()
              {
                noStroke();
                fill(0, 50, 255, this.a);
                circle(this.x, this.y, this.r * 2);
              }
    };
    arr[i].create();
  }
}

function draw() 
{
   background(0);
   for (let i = 0; i < arr.length; ++i)
   {
      arr[i].draw(); 
      arr[i].update();
      if (arr[i].a < 1)
        arr[i].create();
   }
}
