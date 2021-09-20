let img, w, h, fout, asc, avg;

function setup() {
  w = 100;
  h = 50;
  createCanvas(w, h);
  img = loadImage("images/sans.jpg");
  fout = "";
  asc = ["■", " "];
  avg = 0;
}

function draw() {
  image(img, 0, 0, w, h);
  loadPixels();
  //Average brightness and b&w conversion
  for (let i = 0; i < h; ++i)
    for (let j = 0; j < w; ++j)
    {
      let index = 4 * (w * i + j);
      let s = 0;
      for (let ind = 0; ind < 3; ++ind)
        s += pixels[index + ind];
      s /= 3;
      for (let ind = 0; ind < 3; ++ind)
        pixels[index + ind] = s;
      avg += s;
    }
  
  avg /= (w * h);
  avg = int(avg) + int(avg - int(avg) >= 0.5); //rounding 
  //to ascii
  for (let i = 0; i < h; ++i, fout += "\n")
    for (let j = 0; j < w; ++j)
    {
      let val = pixels[4 * (w * i + j)];
      if (val < avg)
        fout += asc[0];
      else
        fout += asc[1];
    }
  
  updatePixels();
  saveStrings([fout], 'output.txt');
  noLoop();
}
