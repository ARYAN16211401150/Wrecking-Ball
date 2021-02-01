const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var world,engine;
var ground1;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12;
var ball;
var rope1;

function setup() {
  createCanvas(1000,800);
  engine=Engine.create();
  world=engine.world;

  ground1=new Ground(500,700,1000,20);

  b1=new Box(860,300,50,70);
  b2=new Box(800,300,50,70);
  b3=new Box(740,300,50,70);
  b4=new Box(860,200,50,70);
  b5=new Box(800,200,50,70);
  b6=new Box(740,200,50,70);
  b7=new Box(860,100,50,70);
  b8=new Box(800,100,50,70);
  b9=new Box(740,100,50,70);
  b10=new Box(860,0,50,70);
  b11=new Box(800,0,50,70);
  b12=new Box(740,0,50,70);


  ball=new Ball(400,200,70)

  rope1=new Rope(ball.body,{x:420,y:200})

}

function draw() {
  background("lightgreen");
  Engine.update(engine);

  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  ball.display();

  rope1.display();

}
function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}