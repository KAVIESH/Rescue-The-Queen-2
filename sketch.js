const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tiger1, tiger2, tiger3;
var wall1,wall2,wall3
var arrow;
var  currentArrow;

var timeleft = 100;
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}


function setup(){
    var canvas = createCanvas(displayWidth-100,displayHeight-100);
    engine = Engine.create();
    world = engine.world;
    
   var downloadTimer = setInterval(function(){
       
     if(timeleft <= 0){
       clearInterval(downloadTimer);
       text("Finished",50, 50);
     } else {
      text("countdown : " +  timeleft + " seconds remaining",200,200);
     }
     timeleft -= 1;
   }, 1000);

    tiger1 = new Tiger(displayWidth/2, 50, 200, 100);
    tiger2 = new Tiger(displayHeight/2-100, 50, 200, 100);
    tiger3 = new Tiger(displayHeight/2+100, 50, 200, 100);
    //king = new King(displayWidth/2, displayHeight -50);
    
    king = new King(displayWidth/2, displayHeight-300)
    
    //right wall
    wall1 = new Wall(displayWidth-10, displayHeight/2, 10,displayHeight)
    //left wall
    wall2 = new Wall(10, displayHeight/2, 10,displayHeight)
    //bottom wall
    wall3 = new Wall(displayWidth/2, displayHeight -110, displayWidth,10)

    arrow1 = new Arrow(displayWidth/2-100, displayHeight-300);
    arrow2 = new Arrow(displayWidth/2-150, displayHeight-300);
    arrow3 = new Arrow(displayWidth/2-100, displayHeight-300);
    arrow4 = new Arrow(displayWidth/2-150, displayHeight-300);
    arrow5 = new Arrow(displayWidth/2-150, displayHeight-300);
    arrowArray = [arrow1, arrow2,arrow3, arrow4, arrow5]

    
//bird = new Bird(100,100);

}

function draw(){
    background(255);
    textSize(20);
    text("Time Left: "+ timeleft, displayWidth/2 + displayWidth/3, displayHeight/2 - displayHeight/3 - 50);
    console.log(timeleft)
                    Engine.update(engine);
                    tiger1.display();
                    wall1.display();
                    wall2.display();
                    wall3.display();
                     king.display();
                     tiger2.display();
                     tiger3.display();
   
   arrow1.display();
   arrow2.display();
   arrow3.display();
   arrow4.display();
   arrow5.display();
   
  
//<div id="countdown"></div>
}


function keyPressed(){
console.log("Key is pressed")
   
//left arrow	37
//up arrow	38
//right arrow	39
//down arrow	40

var posX = king.body.position.x;
var posY = king.body.position.y;
if (keyCode === 39){
    console.log("Right arrow is pressed")
    Matter.Body.setPosition(king.body,{x: posX + 20, y: posY})
    //Matter.Body.setVelocity(king.body, {x: 2, y: 0});
}
if (keyCode === 37){
    Matter.Body.setPosition(king.body, {x: posX -20, y: posY});
}

if (keyCode === 38){
    Matter.Body.setPosition(king.body, {x: posX, y: posY -20});
}

if (keyCode === 40){
    Matter.Body.setPosition(king.body, {x: posX, y: posY + 20});
}


console.log(king.body.position)



if (keyCode === 32){

   currentArrow = arrowArray.pop()
   Matter.Body.setPosition(currentArrow.body, {x: king.body.position.x , y:king.body.position.y})
    Matter.Body.setVelocity(currentArrow.body, {x: 0 , y: -20})
}

}