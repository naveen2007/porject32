const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6
var box7,box8,box9
var box10,box11,box12,box13,box14,box15,box16,box17,box18
var polygon, slingShot, polygonImage
var ground, ground2;

var score = 0;

function preload() {
 
    polygonImage = loadImage("polygon.png")
}

function setup(){

createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(350,200,200,20);

    ground2 = new Ground(800,150,200,20);


  box1 = new Block(350,190,30,30);
  box2 = new Block(340,190,30,30);
  box3 = new Block(360,190,30,30);
  box4 = new Block(370,190,30,30);
  box5 = new Block(330,190,30,30);
  box6 = new Block(350,160,30,30);
  box7 = new Block(330,160,30,30);
  box8 = new Block(370,160,30,30);
  box9 = new Block(350,120,30,30);

  box10 = new Block(800,140,30,30);
  box11 = new Block(790,140,30,30);
  box12 = new Block(810,140,30,30)
  box13 = new Block(820,140,30,30);
  box14 = new Block(780,140,30,30);
  box15 = new Block(800,120,30,30);
  box16 = new Block(810,120,30,30);
  box17 = new Block(790,120,30,30);
  box18 = new Block(800,100,30,30);
  
  

  polygon = new Polygon(50,200,20);

  slingShot = new SlingShot(polygon.body,{x:100,y:100});
}

function draw() {

    background(200,200,200);  
    Engine.update(engine);
    strokeWeight(4);
    
  text("SCORE : " + score, 750, 40);
  
    ground.display();
    polygon.display();
    slingShot.display();
    box1.display();
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
    box16.display();
    box17.display();
    box18.display();

    ground2.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  
    drawSprites();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if (keyCode=== 82){
      slingShot.attach(polygon.body);
    }
  }