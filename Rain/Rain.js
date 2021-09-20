var Drops = [], rows = 15, cols, variation = 30;

function setup(){

	createCanvas(700, 700);
	cols = window.innerWidth / 72;
  	for(var i = 0; i < rows; i++){
      	Drops[i] = [];
      	for(var j = 0; j < cols; j++){

        	Drops[i][j] = {

            		size : random(10, 55),
              		alpha : 0,
              		x : j * 80 + 15 + random(-variation, variation), 
              		y : i * 80,
              		speed : random(5.5, 12)
              			   }
            Drops[i][j].alpha = 
              	map(Drops[i][j].size, 10, 55, 15, 230);
            		
        						   }
    						   }
 noStroke();
}

function draw(){
	
  background(0);
  for(var i = 0; i < rows; i++){
  		for(var j = 0; j < cols; j++){
        
          		fill(0, 0, 139, Drops[i][j].alpha);
        		rect(Drops[i][j].x, Drops[i][j].y, 
                        Drops[i][j].size / 5.5, Drops[i][j].size);
          		Drops[i][j].y += Drops[i][j].speed;
          		if(Drops[i][j].y - Drops[i][j].size > height){
               	Drops[i][j] = {

            		size : random(10, 55),
              		alpha : 0,
              		x : j * 80 + 15 + random(-variation, variation), 
              		y : 0,
              		speed : random(5.5, 12)
              			      }
          	  Drops[i][j].alpha = 
              	map(Drops[i][j].size, 10, 55, 15, 230);
                											 }
        }
  }
 
}
