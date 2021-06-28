
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , ball , ground , dustbin ,dustbinImg;

function preload(){
  dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground();
paper = new Paper();

dustbin = createSprite(964,520,20,20);
dustbin.addImage(dustbinImg);
dustbin.scale=0.45;

dustbin1 = new Dustbin(902,505,10,120);
dustbin2 = new Dustbin(962,565,130,10);
dustbin3 = new Dustbin(1024,505,10,120);
}

function draw() {
  background(0);
Engine.update(engine);

ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}
function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})   
   }
 }
 




