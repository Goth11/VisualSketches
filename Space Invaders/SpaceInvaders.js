var cannonX = 200, bulletY = 320, enemyY = 2,
    difficulty = 1, enemiesHealth = [], over = 0;

function setup(){
  
	createCanvas(400, 400);
  	noStroke();
    for(var x = 0; x < 10; x++) enemiesHealth[x] = 60;
}

function draw(){
  
	background(51);
  
    if(!over){
      
    	fill(255);
    	bullets();
    	cannon();
    	enemies();
     	if( key == 'c') exit();
    		}
  
  	else
     game_over_interface();
}

function cannon(){
  //actual cannon
  	fill(255);
	rect(cannonX,340,20,50);
  //cannon movement
  mouseDragged();
}

  function mouseDragged(){
    
    	cannonX = mouseX;
}

function bullets(){
  
		ellipse( cannonX + 10, bulletY, 10, 10);
  		bulletY -= 30;
  		if ( bulletY <= 0 ) bulletY = 320;
}

function enemies(){
  
  		var index = 0;
  
	for(var x = 10; x <= 380; x += 40){
      
        if (enemiesHealth[index] > 0){
          
		game_over(x);
        shot(x, index);
        if (enemiesHealth[index] == 60) fill(0, 255, 0);
          
      	else
        if (enemiesHealth[index] >= 40) fill(153, 255, 51);
          
      	else
        if (enemiesHealth[index] >= 20) fill(255, 255, 51);
          
      	else 
        fill(255, 128, 0);
      	rect(x, enemyY, 20, 20); //head
        fill(255, 0,0);
        rect(x + 3, enemyY + 5, 5, 5); //left eye
        rect(x + 12, enemyY + 5, 5, 5); //right eye
        rect(x + 4, enemyY + 13, 12, 3); //mouth
        						  }
        index++;
    						       }
  
    enemyY += difficulty;
  
  	if (enemyY >= 400){
      
      enemyY =- 20;
      difficulty += 0.2;
      for(var x = 0; x < 10; x++) enemiesHealth[x] = 60;
     
    			   	  }
}

function shot(x, index){
  
		if (cannonX + 10 >= x - 20 && cannonX + 10 <= x + 20)
   				enemiesHealth[index]--;
}

function game_over(x){
  
		if(
          enemyY >= 320 &&
          enemyY <= 390 &&
          x >= cannonX - 20 &&
          x <= cannonX + 20
          ){
          		over = 1;
          
          }
}

function game_over_interface(){
  
    textSize(35);
    fill(255, 0, 0);
    text("GAME OVER", 100, 200);
    rect (120, 250, 150, 55);
    fill (255);
    text ("RETRY", 140, 290);
    if (
        mouseIsPressed && mouseX >= 120 && mouseX <= 270 &&
        mouseY >= 250 && mouseY <= 305
        ){
      
      over = 0;
      for(var x = 0; x < 10; x++) enemiesHealth[x] = 60;
      difficulty = 1;
      enemyY = 0; // prevent collision with previous enemies when retrying
    	 }
}
