const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var stand1,stand2;
var slingShot;
var polygon_img;
var score =0;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,320);

  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  stand1 = new Stand(400,300,250,10);
  stand2 = new Stand(710,200,200,10);
 
  blocka1 = new Block(310,275,30,40);
  blocka2 = new Block(340,275,30,40);
  blocka3 = new Block(370,275,30,40);
  blocka4 = new Block(400,275,30,40);
  blocka5 = new Block(430,275,30,40);
  blocka6 = new Block(460,275,30,40);
  blocka7 = new Block(490,275,30,40);
  blocka8 = new Block(340,235,30,40);
  blocka9 = new Block(370,235,30,40);
  blocka10 = new Block(400,235,30,40);
  blocka11 = new Block(430,235,30,40);
  blocka12 = new Block(460,235,30,40);
  blocka13 = new Block(370,195,30,40);
  blocka14 = new Block(400,195,30,40);
  blocka15 = new Block(430,195,30,40);
  blocka16 = new Block(400,155,30,40);

  blockb1 = new Block(650,175,30,40);
  blockb2 = new Block(680,175,30,40);
  blockb3 = new Block(710,175,30,40);
  blockb4 = new Block(740,175,30,40);
  blockb5 = new Block(770,175,30,40);
  blockb6 = new Block(680,135,30,40);
  blockb7 = new Block(710,135,30,40);
  blockb8 = new Block(740,135,30,40);
  blockb9 = new Block(710,95,30,40);

  ball = Bodies.circle(40,200,25);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 

  text ("SCORE: " +score,750,40)

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill(135,206,235);
  blocka1.display();
  blocka2.display();
  blocka3.display();
  blocka4.display();
  blocka5.display();
  blocka6.display();
  blocka7.display();

  fill(255,192,203);
  blocka8.display();
  blocka9.display();
  blocka10.display();
  blocka11.display();
  blocka12.display();

  fill(64,224,208);
  blocka13.display();
  blocka14.display();
  blocka15.display();

  fill(128);
  blocka16.display();

  fill(135,206,235);
  blockb1.display();
  blockb2.display();
  blockb3.display();
  blockb4.display();
  blockb5.display();

  fill(64,224,208);
  blockb6.display();
  blockb7.display();
  blockb8.display();

  fill(255,192,203)
  blockb9.display();

  blocka1.score();
  blocka2.score();
  blocka3.score();
  blocka4.score();
  blocka5.score();
  blocka6.score();
  blocka7.score();
  blocka8.score();
  blocka9.score();
  blocka10.score();
  blocka11.score();
  blocka12.score();
  blocka13.score();
  blocka14.score();
  blocka15.score();
  blocka16.score();

  blockb1.score();
  blockb2.score();
  blockb3.score();
  blockb4.score();
  blockb5.score();
  blockb6.score();
  blockb7.score();
  blockb8.score();
  blockb9.score();


  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
      slingShot.attach(this.ball);
  }
}