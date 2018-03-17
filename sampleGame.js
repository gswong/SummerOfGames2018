// level 1: drawn background, sprite that walks, 
// and collects gem to access portal

// Variables
var gems = 0;

// Create Sprites!

// ground
var ground = createSprite(200, 350);
ground.setAnimation("greystone_1");
ground.width = 400;

// player
var sprite = createSprite(10, 350);
sprite.setAnimation("alienPink_1");
sprite.scale = 0.7;

// portal
var portal = createSprite(350, 350);
portal.setAnimation("lollipop_red_1");
portal.scale = 0.7;

// gem
var gem = createSprite(200, 300);
gem.setAnimation("ore_emerald_1");
gem.scale = 0.7;


// Draw Loop
function draw() {
  // draw the background
  background1();
  // update the sprites

  drawSprites();
}

// Functions
function background1() {
background("RosyBrown");
// asteroid 1
  noStroke();
  fill("LightPink")
  ellipse(340, 50, 80, 80);
  fill("LightSalmon");
  ellipse(350, 50, 10, 10);
  ellipse(326, 78, 10, 10);
  ellipse(320, 26, 15, 15);
  fill("RosyBrown");
  ellipse(300,60,20,20);
  ellipse(366,75,30,30);

}

function background2() {

}
function tallyGems() {
  fill("white");
  textSize(20);
  text("Gems: " + score,10, 10, 80, 20);
}
