const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1; 
var wood;
var chain1,constrainedlog;
var posX,posY;


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
ball1 = new ball(posX = 200, posY = 200,20);
wood = new base(200,50,200,20);
chain1 = new chain(ball1.body,wood.body);

}

function draw(){
    background("blue");
    Engine.update(engine);
    
  if(keyCode === 32){
    ball1.followMouse();
  }
  if(keyCode ===13){
   ball1.detachFromMouse();
  }

    ball1.display();
    wood.display();
    chain1.display();
    text("Press space bar to oscillate the pendulam to left and right with mouse",352,179);
    text("Press Enter to stop the Pendulum from oscillating",354,214);
    drawSprites();
}
