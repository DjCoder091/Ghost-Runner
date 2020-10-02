var bg,bgi

var door,doori,doorgroup

var climber,climberI,climbergroup

var ghost,ghostI,ghostII

var block, blockgroup

var gamestate="play"




function preload(){
  bgi=loadImage("tower.png")
  
  doori=loadImage("door.png")
  
  climberI=loadImage("climber.png")
  
  ghostI=loadImage("ghost-standing.png")
  
  ghostII=loadImage("ghost-jumping.png")
  
  spookysound=loadSound("spooky.wav")
}



function setup(){
  createCanvas(600,600)
  bg=createSprite(300,300)
  bg.addImage(bgi)
  doorgroup=new Group();
  climbergroup=new Group();
  
  ghost=createSprite(300,300)
  ghost.addImage(ghostI)
  ghost.scale=0.3

  blockgroup=new Group();
  
  spookysound.loop();
}

function draw(){
  background(0)
  if(gamestate==="play"){
    
    
  
  bg.velocityY=1
  if (bg.y>400){
    bg.y=300
    
  }
  if(keyDown("space")){
    ghost.velocityY=-12
  }
  ghost.velocityY=ghost.velocityY+0.8 
  
  if(keyDown("right")){
    ghost.x=ghost.x+2
  }
  
  if(keyDown("left")){
    ghost.x=ghost.x-2
  }
  
  if(climbergroup.isTouching(ghost)){
    ghost.velocityY=0
  }

  if(blockgroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gamestate="end"
  }
  spawndoors();
  
  drawSprites();
    
}
  if (gamestate==="end"){
    fill("yellow")
    textSize(40)
    textFont("Forte")
    text("game over" ,300,300)
  }
}
function spawndoors(){
  if (frameCount%200===0){
     door=createSprite(400,50)
    door.x=Math.round(random(100,400))
  door.velocityY=1
    door.addImage(doori)
    door.lifetime=600
    doorgroup.add(door)
    ghost.depth=door.depth+1
    climber=createSprite(400,90)
    climber.velocityY=1
    climber.x=door.x
    climber.addImage(climberI)
    climber.lifetime=600
    climbergroup.add(climber)
    block=createSprite(200,100,90,2)
    block.velocityY=1
    block.shapeColor="red"
    block.x=door.x
    blockgroup.add(block)
    
  } 
}