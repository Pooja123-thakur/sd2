const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var Brick;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine=Engine.create();
    world=engine.world;
    var ground_options={
        isStatic: true
    }
    ground=Bodies.rectangle(200,398,400,10,ground_options);

    World.add(world,ground);
    var Brick_options={
        restitution: 1 
    }
    Brick=Bodies.rectangle(200,150,30,20,Brick_options);
    World.add(world,Brick);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("red")
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    fill("yellow")
    rectMode(RADIUS);
    rect(Brick.position.x,Brick.position.y,30,20);

}