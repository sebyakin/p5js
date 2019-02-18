function setup() {
	noCanvas();
	loadJSON('food.json', gotData);
}

function gotData(data) {
	print(data);
	food = data;
	print(food[1].place);
}


function mouseClicked(){
	let str = round(random(food.length));
	let res = createDiv(food[str].place);
	res.parent('cont');
	let pic = createImg(food[str].img);
}


function draw() {
  background(220);
}
