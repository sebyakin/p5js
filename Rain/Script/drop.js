function Preloader() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.d = 80;
  this.yspeed = map(this.z, 0, 20, 1, 20);
  let img = createImg('images/spin.gif');

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
  noStroke();
  img.position(this.x, this.y);
  img.size(50,50)
}

}



// STRING

// function Preloader() {
//   this.x = random(width);
//   this.y = random(-500, -50);
//   this.z = random(0, 20);
//   this.d = 80;
//   this.yspeed = map(this.z, 0, 20, 1, 20);
//   let txt = createDiv('This is an HTML string!');
//
//   this.fall = function() {
//     this.y = this.y + this.yspeed;
//     var grav = map(this.z, 0, 20, 0, 0.2);
//     this.yspeed = this.yspeed + grav;
//
//     if (this.y > height) {
//         this.y = random(-200, -100);
//         this.yspeed = map(this.z, 0, 20, 4, 10);
//     }
//   }
//
//   this.show = function() {
//   noStroke();
//   txt.position(this.x, this.y);
//
// }
//
// }
