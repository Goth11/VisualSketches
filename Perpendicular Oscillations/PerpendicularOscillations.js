var corp, resortX, resortY, omega, distMax2X, distMax2Y, t, t_off, A, B, phi1, phi2, start;

function setup()
{
    createCanvas(600, 600);
    Creare();
}

function draw() 
{
    translate(width / 2, height / 2);
    Afisare();
    Actualizare();
}

function Creare()
{
    CreareCorp();
    CreareResortX();
    CreareResortY();
    omega = sqrt(resortX.k / corp.m);
    A = width / 2;
    B = height / 2;
    distMax2X = height * height / 4 + width * width;
    distMax2Y = width * width / 4 + height * height;
    t = 0;
    t_off = 1.0 / 60.0;
    phi1 = 0;
    phi2 = 0;
    start = false;
}

function Afisare()
{
    background(255);
    resortX.afisare();
    resortY.afisare();
    corp.afisare();
}

function Actualizare()
{
     if (mouseIsPressed && Inauntru(mouseX, mouseY))
     {
         corp.x = map(mouseX, 0, width, -width / 2, width / 2);
         corp.y = map(mouseY, 0, height, -height / 2, height / 2);
         phi1 = asin(corp.x / A);
         phi2 = asin(corp.y / B);
         t = 0;
         start = true;
     }
     
     corp.actualizare();
     resortX.actualizare();
     resortY.actualizare();
     t += t_off;
}

function Inauntru(x, y)
{
  	var lim = 1;
	return (x - corp.w / 2 > lim && 
            x + corp.w / 2 < width - lim && 
            y - corp.h / 2 > lim && 
            y + corp.h / 2 < height - lim);
}

function CreareCorp()
{
     corp = 
     {
       x: 0,
       y: 0,
       w: width / 12,
       h: height / 17,
       m: 0.1,
       
       afisare : function()
       {
           noStroke();
           fill(0);
           rectMode(CENTER);
           rect(this.x, this.y, this.w, this.h);
       },
       
       actualizare : function()
       {
           if (start && !mouseIsPressed)
           {
             this.x = A * sin(omega * t + phi1);
             this.y = B * sin(omega * t + phi2);
           }
       }
     }
}

function CreareResortX()
{
    resortX = 
    {
      x1: corp.w / 2,
      y1: 0,
      x2: width / 2,
      y2: 0,
      h: 5,
      k: 1,
      
      afisare : function()
      {
          stroke(151);
          strokeWeight(this.h);
          line(this.x1, this.y1, this.x2, this.y2);
      },
      
      actualizare: function()
      {
         this.x1 = corp.x + corp.w / 2;
         this.y1 = corp.y;
         var delta_x = this.x1 - this.x2;
         var delta_y = this.y1 - this.y2;
         var dist2 = delta_x * delta_x + delta_y * delta_y;
         this.h = map(dist2, 0, distMax2X, 8, 2);
      }
    }
}

function CreareResortY()
{
    resortY = 
    {
      x1: 0,
      y1: -corp.h / 2,
      x2: 0,
      y2: -height / 2,
      h: 5,
      k: 1,
      
      afisare : function()
      {
          stroke(151);
          strokeWeight(this.h);
          line(this.x1, this.y1, this.x2, this.y2);
      },
      
      actualizare: function()
      {
         this.x1 = corp.x;
         this.y1 = corp.y - corp.h / 2;
         var delta_x = this.x1 - this.x2;
         var delta_y = this.y1 - this.y2;
         var dist2 = delta_x * delta_x + delta_y * delta_y;
         this.h = map(dist2, 0, distMax2Y, 8, 2);
      }
    }
}
