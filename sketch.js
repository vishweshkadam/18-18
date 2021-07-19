var PLAY = 1;
var END = 0;
var gameState = PLAY;
var x1 = 0;
var x2;
var ground,ground_image
var girl,girl_running,girl_collided,girlImage
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4;
var Group,garbage1,garbage2,garbage3,garbage4
var jumpSound,dieSound,checkpointSound;
var score;
var gameOver,restart,gameOverImage,restartImage;

function preload(){
ground_image=loadImage("Background.png");
  girl_running=loadAnimation("Run (1).png","Run (2).png","Run (3).png");
  obstacle1=loadImage("obstacle4.png");
  garbage1=loadImage("apply.png",)
 Continue =loadImage("win.png")
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  gameOverImage=loadImage("gameOver1.png");
  restartImage=loadImage("restart1.png");
  girl_collided=loadImage("Dead (30).png");
  girlImage=loadImage("Idle (1).png");
}

function setup() {
  resizeCanvas(windowWidth, windowHeight);
x2 = width;
ground=createSprite(0,0,600,1000);
  
ground.addImage("ground_image",ground_image);
ground.scale=1.4;

   ground.velocityX=-1
  
   girl=createSprite(300,420,600,10);
  girl.addAnimation("girl_running",girl_running);
  girl.addImage("girl_collided",girl_collided);
  girl.addImage("girlImage",girlImage);
  girl.scale=0.2;
 // girl.velocityX=2;
  girl.debug=true;
  girl.setCollider("circle",0,0,400);
  
  
 
 
  
  invisible_ground=createSprite(400,470,600,10);
  invisible_ground.visible=false;
  
   gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
  
  restart = createSprite(300,180);
  restart.addImage(restartImage);
  
  obstaclesGroup=new Group();
     garbageGroup=new Group();

  
  score=0;
}
function explosion(spriteA, spriteB) {
  console.log("ENTERED")
  spriteA.remove();
  score =score +10;
}
         


function draw() {
  
  background("background.png")
  
                
    
  
  
 
 // console.log(girl.y);
   //Gravity
girl.velocityY = girl.velocityY + 0.8;
girl.collide(invisible_ground); 
  
   //Gravity
   
   
 
   
   
   if (gameState===PLAY){
    gameOver.visible=false;
  restart.visible=false;
  
  
 
  

  
 
    spawnObstacles();
    spawngarbag();
   
   
 ground.velocityX = -(4 + 3* score/100);
     
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    garbageGroup.collide(girl, explosion);
           
  
    
    
 if((keyDown("space")&& girl.y >= 380)) {
   girl.velocityY = -12;
    jumpSound.play();
  }  
  
  // if (girl.isTouching(obstaclesGroup)){
  //   gameState=END;
  //    dieSound.play();
  // }
  }

  
else if ( gameState===END) {
  gameOver.visible=true;
  restart.visible=true;
  ground.velocityX = 0;
     girl.velocityY = 0
    girl.changeImage("girlImage",girlImage);

    
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
   obstaclesGroup.setVelocityXEach(0);
  
    if(mousePressedOver(restart)) {
      reset();
    }
} 
  
 
  drawSprites();
  fill("red");
  textSize(20);
   text("Score: "+ score, 500,50);
}

function reset(){
  gameState=PLAY;
gameOver.visible=false;
restart.visible=false;
girl.changeAnimation("girl_running",girl_running);
  obstaclesGroup.destroyEach();
  score=0;
  
}

function spawnObstacles() {
   if (frameCount % 60 === 0){
   var obstacle = createSprite(600,450,10,40);
   obstacle.velocityX = -6 ;//+ score/100);
   
    //generate random obstacles
   var rand = Math.round(random(1,6));
     obstacle.addImage(obstacle1);
   obstacle.scale=0.1;
      obstaclesGroup.add(obstacle);
    obstacle.debug=false;
obstacle.setCollider("circle",0,0,1);
   }
     
}

function spawngarbag() {
  if (frameCount % 60 === 0){
  var garbages = createSprite(770,450,10,40);
  garbages.velocityX = -6 ;//+ score/100);
  
   //generate random obstacles
  var rand = Math.round(random(1,6));
  garbages.addImage(garbage1);
  garbages.scale=0.90;
  garbages.debug=true //by doing this you will be able to see the collider and later comment it in final code
  garbages.setCollider("circle",0,0,70);
  }
    
}

