function preload() {
	txt = loadStrings('youtubeHistory.txt');

}

function setup() {
	let str = round(random(txt.length));
	let res = createDiv(txt[str]);
  noCanvas();
	res.parent('cont');
  // createP(join(txt, "<br/>"));
}

function draw() {
  background(220);
}
