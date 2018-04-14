// level 1: drawn background, sprite that walks, 
// and collects gem to access portal
// notes to us: right now, if player touches the gem, it disappears and the portal appears
// we could have the player collect x # of gems to open the portal or something instead
// or save that for another level
// I have also added some lovely and annoying sound for your pleasure

// **** CONFIGS ****

// Change this to false to turn on ruby giving super jumps
var enableSuperJump = false;


// **** VARIABLES ****
var level = 1;
var gravity = 1.5;
var portal;


var playerUpgrades = {
  superJump: false,
  // fireballs: false, etc...
}

// **** SPRITES ****

// ground
var ground = createSprite(200, 350);
ground.setAnimation("greystone_1");
ground.width = 400;

// player
var player = createSprite(200, 200);
player.setAnimation("alienPink_1");
player.scale = 0.7;

// edge sprites: makes a group of edge sprites 
// - top, bottom, left and right that prevent character from moving off screen
createEdgeSprites();


// gem 
// note: for proper interaction need to crop sprite and set collider to circle
// this will be a good thing for kids to learn
var gem = createSprite(
  randomNumber(0,400), 
  randomNumber(15, enableSuperJump ? 160 : 260)
);
gem.setAnimation("ore_emerald_1");
gem.scale = 0.7;
gem.rotationSpeed = 1;
//gem.debug = true;
gem.setCollider("circle");

// ruby (gives you a super jump)
if (enableSuperJump) {
  var ruby = createSprite(randomNumber(0,400), randomNumber(200,260));
  ruby.setAnimation("ore_ruby_1");
  ruby.scale = 0.5;
  ruby.rotationSpeed = 1;
  ruby.setCollider("circle");
}

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
  //portal.visible = false;
  //portal.debug = true;
  portal.setCollider("circle");
  return portal;
}


// Draw Loop
// remember that order matters
function drawLevel1() {
  // draw the background
  background1();
  // update the sprites
  playerGravity();
  playerControl();
  playerLands();

  drawSprites();
  // must have after draw sprites 
  collectGem();
  collectRuby();
  enterPortal();
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
  collectGem();
  enterPortal();
}



function draw() {
  if (level == 1) {
    drawLevel1();
  } else if (level == 2){
    drawLevel2();
  }
  // Uncomment 
  camera.x = player.x;
  moveArrows();
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

// When player enters the portal
function enterPortal() {
// enter portal if touching portal
//if (portal !== undefined && player.isTouching(portal)) {
// you can enter portal only if you jump on top of it    
if (portal !== undefined && player.isTouching(portal) && player.y < portal.y && player.velocityY > 0) {
    portal.destroy();
    playSound("sound://category_instrumental/marimba_upscale_1.mp3", false);
    level = level + 1; 
  }
}

function moveArrows() {
  left.x = camera.x - 180;
  right.x = camera.x - 110;
  up.x = camera.x - 145;
}
