let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let eyerX = 0;
let eyerY = 0;
let earlX = 0;
let earlY = 0;
let earrX = 0;
let earrY = 0;
let myFont;
let txt1;
let txt2;
let txt3;
let s = 100;

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);

  myFont = loadFont("monarch.ttf");
  txt1 = new Txt(0,0,'see•no•evil',1, s);
  txt2 = new Txt(0,0,'see•no•evil',1, s);
  txt3 = new Txt(0,0,'see•no•evil',1, s);

}

function gotPoses(poses) {
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    let erX = poses[0].pose.keypoints[2].position.x;
    let erY = poses[0].pose.keypoints[2].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5);
    eyerX = lerp(eyerX, erX, 0.5);
    eyerY = lerp(eyerY, erY, 0.5);
  }
}

function draw() {
  frameRate(8);
  let d = dist(noseX, noseY, eyelX, eyelY);
  image(video,0,0);

  txt1.show();
  txt1.play();
  txt1.move(noseX,noseY,d);

  txt2.show();
  txt2.play();
  txt2.move(eyelX,eyelY,d);

  txt3.show();
  txt3.play();
  txt3.move(eyerX,eyerY,d);

  fill(0,255,255);
  rect(noseX-150, noseY-30, 30, 30);
  rect(noseX-150, noseY-70, 30, 30);
  rect(noseX-150, noseY-110, 30, 30);

  rect(noseX+150, noseY-30, 30, 30);
  rect(noseX+150, noseY-70, 30, 30);
  rect(noseX+150, noseY-110, 30, 30);

}
