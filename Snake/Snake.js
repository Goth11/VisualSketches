var snake, apple, scl = 20;

function setup()
{
  createCanvas(400, 400);
  snake = new Snake();
  apple = new Apple();
  frameRate(8);
  background(0);
}

function draw()
{
	Background();
  	snake.update();
  	snake.check();
  	apple.check();
  	apple.show();
  	snake.show();
  	Score();
}

function Background()
{
  	  background(0);
  	  stroke(255);
  
      for (var x = 0; x < width; x += scl)
        	line(x, 0, x, height);
  
  	  for (var y = 0; y < height; y += scl)
            line(0, y, width, y);
        	
}

function Score()
{
  	fill(0, 255, 255);
  	textSize(scl * 2);
	text(snake.size, 0, scl * 2);
}

function Snake()
{
  	this.size = 1;
  	this.array = [];
  	this.array[1] = {
      x: width / 2,
      y: height / 2
    };
  	this.array[1].x -= this.array[1].x % 20;
  	this.array[1].y -= this.array[1].y % 20; 
  	var dx = [0, 1, 0, -1],
        dy = [-1, 0, 1, 0],
        d = floor(random(4));
  	this.vx = dx[d];
  	this.vy = dy[d];
  
  	this.update = function()
    {
      	if (keyIsPressed)
        {
           var vx2 = this.vx, vy2 = this.vy;
           if(key == 'w' || key == 'W')d = 0;       
           else if(key == 'd' || key == 'D')d = 1; 
           else if(key == 's' || key == 'S')d = 2;        
           else if(key == 'a' || key == 'A')d = 3;
           this.vx = dx[d];
           this.vy = dy[d];
           if (this.size > 1 && 
               this.array[this.size].x + this.vx * scl ==
               this.array[this.size - 1].x &&
               this.array[this.size].y + this.vy * scl ==
               this.array[this.size - 1].y
               )
           {
            	this.vx = vx2;
                this.vy = vy2;
           }
        }           
      
      	var newX = this.array[this.size].x + this.vx * scl;
      	var newY = this.array[this.size].y + this.vy * scl;
      	if (apple.eaten(newX, newY))
        {
        	++this.size;
          	for(var i = this.size; i > 1; i--)
              this.array[i] = this.array[i - 1];
            this.array[1] = {
            	x: this.array[0].x,
              	y: this.array[0].y
            }
        } 
      
      	 for (var i = 1; i < this.size; i++)
         {
         	this.array[i].x = this.array[i + 1].x;
            this.array[i].y = this.array[i + 1].y;
         }
      
      	this.array[this.size].x = newX;
      	this.array[this.size].y = newY;       
          	
 
    }
    
      	this.check = function()
    {
    	var x = this.array[this.size].x, y = this.array[this.size].y;
        if(x >= width || x < 0 || y >= height || y < 0)setup();
        else 
        {
          var ok = true;
          for (var i = 1; ok && i < this.size; i++)
            if(x == this.array[i].x && y == this.array[i].y)ok = false;
                                                       
          if(!ok)setup();                                             
          
        }
    }
  
	this.show = function()
    {
      	      
    	fill(0, 0, 255);    	
      	noStroke();
        for (var i = 1; i < this.size; i++)
      	rect(this.array[i].x + 1, this.array[i].y + 1, scl - 1, scl - 1);
      	fill(0, 155, 255);
        rect(this.array[this.size].x + 1,
             this.array[this.size].y + 1, scl - 1, scl - 1);
        this.array[0] = this.array[1];
    }
}

function Apple()
{
  
  	this.update = function()
    {
	 var ok = false;
     while(!ok)
     {
      ok = true;
	  this.x = random(width);
   	  this.y = random(height);
  	  this.x -= this.x % scl;
  	  this.y -= this.y % scl;
      for (var i = 1; ok && i <= snake.size; i++)
      {
      	if (this.x == snake.array[i].x && 
           this.y == snake.array[i].y
           )ok = false;
      }
       
     }
     this.time = millis();
    }
    
    this.update();
    
  	this.check = function()
    {
    	if(millis() - this.time > 5000)
        {
          --snake.size;
          if (snake.size == 0)
            	setup();
          
          else this.update();
        }
    }
    
    this.eaten = function(x, y)
    {
    	if(this.x == x && this.y == y)
        {
        	this.update();
          	return true;
        }
    }
  
    this.show = function()
    {
    	fill(255, 0, 0);
      	noStroke();
      	rect(this.x + 1, this.y + 1, scl - 1, scl - 1);
    }
}
