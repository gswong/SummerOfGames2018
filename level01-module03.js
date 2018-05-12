// level 1:
//   module 1: sprite creation
//   module 2: player movement and gravity
//   module 3: create portal for next level
//   module N: extra features (gem, enemies, ladder climbing, fireballs)

// **** CONFIGS ****

// **** VARIABLES ****
var level = 1;
var gravity = 1.5;
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
    drawLevel1();
  } else if (level == 2) {
    drawLevel2();
  }
  // update the sprites
  playerGravity();
  playerControl();
  playerLands();
  drawSprites();

  // must have after draw sprites 
  enterPortal();

  moveArrows();
}


function drawLevel1() {
  // draw the background
  background1();
}

function drawLevel2() {
  // draw the background
  background2();

  // update the sprites
  playerGravity();
  playerControl();
  playerLands();
  drawSprites();

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
    var jumpVelocity = 
      enableSuperJump && !playerUpgrades.superJump 
      ? 20
      : 30;
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

// When player collects a gem destroy it and spawn a portal 
function collectGem() {
  if (player.isTouching(gem)) {
    playSound("sound://category_instrumental/trumpet.mp3", false);
    gem.destroy(); 
    portal = createPortal();
  }
}

// When player collects a ruby destroy it and give the user superJump 
function collectRuby() {
  if (ruby && player.isTouching(ruby)) {
    playSound("sound://category_instrumental/trumpet.mp3", false);
    ruby.destroy(); 
    playerUpgrades.superJump = true;
  }
}

// When player enters the portal destroy it and advance to next level
function enterPortal() {
  if (portal !== undefined) {
    if (player.isTouching(portal)) {
      if (player.y < portal.y && player.velocityY > 0) {
        portal.destroy();
        playSound("sound://category_instrumental/marimba_upscale_1.mp3", false);
        level = level + 1; 
      }
    }
  }
}

function moveArrows() {
  left.x = camera.x - 180;
  right.x = camera.x - 110;
  up.x = camera.x - 145;
}
