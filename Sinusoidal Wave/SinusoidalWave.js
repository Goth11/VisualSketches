let arr;
let frecv;
let amp;
let slider_frecv;
let slider_amp;

function setup() 
{
    createCanvas(800, 800);
    arr = [];
    frecv = width;
    amp = height / 4;
  
    slider_frecv = createSlider(0, 25, 1, 1);
    slider_frecv.position(10, 10);
  
    slider_amp = createSlider(0, height / 2 - 3, height / 4, 1);
    slider_amp.position(10, 50);
  
    for (x = 0; x <= width; ++x)
    {
        let p = createVector(x, x);
        arr.push(p);
    }
}

function draw()
{
    background(255);
    MiddleLine();
    Fun();
    TextBox();
}

function F(x)
{
    return -sin(frecv * map(x, 0, width, 0, TWO_PI)) * amp;
}

function MiddleLine()
{
    translate(0, 0);
    stroke(0);
    line(0, height / 2, width, height / 2);
    line(width / 2, height / 2 - height / 60, width / 2, height / 2 + height / 60);
}

function Fun()
{  
    translate(0, height / 2);
    stroke(255, 0, 0);
    strokeWeight(2);
  
    let v = 1;
    for (j = 0; j < 3; ++j)
        for (i = 0; i < arr.length; ++i)
        {
            if (i < arr.length - v)
              [arr[i].y, arr[i + v].y] = [arr[i + v].y, arr[i].y];

            if (i > v && j == 2) 
              line(arr[i - v - 1].x, F(arr[i - v - 1].y), arr[i - v].x, F(arr[i - v].y));
        }
  
    frecv = slider_frecv.value();
    amp = slider_amp.value();
}

function TextBox()
{
    translate(0, -height / 2);
    stroke(0);
    strokeWeight(1);
    textSize(min(width, height) / 32);
  
    text("Frequency: " + slider_frecv.value(), slider_frecv.x + slider_frecv.width + 10, 
         slider_frecv.y + textSize());
  
    text("Amplitude: " + slider_amp.value(), slider_amp.x + slider_amp.width + 10, 
         slider_amp.y + textSize());
}
