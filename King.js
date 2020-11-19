class King extends BaseClass {
    constructor(x, y){
  super(x, y, 50, 50);
  this.image = loadImage("sprites/king.png");
}
display(){
  
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  //rectMode(CENTER);
  //rect(0, 0, this.width, this.height);
 imageMode(CENTER);
  image(this.image, 0, 0);
  pop();
}


    }