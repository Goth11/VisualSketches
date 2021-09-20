var Grid = [], rectSize = 20;

function setup() {
  createCanvas(601, 601);
  for(var i = 0; i <= width / rectSize + 1; i++){
    Grid[i] = [];
    for(var j = 0; j <= height / rectSize + 1; j++){
        if(j == 0 || j == height / rectSize + 1 || i == 0 || i == width / rectSize + 1)Grid[i][j] = false;
        else
        if(int(random(0, 7)) == 1)Grid[i][j] = true;
        else Grid[i][j] = false;
                                            }
                                          }
}

function draw() {
  
    for(var i = 1; i <= width / rectSize; i++){
      for(var j = 1; j <= height / rectSize; j++){
          var neighbours = 0;
          for(var x = i - 1; x <= i + 1; x++)
              for(var y = j - 1; y <= j + 1; y++)
                  if( Grid[x][y] == true && (x != i || y != j))neighbours++;
          var rectX = (i - 1) * rectSize, rectY = (j - 1) * rectSize;
          if(Grid[i][j] == true){
                  if(neighbours < 2 || neighbours > 3)Grid[i][j] = false;    
                                }
          else if(neighbours == 3)Grid[i][j] = true;    
          if(Grid[i][j] == true){ fill(0); stroke(255);}
          else {fill(255); stroke(0);}
          rect(rectX, rectY, rectSize, rectSize);
                                              }        
                                        }
                                        
}
