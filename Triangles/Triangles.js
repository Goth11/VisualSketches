let scl, P, initTime;

function setup() 
{
  createCanvas(800, 800);
  scl = 10;
  initTime = 0;
  InitPoints();
}

function draw() 
{
  background(0, 0, 30);
  DrawPoints();
  if (mouseIsPressed && millis() - initTime >= 200)
  {
    initTime = millis();
    InitPoints();
  }
}
  
function InitPoints()
{
  P = [];
  for (let i = 0; i < scl; ++i)
  {
    P[i] = [];
    for (let j = 0; j < scl; ++j)
    {
      //noFill();
      //stroke(255);
      //let x = i * width / scl;
      //let y = j * height / scl;
      let w = width / scl;
      let h = height / scl;
      //rect(x, y, w, h);
      let point = 
          {
            x : random(w),
            y: random(h)
          }
      P[i][j] = point;
      //push();
      //translate(x, y);
      //ellipse(point.x, point.y, 3);
      //pop();
    }
  }
}

function DrawPoints()
{
    for (let i = 0; i < scl; ++i)
    {
      for (let j = 0; j < scl; ++j)
      {
        let di = [0, -1, 0, 1];
        let dj = [1, 1, 1, 1];
        let x1 = i * width / scl;
        let y1 = j * height / scl;
        for (let ind = 0; ind < 4; ++ind)
        {
          let i2 = i + di[ind];
          let j2 = j + dj[ind];
          if (Inside(i2, j2))
          {
              let off = noise(i, j);
              if (off < 0.7)
              {
                let base_color = (int)(map(off, 0, 0.7, 0, 16777216)).toString(16);
                let c = color("#" + base_color);
                stroke(c);               
                let x2 = i2 * width / scl;
                let y2 = j2 * height / scl;
                line(P[i][j].x + x1, P[i][j].y + y1, P[i2][j2].x + x2, P[i2][j2].y + y2);
              }
          }
        }
      }
    }
}

function Inside(i, j)
{
  return i >= 0 && i < scl && j >= 0 && j < scl;
}
