
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj =new roof(width/2,height/4,width/7,20);

    bobDiameter = 40;

    starBobPosistionX=width/2;
	starBobPositionY=height/4+500;
	bob1 =new bob(starBobPosistionX-bobDiameter*2,starBobPositionY,bobDiameter);
	bob2  =new bob(starBobPosistionX-bobDiameter,starBobPositionY,bobDiameter);
	bob3 =new bob(starBobPosistionX,starBobPositionY,bobDiameter);
	bob4 =new bob(starBobPosistionX+bobDiameter,starBobPositionY,bobDiameter);
	bob5 =new bob(starBobPosistionX+bobDiameter*2,starBobPositionY,bobDiameter);

	var render = Render.create({
    element : document.body,
	engine : engine,
	options:{
		width:1200,
		height:700,
		wireframes:false
	}
	});
	 
	rope1 =new rope(bob1.body,roofObj.body,-bobDiameter*2,0);

	rope2 =new rope(bob2.body,roofObj.body,-bobDiameter*1,0);

	rope3 =new rope(bob3.body,roofObj.body,0,0);

	rope4 =new rope(bob4.body,roofObj.body,-bobDiameter*1,0);

	rope5 =new rope(bob5.body,roofObj.body,-bobDiameter*2,0);

	Engine.run(engine);

}

function draw() {

  rectMode(CENTER);

  background(230);

  roofObj.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
 
function keyPressed(){
	if (keyCode === LEFT_ARROW)
	Matter.Body.applyForce(rope1.body,rope2.body.position,{x:-130});
}



