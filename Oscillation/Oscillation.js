let Particles, n, scl, min_r, max_r;

function setup() 
{
    scl = 800;
    createCanvas(scl, scl);
    n = 70;
    Particles = [];
    min_r = 10;
    max_r = 50;
    for (let i = 0; i < n; ++i)
    {
        Particles[i] = 
        {
            r: (int)(random(min_r, max_r + 1)),
            xf: (int)(random(scl + 1)),
            yf: (int)(random(scl + 1)),
            x: 0,
            y: 0,
            phix: random(TWO_PI),
            phiy: random(TWO_PI),
            tx: (int)(random(180, 241)),
            ty: (int)(random(180, 241)),
            sign: random([-1, 1])
        }
      
        Particles[i].x = Particles[i].xf;
        Particles[i].y = Particles[i].yf;
    }
}

function draw() 
{
    background(200, 0, 40);
    for (let i = 0; i < n; ++i)
    {
      Draw(Particles[i]);
      Update(Particles[i]);
    }
}

function Draw(P)
{
    let alpha = map(P.r, min_r, max_r, 50, 230);
    fill(0, alpha);
    noStroke();
    circle(P.x, P.y, 2 * P.r);
}

function Update(P)
{
    let oscx = map(frameCount % P.tx, 0, P.tx - 1, 0, TWO_PI);
    let oscy = map(frameCount % P.ty, 0, P.ty - 1, 0, TWO_PI);
    P.x = P.xf + cos(oscx + P.phix) * P.r;
    P.y = P.yf + P.sign * sin(oscy + P.phiy) * P.r;
}
