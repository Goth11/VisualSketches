var Maze = [], size = 20, rows, cols, x = 1, y = 1, 
    last_x = x - 1, last_y = y - 1, running = true;

function setup(){
 	createCanvas(600, 600);
  	rows = width / size;
  	cols = height / size;
  	rows--;
  	cols--;
  	background(0);
  	stroke(255);
  	noFill();
  	for(var i = 0; i <= rows; i++){
      	Maze[i] = [];
    	for(var j = 0; j <= cols; j++){
        		if(i != 0 && j != 0 && i != rows && j != rows){
                  rect(i * size, j * size, size, size);
                  Maze[i][j] = false;
                											   }
          		else Maze[i][j] = true;
        }
    }  
  noStroke();
}

function draw(){

  	if(running){
      
	Maze[x][y] = true;
    fill(0, 0, 255);
    if(last_x != 0)
      rect(last_x * size + 3, last_y * size + 3, size - 4, size - 4);
  	fill(255, 0, 0);
  	rect(x * size + 3, y * size + 3, size - 4, size - 4);
  	var Neighbours = [], unvisited = false;
  	Neighbours[0] = Maze[x - 1][y];
  	if(Neighbours[0] == false)unvisited = true;
  	Neighbours[1] = Maze[x + 1][y];
  	if(Neighbours[1] == false)unvisited = true;
  	Neighbours[2] = Maze[x][y - 1];
    if(Neighbours[2] == false)unvisited = true;
  	Neighbours[3] = Maze[x][y + 1];
    if(Neighbours[3] == false)unvisited = true;
  	if(unvisited == true){
     		last_x = x;
    		last_y = y;
      
    		var searching = true, r;
      		while(searching){
            	r = int(random(0, 4));
              	if(!Neighbours[r])searching = false;
            				}
      		if(r == 0)--x;
      		if(r == 1)++x;
      		if(r == 2)--y;
      		if(r == 3)++y;
    			}
  else{
    var searching = true;
  	for(var i = 1; searching == true && i < rows; i++){
    		for(var j = 1; searching == true && j < cols; j++){
            	if((i != x || j != y) && !Maze[i][j]){
                	searching = false;
                    last_x = x;
    				last_y = y;
                  	x = i;
                  	y = j;
                									}
            											}
    											}
      if(searching)running = false;
      }

       }
}
