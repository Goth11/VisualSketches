class Tree {
  constructor() {
    this.startBranch = new Branch(width / 2, height, height / 3.5, 0);
    this.scl = 1.3;
    this.branches = [];
    this.index = 0;
    this.branches.push(new Branch(
      this.startBranch.x, this.startBranch.y - this.startBranch.len, this.startBranch.len, PI / 8));
  }
  
  drawTrunk() {
    stroke(72, 111, 56, 50);
    strokeWeight(2);
    line(this.startBranch.x, this.startBranch.y, this.startBranch.x, this.startBranch.y - this.startBranch.len);
  }
  
  draw() {
    if (this.branches[this.index].len > 7.5) {
      let leftBranch = this.branches[this.index].left(this.scl);
      let rightBranch = this.branches[this.index].right(this.scl)
      stroke(72, 111, 56, 50);
      strokeWeight(2);
      line(this.branches[this.index].x, this.branches[this.index].y, leftBranch.x, leftBranch.y);
      line(this.branches[this.index].x, this.branches[this.index].y, rightBranch.x, rightBranch.y);
      this.branches.push(leftBranch);
      this.branches.push(rightBranch);
      this.index++;
    }
  }
}

class Branch {
  constructor(x, y, len, alpha) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.alpha = alpha;
    this.alphaScale = map(noise(this.x), 0, 1, 0.1, 2.25);
  }
  
  left(scl) {
    return new Branch(this.x + this.len / scl * cos(this.alpha),
                      this.y - this.len / scl * sin(this.alpha), 
                      this.len / scl, this.alpha / this.alphaScale);
  }
  
  right(scl) {
    return new Branch(this.x - this.len / scl * cos(this.alpha),
                      this.y - this.len / scl * sin(this.alpha), 
                      this.len / scl, this.alpha / this.alphaScale);
  }
}
