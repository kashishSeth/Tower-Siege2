const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var box5, box6, box7, box8;
var box9, box10, box11, box12;
var box13, box14, box15, box16;

var a=[]
var b=[]
var c=[]
var d=[]
var f=[]
var polygonImage

function preload(){
  polygonImage=loadImage("pentagon.png");
}

function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world

 ground = new Ground(600,height,1200,20);
 stand = new Ground(600,199,200,10);
 stand1 = new Ground(400,300,250,10);
 
 polygon = Bodies.circle(50,200,20,{density:2,restitution:0.5});
 World.add(world,polygon);

 slingShot = new SlingShot(polygon,{ x:100, y:200 });

for(var i = 314; i<500; i=i+29){
  a.push(new Box(i,297,30,40));
}

for(var i = 343; i<460; i=i+29){
  b.push(new Box(i,277,30,40))
}

for(var i = 372; i<450; i=i+29){
  c.push(new Box(i,257,30,40));
}

for(var i = 540; i<660; i=i+29){
  d.push(new Box(i,195,30,40));
}

for(var i = 570; i<630; i=i+29){
  f.push(new Box(i,175,30,40));
}

 //Big Pyramid
  //Bottom Row
  /*box1 = new Box(314,297,30,40);
  box2 = new Box(343,297,30,40);
  box3 = new Box(372,297,30,40);
  box4 = new Box(400,297,30,40);
  box5 = new Box(429,297,30,40);
  box6 = new Box(456,297,30,40);
  box7 = new Box(490,297,30,40); 
  
  //middle Row #2
  box8 = new Box(343,277,30,40);
  box9 = new Box(372,277,30,40);
  box10 = new Box(400,277,30,40);
  box11 = new Box(428,277,30,40);
  box12 = new Box(456,277,30,40);
  
  //middle Row #1
  box13 = new Box(372,257,30,40);
  box14 = new Box(400,257,30,40);
  box15 = new Box(428,257,30,40);
  *///top Row
  box16 = new Box(400,237,30,40);

  //smaller pyramid
  //Bottom Row 
  /*box17 = new Box(540,195,30,40);   
  box18 = new Box(570,195,30,40);           
  box19 = new Box(600,195,30,40);              
  box20 = new Box(630,195,30,40);               
  box21 = new Box(660,195,30,40);
  //middle Row
  box22 = new Box(570,175,30,40);
  box23 = new Box(600,175,30,40);
  box24 = new Box(630,175,30,40);
  *///top
  box25 = new Box(600,155,30,40);

}

function draw() {
  background(255,255,255);
  //box8.shapeColor = rgb(135,216,255); 

Engine.update(engine);

slingShot.Show();
imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,40,40);

  ground.display();
  stand.display();
  stand1.display();

  for(var e = 0; e<a.length; e++){
    fill(rgb(180,215,230));
    a[e].display();
  }

  for(var e = 0; e<b.length; e++){
    fill(rgb(204,255,229));
    b[e].display();
  }

  for(var e = 0; e<c.length; e++){
    fill(rgb(255,255,204));
    c[e].display();
  }

  for(var e = 0; e<d.length; e++){
    fill(rgb(180,215,230));
    d[e].display();
  }

  for(var e = 0; e<f.length; e++){
    fill(rgb(255,255,204));
    f[e].display();
  }
  
  /*box1.display();
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
  box14.display();
  box15.display();
*/
  fill(rgb(255,204,229));
  box16.display();
  /*box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  */

 fill(rgb(255,204,229));
  box25.display();

/* 
  fill("Blue");
  text(mouseX + "," + mouseY, mouseX, mouseY);
*/}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}