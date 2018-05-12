// level 1:
//   module 1: sprite creation
//   module 2: player movement and gravity
//   module 3: create portal for next level
//   module N: extra features (gem, enemies, ladder climbing, fireballs)

// **** CONFIGS ****

// **** VARIABLES ****


// **** SPRITES ****

// ground
var ground = createSprite(200, 350);
ground.setAnimation("greystone_1");
ground.width = 400;

// player
var player = createSprite(200, 200);
player.setAnimation("alienPink_1");
player.scale = 0.7;


// Arrows
var left = createSprite(20, 375, 30, 20);
var right = createSprite(90, 375, 30, 20);
var up = createSprite(55, 360, 30, 20);
left.setAnimation('left');
right.setAnimation('right');
up.setAnimation('up');

// **** FUNCTIONS ****

// Draw Loop
// remember that order matters

function draw() {
  background1();
  drawSprites();
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

function moveArrows() {
  left.x = camera.x - 180;
  right.x = camera.x - 110;
  up.x = camera.x - 145;
}
