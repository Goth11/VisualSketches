var scl, xoff, yoff, zoff, zoff_inc, t, inc, rnd;

function setup() 
{
    createCanvas(600, 600);
    scl = 25;
    inc = 0.15;
    zoff = 0;
    zoff_inc = 0.0012;
    rnd = [];
    for (var y = 0; y < height / scl; ++y)
    {
        rnd[floor(y)] = [];
        var div = 1.7;
        for (var x = 0; x < width / scl; ++x)
            rnd[y][x] = 
            {
              x: random(-scl / div, scl / div),
              y: random(-scl / div, scl / div)
            };
    }
    background(0);
}

function draw() 
{
    background(0);
    yoff = 0;
    for (var y = 0; y < height / scl; ++y)
    {
        xoff = 0;
        for (var x = 0; x < width / scl; ++x)
        {
            var perlin = noise(xoff, yoff, zoff);
            var angle = perlin * TWO_PI * 4;
            var vect = p5.Vector.fromAngle(angle, scl);
            vect.x = map(vect.x, -1, 1, x * scl, (x + 1) * scl) + rnd[y][x].x;
            vect.y = map(vect.y, -1, 1, y * scl, (y + 1) * scl) + rnd[y][x].y;
            /*stroke(255);
            line(scl * (x + 0.5), scl * (y + 0.5), vect.x, vect.y);*/
            fill(255, 200);
            noStroke();
            ellipse(vect.x, vect.y, 3, 3);
            xoff += inc;
        }
        yoff += inc;
    }
    
    zoff += zoff_inc;
}
