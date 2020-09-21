
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , line1;
var garbage1 , garbage2 , garbage3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 640);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper();
	line1 = new ground();
	
	garbage1 = new dustbin(680,620,100,15);
	garbage2 = new dustbin(625,577,15,100);
	garbage3 = new dustbin(735,577,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
  line1.display();
  garbage1.display();
  garbage2.display();
  garbage3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:550, y:-450});
	}
}

