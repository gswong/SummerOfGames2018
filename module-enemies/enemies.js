// level 1:
//   module 1: sprite creation
//   module 2: player movement and gravity
//   module 3: create portal for next level
//   module N: extra features (gem, enemies, ladder climbing, fireballs)

// **** CONFIGS ****

// **** VARIABLES ****
var gravity = 1.5;
var level = 1;
var portal;

// **** SPRITES ****

// ground
var ground = createSprite(200, 350);
ground.setAnimation("greystone_1");
ground.width = 400;

// player
var player = createSprite(200, 200);
player.setAnimation("alienPink_1");
player.scale = 0.7;

// portal
var portal = createPortal();

// edge sprites: makes a group of edge sprites
// - top, bottom, left and right that prevent character from moving off screen
createEdgeSprites();

// enemy
var enemy = createSprite();
enemy.setAnimation("ghost_green");
enemy.scale = 0.6;
setEnemy();

// Arrows
var left = createSprite(20, 375, 30, 20);
var right = createSprite(90, 375, 30, 20);
var up = createSprite(55, 360, 30, 20);
left.setAnimation('left');
right.setAnimation('right');
up.setAnimation('up');

// **** FUNCTIONS ****

// portal
// this is tricky conceptually - create and return
// note: for proper interaction need to set collider to circle
function createPortal() {
  var portal = createSprite(350, 250);
  portal.setAnimation("lollipop_red_1");
  portal.scale = 0.7;
  portal.rotationSpeed = -5;
  portal.setCollider("circle");
  return portal;
}


// Draw Loop
// remember that order matters

function draw() {
  if (level == 1) {
    background1();
  } else if (level == 2) {
    background2();
  }

  drawSprites();
  moveArrows();

  // update the sprites
  playerGravity();
  playerControl();
  playerLands();
  loopEnemy();

  // must have after draw sprites
  enterPortal();
}

// Functions
function background1() {
  background("RosyBrown");
  // asteroid 1
  noStroke();
  fill("LightPink");
  ellipse(340, 50, 80, 80);
  fill("LightSalmon");
  ellipse(350, 50, 10, 10);
  ellipse(326, 78, 10, 10);
  ellipse(320, 26, 15, 15);
  fill("RosyBrown");
  ellipse(300,60,20,20);
  ellipse(366,75,30,30);
}

function background2(){
  background("red");
}

function playerGravity() {
  player.velocityY = player.velocityY + gravity;
}

function playerControl(){
  var goLeft =
    keyDown('left') || mouseIsOver(left);
  var goRight =
    keyDown('right') || mouseIsOver(right);
  var goUp =
    keyDown('up') || mouseIsOver(up);
  var stopMoving =
   keyWentUp("left")
   || keyWentUp("right")
   || !mouseIsOver(left)
   || !mouseIsOver(right);


  if (goLeft && player.velocityX > -10) {
    player.velocityX = player.velocityX - 1;
    player.setAnimation("alienPink_walk_left");
  } else if (goRight && player.velocityX < 10) {
    player.velocityX = player.velocityX + 1;
    player.setAnimation("alienPink_walk_right");
  } else if (stopMoving) {
    player.setAnimation("alienPink_1");
  }

  if (goUp && ground.displace(player)){
    var jumpVelocity = 20;
    player.velocityY = player.velocityY - jumpVelocity;
    player.setAnimation("alienPink_1");
    playSound("sound://category_digital/boing_2.mp3", false);
  }
}

function playerLands(){
  edges.displace(player);
  if (ground.displace(player)) {
    player.friction = 0.2;
  } else {
    player.friction = 0;
  }
}

// When player enters the portal destroy it and advance to next level
function enterPortal() {
  if (portal !== undefined) {
    if (player.isTouching(portal)) {
      portal.destroy();
      playSound("sound://category_instrumental/marimba_upscale_1.mp3", false);
      level = level + 1;
    }
  }
}

function moveArrows() {
  left.x = camera.x - 180;
  right.x = camera.x - 110;
  up.x = camera.x - 145;
}

// ghost enemy
function setEnemy(){
  enemy.x = -25;
  enemy.y = randomNumber(15,260);
  enemy.velocityX = randomNumber(2,5);
}

// loop enemy back to left side of screen
function loopEnemy(){
  if (enemy.x > 450) {
    setEnemy();
  }

  if (player.isTouching(enemy)) {
    player.velocityX = 0;
  }
}

