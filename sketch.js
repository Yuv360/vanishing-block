const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var shooter,slingShot;
var backgroundImg
var gameState = "onSling"
var box;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(800,350,170,20)
  shooter = new Shooter(200,50);
  slingShot = new SlingShot(shooter.body,{x:200,y:50});
  ground2 = new Ground(1000,150,170,20);
  fill("red");
  box1 = new Box(750,170,10,50)
 
  box3 = new Box(810,170,10,50);
  box5 = new Box(765,120,10,50);
 
  box7 = new Box(825,120,10,50);
  box9 = new Box(810,70,10,50);
 
  box11 = new Box(985,-200,10,50);
  box13 = new Box(1005,-250,10,50);
 
 
 fill("green")
 box2 = new Box(780,170,10,50);
 box4 = new Box(840,170,10,50);
 box6 = new Box(795,120,10,50);
 box8 = new Box(780,70,10,50);
 box10 = new Box(795,30,10,50);
 box12 = new Box(1020,-200,10,50);




}

function draw() {
  background(0,0,0);  
 Engine.update(engine);
shooter.display();
slingShot.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();


ground1.display();
ground2.display();
}
function mouseDragged(){
  if(gameState === "onSling"){
Matter.Body.setPosition(shooter.body,{x : mouseX,y : mouseY })
}
}
function mouseReleased(){
  slingShot.fly();
  gameState = "launched"
}
function keyPressed(){
  if(keyCode === 32){
    
  }
}