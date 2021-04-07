var dolphin,dodo,dolphinI,dodoI;
var dolphinFoodI;
var foodGroup;
var dolphinFood;
var eg;

var rand ,rando
var score = 0;
var dolphinH = 5;
var laserShooter,laserShooterI;
var gameOver,gaveOverI

function preload(){
dolphinI = loadImage("dolphin.jpg");
dodoI = loadImage("dodo.png");
dolphinFoodI = loadImage("budo.png");
laserShooterI = loadImage("images.png")
gameOverI = loadImage("gameOver.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-10);
  dodo = createSprite(displayHeight*1.0,displayWidth*0.29,200,200);
  dodo.addImage(dodoI);
  dodo.scale = 5.3;
  
  dolphin = createSprite(displayHeight*0.2,displayWidth*0.3);
  dolphin.addImage(dolphinI);
  dolphin.scale = 0.6;

  rand = random(100,900);
  rando = (600,1000);
  foodGroup = createGroup();
  eg =  createGroup();
  
}

function draw(){
  


  background(200);
  

  dodo.velocityX = -3;
  

  if(dodo.x<300){
    dodo.x = dodo.width*2;
  }

  if(keyDown("Down_Arrow")){
    dolphin.velocityY = 2
  }
    if(keyDown("space")){
       dolphin.velocityY = 0
    }
    

    if(keyDown("Up_Arrow")){
      dolphin.velocityY = -2
   }


    
SpawnAttack();
spawnVillan();
  
   if(foodGroup.isTouching(dolphin)){
     foodGroup.destroyEach();
     score =score+1

   }
   if(eg.isTouching(dolphin)){
    eg.destroyEach();
    dolphinH = dolphinH-1

  }


  drawSprites();

  textSize(30);
  text("score :"+score, 400,400);

  text("Dolphin Health :"+ dolphinH,700,200);
}

function SpawnAttack(){
if(frameCount % 160 === 0){
   dolphinFood = createSprite(800,rand,200,200);
  dolphinFood.addImage(dolphinFoodI);
  dolphinFood.scale = 0.4
  dolphinFood.velocityX = -3
  dolphinFood.lifetime = 300

  foodGroup.add(dolphinFood)
}
}
function spawnVillan(){
  if(frameCount % 200 === 0){

    laserShooter = createSprite(1000,rand,200,200);
    laserShooter.addImage(laserShooterI);
    laserShooter.scale = 0.4;
    laserShooter.velocityX = -4;
    laserShooter.lifetime = 300;


   eg.add(laserShooter)
  }
}