var Characters = [], nr;

function setup(){

  createCanvas(700, 700);   
  nr = window.innerHeight / 15;
  for(var i = 0; i < nr; i++){
    Characters[i] = [];
    var i_size = int(random(25, 35)),
        i_x = int(i * width / 20),
        i_speed = int(random(1, 7));
    if(i > 0)i_x = Characters[i - 1][0].x  + i_size + random(0, 15);
        
    for(var j = 0; j < 5; j++){
    
    Characters[i][j] = {
    value : char(12448 + int(random(0, 96))),
    size : i_size,
    x : i_x,
    y : 0,
    speed : i_speed,
    iteration : int(random(20, 50)),
    alpha : 0
                        }
     
    if(j == 0)Characters[i][j].y = int(random(0, i_size));
    else 
    Characters[i][j].y = int(Characters[i][j - 1].y + i_size + int(random(0, i_size)));

                                }
                               }      
                             
}

function draw(){
  
  background(0);
  for(var i = 0; i < nr; i++){
    for(var j = 0; j < 5; j++){
    CharacterChange(i, j);
    CharacterDraw(i, j);
                                }
                              }
}

function CharacterChange(i, j){

      Characters[i][j].y = (Characters[i][j].y - Characters[i][j].size >= height) ? 0 : Characters[i][j].y += Characters[i][j].speed;
      if(frameCount % Characters[i][j].iteration == 0){
        var last = Characters[i][j].value;
        while(Characters[i][j].value == last)Characters[i][j].value = char(12448 + int(random(0, 96)));
                                                    }
       Characters[i][j].alpha = int(map(Characters[i][j].y, height / 3, height, 255, 0))                                             
}

function CharacterDraw(i, j){

    textSize(Characters[i][j].size);
    fill(0, 255, 40, Characters[i][j].alpha);
    text(Characters[i][j].value, Characters[i][j].x, Characters[i][j].y);
}
