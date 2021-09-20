function setup() {
	createCanvas(600, 600);
    background(255);
}

var siz=-1;

function circles(){
      for(var x=0;x<=siz;x+=5){
                fill(random(256),random(256),random(256));
                ellipse(x,x,x,x);
                fill(random(256),random(256),random(256));
                ellipse(width-x,x,x,x);
                fill(random(256),random(256),random(256));
                ellipse(width-x,height-x,x,x);
                fill(random(256),random(256),random(256));
                ellipse(x,height-x,x,x);
      }
    
}

function draw() {
    if(key=='s'&&siz>=0)siz-=5;
    if(key=='w'&&siz<=height+100)siz+=5;
    circles();
    if(key=='c')background(255);
}
