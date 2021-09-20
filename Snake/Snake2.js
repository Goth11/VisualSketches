var snake = {

	x: 0,
  	y: 0
			},
apple = {

	x: 0,
  	y: 0
},
  score = 0;


function setup(){

	createCanvas(400, 400);
  	snake.x = width / 2;
  	snake.y = height / 2;
}

function draw(){

  	if(!Pause()){
  	background(51);
    Grid();
  	Apple();
  	AppleIsEaten();
    SnakeMovement();
	Snake();
    Score();
    		}

}

var pause = 0;

function Pause(){

	if (!pause && key == 'c')pause = 1;
  	else
    if(pause && key == 'c')pause = 0;
  	return pause;
}

function Grid(){

  	stroke(255);
  
	for(var x = 0; x <= width; x+=25)
      	line(x, 0, x, height);
  
  	for(var y = 0; y <= height; y+=25)
      	line(0, y, width, y);
}

function Apple(){

  	noStroke();
  	fill(255, 0, 0);
	rect(apple.x, apple.y, 26, 26);
}

function AppleIsEaten(){

	 if(snake.x == apple.x && snake.y == apple.y){
     
     		apple.x = random(width);
       		apple.y = random(height);
       		apple.x = int(apple.x) - int(apple.x) % 25;
       		apple.y = int(apple.y) - int(apple.y) % 25;
       		score++;
     }
}

var up = 1, down = 0, left = 0, right = 0;

function SnakeMovement(){

      
		if(!up && (key == 'w' || key == 'W'))up = 1, down = 0, left = 0, right = 0;
      	if(!down && (key == 's' || key == 'S'))up = 0, down = 1, left = 0, right = 0;
      	if(!right && (key == 'd' || key == 'D'))up = 0, down = 0, left = 0, right = 1;
      	if(!left && (key == 'a' || key == 'A'))up = 0, down = 0, left = 1, right = 0;
    							
  if(frameCount % 10 == 0){
  if(up && snake.y > 0)snake.y -= 25;
  if(down && snake.y < height - 25)snake.y += 25;
  if(right && snake.x < width - 25)snake.x += 25;
  if(left && snake.x > 0)snake.x -= 25;
  						  }
}

function Snake(){

	fill(0, 255, 0);
  	rect(snake.x, snake.y, 26, 26);
}

function Score(){

	textSize(30);
  	fill(255, 255, 0);
    text(score, 0, height);
}
