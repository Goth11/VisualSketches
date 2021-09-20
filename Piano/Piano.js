let osc, notes, w, pressed, t;

function setup() 
{
    createCanvas(900, 300);
    notes = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.3, 440,
             466.16, 493.88, 523.25];
    w = width / notes.length;
    last_t = 0;
  
    osc = [];
    pressed = [];
    t = [];
    for (let i = 0; i < notes.length; ++i)
    {
         osc[i] = new p5.TriOsc();
         osc[i].amp(0);
         osc[i].freq(notes[i]);
         osc[i].start();
         pressed[i] = false;
         t[i] = 0;
    }
}

function draw()
{
    background(255);
    Keys();
    if (keyIsPressed)
    {
        let ind;
        if (key >= '1' && key <= '9')
          ind = int(key) - int('0');
        else if (key == '0')
          ind = 10;
        else
          switch (key)
          {
              case '-':
                ind = 11;
                break;
                
              case '=':
                ind = 12;
                break;
                
              case '`':
                ind = 0;
                break;
          }
      
        if (millis() - t[ind] >= 250)
        {
          pressed[ind] = !pressed[ind];
          t[ind] = millis();
        }
    }
  
    for (let i = 0; i < pressed.length; ++i)
        if (pressed[i])
        {
          let amp, time = millis() - t[i], limit = 5000;
          if (time > limit)
          {
             amp = 0;
             pressed[i] = false;
          }
          
          else
            amp = map(time, 0, limit, 1, 0);
          
          osc[i].amp(amp);
          if (!Accidental(i))
          {
              stroke(0);
              fill(170);
          }
          
          else
          {
              stroke(255);
              fill(100);
          }
          rect(i * w, 0, w, height);
        }

        else
          osc[i].amp(0);
}

function Keys()
{
    let ind_a = 0;
    for (let i = 0; i < notes.length; ++i)
    {
        if (!Accidental(i))
        {
            stroke(0);
            fill(255);
            rect(ind_a * (w + w / 3.1), 0, w + w / 3.1, height);
            ++ind_a;
        }
    }
  
    ind_a = 0;
    for (let i = 0; i < notes.length; ++i)
    {
        if (Accidental(i))
        {
            stroke(255);
            fill(0);
            rect(ind_a * (w + w / 3.1) +  (w + w / 3.1) / 1.25, 0, 0.529 * w, height / 1.55);
        }
      
        else
          ++ind_a;
    }
}

function Accidental(i)
{
    return !(i == 0 || i == 2 || i == 4 || i == 5 || i == 7 || i == 9 || i == 11 || i == 12);
}
