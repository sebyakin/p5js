class Ball {

  constructor(x,y,r,c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xspeed = 4;
  this.yspeed = -3;
  this.c = c;
  }

	move() {
  this.x = this.x + this.xspeed;
  this.y = this.y + this.yspeed;
	return this.x;
  }
  
  bounce() {
      if (this.x > width || this.x < 0) {
    	this.xspeed = this.xspeed * -1;
  }
  
  		if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1; }
    
  }
  
  recolor() {
  		if (this.x > width || this.x < 0) {
      this.c = this.c - 20; }
    
    		if (this.y > height || this.y < 0) {
      this.c = this.c + 50; }
    
  		if (this.c >= 255 || this.c <=0) {
        this.c = 240; }
}
  
  show() {
  noStroke();
  fill(this.c,0,240);
  strokeWeight(4);
  ellipse(this.x, this.y, this.r * 2);
  }  
  

}
