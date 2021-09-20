var   grid = new Array(101), mineNeighbours = new Array(101), 
      flag = new Array(101), 
      rectSize = 20, //20 default, 45 for a quicker play
      notRevealedEmpty = 0, notRevealedMine = 1, revealedEmpty = 2, 			  revealedMine = 3,
      putFlag = 1, removeFlag = 0,
	  gameLost = 0, Victory = 0;

function setup(){

  createCanvas(600, 600);
  
  for(var x = 0; x < 101; x++){
    
      grid[x] = new Array(101);
      mineNeighbours[x] = new Array(101);
      flag[x] = new Array(101);
    
      for(var y = 0; y < 101; y++){
        
             grid[x][y] =  mineNeighbours[x][y] = flag[x][y] = 0;
        
      							 }
    
   						      }
  
  //determine if a rectangle has a mine or not
   for(var y = 2; y * rectSize <= height - rectSize - rectSize; y++){
     
     for(var x = 2; x * rectSize <= width - rectSize - rectSize; x++){
       
               var r = int(random(0, 7)); 
               if(r == 4)grid[x][y] = notRevealedMine; //1 out of 7 chances 
               else
               grid[x][y] = notRevealedEmpty;
                                                                      }
     
                                                                     }
       
      //count mine neighbours                                                              
     for(var y = 2; y * rectSize <= height - rectSize - rectSize; y++){
       
     for(var x = 2; x * rectSize <= width - rectSize - rectSize; x++){
       
                   if(grid[x][y] == notRevealedEmpty){
                // only the ones without mines will show their neighbours
                                for(var y1 = y - 1; y1 <= y + 1; y1++)
                                    for(var x1 = x - 1; x1 <= x + 1; x1++)
                                        if(grid[x1] [y1] == notRevealedMine) 
                                                 mineNeighbours[x][y]++;
                                                     }
                                                                      }
       
                                                                     }                                                           
}

function draw(){

  background(255);
  Game();
           
}

function Game(){

  var victory = 1;
  if(gameLost)victory = 0;
  
  for(var y = 2; y * rectSize <= height - rectSize - rectSize; y++){
    
          var rectY = y * rectSize;
    
     for(var x = 2; x * rectSize <= width - rectSize - rectSize; x++){
       
             var rectX = x * rectSize;
       
                if(!Victory && grid[x][y] < 2){    //if not revealed
                
                       if(
                         mousePressedCheck(rectX, rectY, rectSize) &&
                         mouseButton == RIGHT && frameCount % 5 == 0
                          ){
     // right click to put a flag on a tile wich is suspected to be a mine 
                            
                                if(flag[x][y] == removeFlag)
                                        flag[x][y] = putFlag;
                                                                                                            else flag[x][y] = removeFlag; 
                                
                                                                                           				 }
                                
    if(victory && grid[x][y] != notRevealedMine) victory = 0;
/* if all tiles EXCEPT those with mines are revealed NOT because the game was lost 
    (if(gameLost)victory = false; ) victory will remain true */
                                  
      if(
         gameLost ||
         ( mousePressedCheck(rectX, rectY, rectSize) && mouseButton == LEFT) 
        ){
                                  
         grid[x][y] += 2; 
   //if revealed, it becomes revealedEmpty or revealedMine based on its previous value
                                    
                   if(
                     !gameLost && !victory 
                      && grid[x][y] == revealedEmpty &&
                      mineNeighbours[x][y] == 0  
                    ){
             // all neighbours with 0 neighbours and their neighbours with 0 neighbours and so forth will be shown until a tile with mineNeighbours > 0 or an extremity, including it
                         
                   var Revealing = 1;
                   while(Revealing){
                                      
                Revealing = false;
        for(var y1 = 2; y1 * rectSize <= height - rectSize - rectSize; y1++){
          
        for(var x1 = 2; x1 * rectSize <= width - rectSize - rectSize; x1++){
                                              
          if(grid[x1][y1] == notRevealedEmpty){
            // only the ones without mines can be shown
                                                        
                 var has0MineNeighboursNeighbour = 0;
            
     for(var y2 = y1 - 1; !has0MineNeighboursNeighbour && y2 <= y1 + 1; y2++)
       
      for(var x2 = x1 - 1; !has0MineNeighboursNeighbour && x2<= x1 + 1; x2++)
        
          if(grid[x2] [y2] == revealedEmpty && mineNeighbours[x2][y2] == 0 ) 
  							has0MineNeighboursNeighbour = 1;
                                                                                            if(has0MineNeighboursNeighbour){
                                                             
              	grid[x1][y1] += 2;
               if(!Revealing && mineNeighbours[x1][y1] == 0)Revealing = 1;
               /*if another 0 mineNeighbours tile is revealed, the process 	will repeat      */
                                                                                          								  }
                                                               
                                                                                										   }
                                                                                                         										  }
                                                                                                   												    }
                                 }                                         
                               }
                          
                                                                                                }
                                    
            if(!gameLost && grid[x][y] == revealedMine)  gameLost = 1; 
                  					//if a mine is revealed
                       
            }                     
                                
              strokeWeight(2);                 
              if(grid[x][y] < 2){  // if it is still not revealed
                
                fill(151);    
                rect(rectX, rectY, rectSize, rectSize);
                
                if(flag[x][y] == putFlag){ // if it has a flag
                  
                  fill(255, 0, 0);
rect(rectX + rectSize / 4, rectY + rectSize / 4, rectSize / 2, rectSize / 2);
                  
                                       }
                               }

                else{      // if it is revealed
                  
                  fill(191);
                  rect(rectX, rectY, rectSize, rectSize);
                  
                  if(grid[x][y] == revealedMine){

                      fill(0);
                      strokeWeight(1);
        ellipse(rectX + (rectSize + 2) / 2, rectY + (rectSize + 2) / 2, rectSize - 10, rectSize - 10); 
                                    // all these " + 2 " (not only here) are because of the strokeWeight(2) of the rectangles
                      
                                                }
                  
                   else{      
                  // if it is not a mine, it will show how many of its mine neighbours are mines
                                           
                          if(mineNeighbours[x][y] != 0){ 
                  // if there are no mine neighbours, nothing will be shown 
                          fill(0, 0, 255);
                          textSize(rectSize);
               text( mineNeighbours[x][y], rectX + 4, rectY + rectSize - 2);
                                                    }
                       }
                                                                                 
                     }
                                
                        }
                        
                                                                   }   
                                   
           if(!Victory && victory)
               Victory = 1;

          else if(Victory){
               textSize(50);
               fill(250, 0, 0);
               text("VICTORY!!", width / 2 - rectSize * 5, height / 2 + rectSize );
           }
  
             
}

function mousePressedCheck(x, y, size){

      return (mouseIsPressed  && mouseX >= x + 1 && mouseX <= x + size - 1 && mouseY >= y + 1 && mouseY <= y + size - 1);
}
