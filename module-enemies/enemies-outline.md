# Module Enemies
Games are more fun when there's a challenge involved. Let's add enemies to our game that will make it harder for the player to win.

__Create enemy sprite__
The sprite for the enemy needs to instill fear into the player. Let's use the ghost as the enemy from the animation library.
```js
// enemy
var enemy = createSprite();
enemy.setAnimation("ghost_green");
enemy.scale = 0.6;
setEnemy();
```
__Move enemy sprite__
An enemy that stands still is no fun. Lets make the enemies move across the screen.
```js
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
}
```
__Interact with player__
When the player runs into the enemy bad things can happen! Let's make the enemy do something to the player.
```js
// loop enemy back to left side of screen
function loopEnemy(){
  if (enemy.x > 450) {
    setEnemy();
  }

  if (player.isTouching(enemy)) {
    player.velocityX = 0;
  }
}
```
