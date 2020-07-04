const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var plinkos=[];
var divisions=[];
var particles=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground=new Ground(240,800,480,10);

  for(var k=0; k<=width; k=k+80 ){
    divisions.push(new Division(k, height-divisionHeight/2,10, divisionHeight));
  }
  
 
  
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,15));
  }
  
  for(var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,150,15));
    //plinkos[j].display();
  }
  for(var j=0; j<=width; j=j+50){
    plinkos.push(new Plinko(j,225,15));
    //plinkos[j].display();
  }
  for(var j=-25; j<=width; j=j+50){
    plinkos.push(new Plinko(j,300,15));
    //plinkos[j].display();
  }
  for(var j=-50; j<=width; j=j+50){
    plinkos.push(new Plinko(j,375,15));
    //plinkos[j].display();
  }
  
}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  

for(var i=0; i<particles.length; i++){
particles[i].display();
}

for(var j=0; j<plinkos.length; j++){
  plinkos[j].display();
  }

for(var k=0; k<divisions.length; k++){
divisions[k].display();
}

  drawSprites();
}