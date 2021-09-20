let r, d;

function setup()
{
    createCanvas(800, 800);
    d = min(width, height) / 2;
    r = d / 2;
}

function draw() 
{
    translate(width / 2, height / 2);
    background(255);
    Sun();
    Rays();
    //Stop();
}

function Sun()
{
    fill(255);
    noStroke();
    ellipse(0, 0, d);
}

function Rays()
{
    strokeWeight(5);
    for (let alpha = 0; alpha < TWO_PI; alpha += TWO_PI / 120.0)
    {
        let z = random(r, d);
        for (let r1 = r; r1 <= z; ++r1)
        {
          stroke(0, map(r1, r, z, 255, 0));
          point(cos(alpha) * r1, sin(alpha) * r1);
        }
    }
}
