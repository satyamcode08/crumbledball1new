const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ball;
var ground;
function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(400,580,800,20);
    box1 = new Box(500,540,200,20);
box2=new Box(400,480,20,130);
box3=new Box(600,480,20,130);
ball=new Ball(200,100,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   box3.display();
   ball.display();
   fill("white")
   text("press space to move ball up",100,50)
}
function keyPressed(){
    if(keyCode==32){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-45});
    }
}