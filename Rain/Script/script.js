let pr = [];
let canvas;

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
    canvas = createCanvas(window.innerWidth	, window.innerHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

  for (var i = 0; i < 10; i++) {
    pr[i] = new Preloader();
  }

}

function draw() {
    background(4,1,243);
  for (var i = 0; i < pr.length; i++) {
    pr[i].fall();
    pr[i].show();
  }

  if (pr.length > 10) {
   pr.splice(0, 1);
 }
}
