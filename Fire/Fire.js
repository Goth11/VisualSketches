var Particles = [], total = 250, Colors = [0, 255], ColorsI = 0;

function setup(){
  createCanvas(600, 600);
  for(var i = 0; i < total; i++){
    Particles[i] = {
        x: width / 2,
        y: height,
        vx: random(-1, 1),
        vy: random(-5, -1),
        alpha: 255,
        size: 20
                    }
                              }
   noStroke();
}

function draw(){
  
    if(frameCount % 300 == 0){
    		ColorsI++;
      		ColorsI %= 2;
    						  }
 	background(Colors[ColorsI]);
    for(var i = 0; i < total; i++) Particle(i);
                                          
}

function Particle(i){

  		  var mouse_x = mouseX, mouse_y = mouseY;
  		  if(mouse_x == 0 && mouse_y == 0){
            		mouse_x = width / 2;
            		mouse_y = height;
          								  }
          Particles[i].x += Particles[i].vx;
          Particles[i].y += Particles[i].vy;
          Particles[i].alpha = map(
           int(dist(Particles[i].x, Particles[i].y, mouse_x, mouse_y)),
           0, max(width, height), 255, 0
          							);
          if(Particles[i].x + Particles[i].size < 0 || 
            Particles[i].x - Particles[i].size > width ||
                    Particles[i].y + Particles[i].size < 0
             ){
                 Particles[i].x = mouse_x;
                 Particles[i].y = mouse_y;
                 Particles[i].vx = random(-1, 1);
                 Particles[i].vy = random(-5, -1);
                 Particles[i].alpha = 255;
               }
           fill(Colors[(ColorsI + 1) % 2], Particles[i].alpha);
           ellipse(Particles[i].x, Particles[i].y, 
                   Particles[i].size, Particles[i].size);
}
