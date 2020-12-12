var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	








	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	box1 = new Box(width/2 - 100, 570,30,200 )
	box2 = new Box(width /2  , 660,200,30 )
	box3 = new Box(width /2 + 100 , 570,30,200 )
	paper = new Paper(100 ,0,10)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
	background(0);
	box1.display()
	box2.display()
	box3.display()
	paper.display()
	rectMode(CENTER)
	rect(ground.position.x ,ground.position.y,width  ,10)
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 5 , y: -4} )
  }
}



