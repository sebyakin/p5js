let ball1;
let ball2;
var r = 220;
var g = 220;
var b = 220;

// 

// 

function setup() {
  createCanvas(600, 400);
  ball1 = new Ball(100,20,20,255);
  ball2 = new Ball(500,100,50,100);
}

function draw() {
  background(r,g,b);
  ball1.move();
  ball1.bounce();
	ball1.show();
  ball1.recolor();
  ball2.move();
  ball2.bounce();
	ball2.show();
  ball2.recolor();
  bg();
  }

function bg() {
  if (ball2.y > height) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  
  
}
