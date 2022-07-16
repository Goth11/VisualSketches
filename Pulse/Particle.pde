public class Particle
  {
    int initX, initY, initR, x, y, r;
    boolean done;
    float factorX, factorY;
    int[] colors = {#111258, #4c1559, #b1235e, #f0855f, #f8c48a, #f8f4a9};
    public Particle(int x, int y, int r)
    {
      this.initX = x;
      this.initY = y;
      this.initR = r;
      this.x = x;
      this.y = y;
      this.r = r;
      this.done = false;
      this.factorX = 2.0;
      this.factorY = 2.0;
    }
    
    void reset()
    {
      this.x = this.initX;
      this.y = this.initY;
      this.r = this.initR;
      this.done = false;
      this.factorX = 2.0;
      this.factorY = 2.0;
    }
    
    void draw()
    {
      noStroke();
      colorMode(HSB);
      fill(this.colors[(int)map(noise(this.x - width / this.factorX, this.y - height / this.factorY), 0, 1, 0, colors.length - 0.01)]);
      square(this.x, this.y, this.r * 2);
      square(width - this.x - 1, this.y, this.r * 2);
      square(this.x, height - this.y - 1, this.r * 2);
      square(width - this.x - 1, height - this.y - 1, this.r * 2);
      colorMode(RGB);
    }
    
    void update()
    {
      this.x += 1;
      if (this.x > width / 2)
      {
        this.x = 0;
        this.y += 1;
        if (this.y > height / 2)
        {
            this.done = true;
        }
      }
      this.r = (int)map(noise(this.x - width / 2f, this.y - height / 2f), 0, 1, min(width, height) / 256f, min(width, height) / 512f);    
    }
  }
