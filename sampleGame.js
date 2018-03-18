// level 1: drawn background, sprite that walks, 
// and collects gem to access portal

// notes to us: right now, if player touches the gem, it disappears and the portal appears
// we could have the player collect x # of gems to open the portal or something instead
// or save that for another level
// I have also added some lovely and annoying sound for your pleasure

// Variables
var gems = 0;

// Create Sprites!

// ground
var ground = createSprite(200, 350);
ground.setAnimation("greystone_1");
ground.width = 400;

// player
var player = createSprite(200, 0);
player.setAnimation("alienPink_1");
player.scale = 0.7;

// portal
// note: for proper interaction need to set collider to circle
var portal = createSprite(350, 250);
portal.setAnimation("lollipop_red_1");
portal.scale = 0.7;
portal.rotationSpeed = -5;
portal.visible = false;
//portal.debug = true;
portal.setCollider("circle");

// gem
// note: for proper interaction need to crop sprite and set collider to circle
// this will be a good thing for kids to learn
var gem = createSprite(randomNumber(0,400), randomNumber(0,260));
gem.setAnimation("ore_emerald_1");
gem.scale = 0.7;
gem.rotationSpeed = 1;
//gem.debug = true;
gem.setCollider("circle");

// Draw Loop
function draw() {
  // draw the background
  background1();
  // update the sprites
  playerFall();
  playerControl();
  playerLands();

  drawSprites();
  // must have after draw sprites 
  collectGem();
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

function playerFall() {
  player.velocityY = 2;
}

function playerControl(){
  if (keyDown("left")) {
    player.x = player.x - 2;
    player.setAnimation("alienPink_walk_left");
  }
  if (keyDown("right")) {
    player.x = player.x + 2;
    player.setAnimation("alienPink_walk_right");
  }
  if (keyDown("up")) {
    player.velocityY = player.velocityY - 20;
    player.setAnimation("alienPink_1");
    playSound("sound://category_digital/boing_2.mp3", false);
  }
}

function playerLands(){
  player.collide(ground);
}

function collectGem() {
  if (player.isTouching(gem)) {
    playSound("sound://category_instrumental/trumpet.mp3", false);
    gem.visible = false;
    portal.visible = true;
    
  }
  
}

function tallyGems() {
  fill("white");
  textSize(20);
  text("Gems: " + gems,10, 10, 80, 20);
}
