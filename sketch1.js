const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var apple,appleSprite, arrow;
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    
    apple = Bodies.rectangle(200, 200, 50, 50);
    World.add(world, apple);

    arrow = Bodies.circle(200, displayHeight-50, 20)
    World.add(world,arrow)

    var options = {isStatic : true}
    ground = Bodies.rectangle(displayWidth/2, displayHeight-10, width,10, options)

    World.add(world, ground)

    
//bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    if(frameCount % 10 === 0){
    var randVelocityX = Math.round(random(-10,10))
    var randVelocityY= Math.round(random(-10,10))
    //Matter.Body.setVelocity(apple, {x:randVelocityX, y: randVelocityY})
    }
    
    push()
    fill("green")
    rect(ground.position.x, ground.position.y, width, 10);
    pop()

    //console.log(Matter.SAT.collides(apple, ground))
    var collides = Matter.SAT.collides(apple,arrow).collided
    console.log(collides)
    if(collides){
        World.remove(world, apple);
        console.log("colliede")
        push()
        fill("black")
        pop()
    }
    
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setVelocity(arrow, {x:0, y:-20})
    }
}