var bImg,b;
var shipImg,ship,shipsGroup;
var sshipImg,sship;
var gameState = "play"


function preload(){
      bImg = loadImage("back.jpg");
   shipImg = loadImage("ship2.png");
  sshipImg = loadImage("ship1.png");
}

function setup() {
  createCanvas(600, 600);
  b = createSprite(300,300);
  b.addImage("tower",towerImg);
  b.velocityY = 1;

  sship=createSprite(200,200,50,50)
  sship.addImage("ghost",ghostImg)
  sship.scale=0.5
  
  shipsgroup=new Group()
}

function draw() {
  background(0);
  drawSprites()
  
  
    
    if(gameState==="play"){
      if(b.y > 400){
        b.y = 300
      }

     if (keyDown("left_arrow")){
      sship.x=sship.x-3
     }
     
     if(keyDown("right_arrow")){
      sship.x=sship.x+3
     } 

     if (keyDown("space")){
      sship.velocityY=-10
     }

     sship.velocityY=sship.velocityY+0.8

     spawnDoors()

     if(shipsGroup.isTouching(ghost)){
     sship.velocityY=0

     }

     if (shipsGroup.isTouching(sship)||sship.y>600)
     {
      sship.destroy();
      gameState="end"
    }
  
}

if(gameState==="end"){
  textSize(30)
  fill("yellow")
  text("Game Over",230,250)
}
}

function spawnShips(){
  if (frameCount%200===0){
var ship=createSprite(200,0)

ship.addImage(doorImg)
ship.velocityY=1
  
ship.x=Math.round(random(100,400))

ship.lifetime=700

shipsGroup.add(door)
}
}