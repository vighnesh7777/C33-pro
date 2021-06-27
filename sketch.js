var bgimg
var snow=[];
var engine,world;
const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;

function preload()
{
  bgImg = loadImage("snow3.jpg");
  //boyImg = loadImage("boy1.png")
  //bjImg = loadimage("boy2.png");
}
function setup() {
  createCanvas(800,500);
  
  engine=Engine.create();
  world=engine.world;

  if(frameCount%50)
  {
    for (var i=0;i<200;i++)
    {
      snow.push(new Snow(random(0,800),random(0,800)))
    }
    
  }

  //boy=createSprite(250, 300, 50, 50);
  //boy.addImage(boyImg);
  //boy.scale=1.5;

}

function draw() {
  background(bgImg);
  
  Engine.update(engine);
  for (var i=0;i<200;i++)
  {
    snow[i].display();
    snow[i].updateY();
  }

  drawSprites();
}

//function keyPressed() {

//	{ if (keyCode === 32)
 //   boy.Y=boy.velocityY-5;
//}


//function keyReleased() {

	//{ if (keyCode === 32)
 //   boy.Y=300;
//	}
