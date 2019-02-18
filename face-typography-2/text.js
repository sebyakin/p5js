class Txt {
	constructor(x,y,msg,letters) {
  this.msg = msg;
  this.ind = 0;
  this.letters = letters;
  }

  play() {
  this.reading = this.msg.substring(this.ind, this.ind+this.letters);
  this.ind++;
  if (this.ind > this.msg.length) {
    this.ind = 0;
  	}
  }

  move(x,y,d){
  this.x = x;
  this.y = y;
  this.d = d;
  }

  show() {
  	fill(213,155,52);
  	textSize(this.d);
    textFont(myFont);
  	textAlign(CENTER, CENTER);
    text(this.reading, this.x, this.y);
  }

}
