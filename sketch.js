const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world;
var engine;

var ball;
var blower,blowerMouth;
var blowerButton;

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;

  blowerButton=createButton("CLICK TO BLOW")
  blowerButton.position(500,500);
  
  blowerButton.mousePressed(blow)
  ball=new Ball(550,40,50);
  blower=new Blower(380,500,400,40);
  blowerMouth=new BlowerMouth(550,460,250,180)
}

function draw() {
  background("yellow");  

  blower.display();
  blowerMouth.display();
  ball.display();
  Engine.update(engine);
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.5})

}