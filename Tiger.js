class Tiger extends BaseClass {
  constructor(x, y, velocityX, velocityY){
    super(x,y,50,50);
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.image = loadImage("sprites/Tiger.png");
    
    Matter.Body.setVelocity(this.body, {x: velocityX, y: velocityY});
    console.log(this.body);
  
  }
display(){
  var Xoffset = Math.round(random(-5,5))
  var Yoffset = Math.round(random(1,6))
  var posX = this.body.position.x;
  var posY = this.body.position.y;
  //Matter.Body.setVelocity(this.body, {x: this.velocityX, y: this.velocityY});
  Matter.Body.setPosition(this.body, {x: posX + Xoffset, y: posY + Yoffset});
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




};
