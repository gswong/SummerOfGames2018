// Variables
var score = 0;

// Create Sprites

// Draw Loop
function draw() {
  // draw the background
  background1();
  // update the sprites

  drawSprites();
}

// Functions
function background1() {

}

function background2() {

}
function showScore() {
  fill("white");
  textSize(20);
  text("Score: " + score,10, 10, 80, 20);
}
