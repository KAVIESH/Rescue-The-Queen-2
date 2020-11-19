class Arrow{
    constructor(x, y, width, height, angle) {
      
        this.body = Bodies.circle(x, y,20);
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(0, 0, this.width, this.height);
       //imageMode(CENTER);
       // image(this.image, 0, 0,this.width, this.height);.
       fill("black")
       ellipseMode(RADIUS)
       ellipse(0, 0, 20, 20)
        pop();
      }
}