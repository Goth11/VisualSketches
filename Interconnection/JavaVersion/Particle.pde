public class Particle {  
  Vertex[] v;
  float rSpeed, aSpeed;
  
  public Particle(Vertex[] v, float rSpeed, float aSpeed) {
    this.v = new Vertex[3];
    for (int i = 0; i < 3; i++) {
      this.v[i] = v[i];
    }

    this.rSpeed = rSpeed;
    this.aSpeed = aSpeed;
  }

  void draw() {
    noFill();
    stroke(map(this.avgA(), 0, TWO_PI, 0, 255), 10);
    beginShape();
    for (int i = 0; i < 3; i++) {
      float x = this.v[i].r * (float)Math.cos(this.v[i].a);
      float y = this.v[i].r * (float)Math.sin(this.v[i].a);
      vertex(x, y);
      //fill (100, 10);
      //circle(x, y, 2);
    }
    endShape();
  }

  void update() {
    for (int i = 0; i < 3; i++) {
      this.v[i].r += this.rSpeed;
      if (this.v[i].r > maxR) {
        this.v[i].r -= maxR;
      }
      else if (this.v[i].r < 0) {
        this.v[i].r += maxR;
      }

      this.v[i].a += this.aSpeed;
      if (this.v[i].a > TWO_PI) {
        this.v[i].a -= TWO_PI;
      }
      else if (this.v[i].a < 0) {
        this.v[i].a += TWO_PI;
      }
    }
  }

    float avgA() {
      float a = 0;
      for (int i = 0; i < 3; i++) {
        a += this.v[i].a;
      }
      return a / 3f;
    }
  }
  
