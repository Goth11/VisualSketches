Particle[] arr;
float maxR;

void setup() {
	fullScreen(P2D);
	arr = new Particle[min(width, height) / 5];
	maxR = (float)Math.sqrt(width * width + height * height) / 2f;
  int arrInd = 0;
	for (int i = 0; i < min(width, height) / 5; i++) {
		boolean ok = false;
		while (!ok) {
			ok = true;
			Vertex[] vertices = new Vertex[3];
			for (int j = 0; j < 3; j++) {
				float r = random(maxR);
				float a = random(TWO_PI);
				vertices[j] = new Vertex(r, a);
			}

			if (!((vertices[0].a != vertices[1].a) || (vertices[0].a != vertices[2].a) || (vertices[1].a != vertices[2].a))) {
				ok = false;
			}

			else {
				float scl = min(width, height) / 80000;
				float rSpeed = map(noise(i), 0, 1, -scl, scl);//random(-scl, scl);
				float scl2 = 0.0025;
				float aSpeed = map(noise(i), 0, 1, -scl2, scl2);//random(-scl2, scl2);
				arr[arrInd] = new Particle(vertices, rSpeed, aSpeed);
        arrInd++;
			}
		}
	}
	background(0);
}

void draw() {
	//background(0);
	translate(width / 2, height / 2);
	for (int ind = 0; ind < 1; ind++) {
		for (int i = 0; i < arr.length; i++) {
			arr[i].draw();
			arr[i].update();
		}
	}
}
