const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var backgroundImg,balloon,balloonImg,balloonImg2
var readPosition
var engine, world

function preload() {
  backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png")
  balloonImg = loadImage("pro-C35 images/Hot Air Ballon-02.png")
  balloonImg2 = loadAnimation("pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  engine = Engine.create()
  world = engine.world
  //createSprite(400, 200, 50, 50);
  balloon = createSprite(100,400,50,50)
  balloon.addImage(balloonImg)
  balloon.scale = 0.3
}

function draw() {
  background(backgroundImg);
  text("Use arrow keys to move the hot air balloon",20,30)
  Engine.update(engine)  

 


  if(keyDown(UP_ARROW)){
    updateHeight(0, -2)
    balloon.addAnimation("hotAirBalloon",balloonImg2)
    balloon.scale = balloon.scale +0.001
}
if(keyDown(DOWN_ARROW)){
  updateHeight(0, 2)
  balloon.addAnimation("hotAirBalloon",balloonImg2)
  balloon.scale = balloon.scale -0.001
}
if(keyDown(LEFT_ARROW)){
  updateHeight(-2, 0)
  balloon.addAnimation("hotAirBalloon",balloonImg2)
  
}
if(keyDown(RIGHT_ARROW)){
  updateHeight(2, 0)
  balloon.addAnimation("hotAirBalloon",balloonImg2)
  
}

drawSprites();

}


function updateHeight(x,y){
  balloon.x = balloon.x + x;
  balloon.y = balloon.y + y;
}

