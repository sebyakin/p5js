let pr = [];
let canvas;


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

}
