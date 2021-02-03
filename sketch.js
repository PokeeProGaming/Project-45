var spaceShip, spaceShipBrake, spaceShipUp, spaceShipDown, spaceShipForward, spaceShipIdle;
var bg, bgImg;
var shotGunEnemy, shotGunEnemyImg, homingGunEnemy, homingGunEnemyImg, laserEnemy, laserEnemyImg; 
var laserEnemyGroup;

function preload(){
  bgImg = loadImage("Sprites/background.png");
  spaceShipBrake = loadImage("Player/playerBrake.png");
  spaceShipUp = loadImage("Player/playerUp.png");
  spaceShipDown = loadImage("Player/playerDown.png");
  spaceShipForward = loadImage("Player/playerForward.png");
  spaceShipIdle = loadImage("Player/playerIdle.png");

  shotGunEnemyImg = loadImage("Enemies/shotGunEnemy.png"); 
  homingGunEnemyImg = loadImage("Enemies/homingGunEnemy.png");
  laserEnemyImg = loadImage("Enemies/laserEnemy.png");

  laserEnemyShot = loadImage("Bullets/guardGunShot4.png");
  shotGunEnemyShot = loadImage("Bullets/shotGunShot2.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2);
  bg.addImage(bgImg);
  bg.scale = 1.4;
  bg.velocityX = -2;

  spaceShip = createSprite(80,windowHeight/2,50,50);
  spaceShip.addImage(spaceShipIdle);
  spaceShip.scale = 1.5;

  laserEnemyGroup = createGroup();


}

function draw() {
  background(0);

  if(bg.x<500){
    bg.x = bg.width/2;
  }

  if(keyDown(UP_ARROW)){
    spaceShip.y -= 10;
    spaceShip.addImage(spaceShipUp);
  }

  if(keyDown(DOWN_ARROW)){
    spaceShip.y += 10;
    spaceShip.addImage(spaceShipDown);
  }

  if(keyDown(RIGHT_ARROW)){
    spaceShip.x += 10;
    spaceShip.addImage(spaceShipForward);
  }

  if(keyDown(LEFT_ARROW)){
    spaceShip.x -= 10;
    spaceShip.addImage(spaceShipBrake);
  }
  var randomY = Math.round(random(15,700));
  spawnLaserEnemy(randomY);
  if(laserEnemyGroup.size()>0){
    spawnLaserEnemyShot(randomY);
  }
  //spawnShotgunEnemy();

  drawSprites();
}
