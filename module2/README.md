# Module 2: Player Movement

In the last module, we learned how to create sprites. Now let's look at how we can move them.

We would like our character to move when the player presses one of the arrow buttons. 
Let's start with the right and left arrow buttons.

Remember, when working in game lab, all of our instructions and logic go inside the draw loop.
So to respond to a user action (like pressing an arrow key) we need to add some more instructions to this loop.

__First, let's think about what those instructions would look like if we said them in plain english.__
We'll start with the right arrow key

> If the user is pressing the right arrow key, move the character right.

If we add the above logic to the draw loop, every time the loop runs, it will check *Is the user pressing the right arrow key?*
If so, then we will make the player move. 

__How do we actually move the character?__ Velocity!

The character's velocity is their speed and which direction they're moving in. 
For example, if the character's X veclocity (X means horizontal) were 1, they would be moving horizontally at a speed of "1" in the right direction.
If it were 2, they would be moving twice as fast. If it were -2, they would be moving the left direction.
We can also specify Y velcoity (moving up and down).

In game lab, positive X velocity is in the right direction, and negative is in the left direction. 
Positive Y velocity is up, and negative Y velocity is down.

Try it out yourself! Try giving the player sprite some velocity and see what happens. 

```js
var player = createSprite(200, 200);
player.setAnimation("alienPink_1");
player.scale = 0.7;
player.velocityY = 1; // Put whatever numbers you want here!
player.velocityX = 2;
```

That's how velocity works! There's one problem though, the player can fly off the screen... We'd like to avoid that.

__How can we make sure the player stays on the screen?__

> TODO:Explain createEdgeSprites()

Cool, now we can move the character. But right now the character is always moving. 
Instead we only want to have the character move when the user is pressing the right arrow key.
Remember, our goal is 

> If the user is pressing the right arrow key, move the character right.

__Now, how do we translate this to code?__ 
In order to add these instructions to the draw loop in code, we need to use something called an if statement.

> TODO: Explain if statements here.

Now we can use an if statement in gamelab to as the question *Is the user pressing the right arrow button?*
If they are, we will move the character sprite

> TODO: Explain keyDown

```js
// TODO: Make sure this matches the code in the finished module
if (keyDown('right')) {
  player.velocityX = 1
}
```

Cool! We can move the character! You may have noticed one small problem though, the character doesn't stop moving... 


Just like how we had the instructions 

> If the user is pressing the right arrow key, move the character right.

We need to add the instructions 

> If the user stopped pressing the right arrow key, we need to stop moving the character right.

Let's add some more logic to the draw loop to accomplish this.

> TODO: Explain keyWentUp

To add the left key, we do the exact same thing, but we use `player.velocityX = -1` instead (to specify that the play should move left.

```js
// TODO: Make sure this matches the code in the finished module
if (keyDown('right')) {
  player.velocityX = 1
}
if (keyDown('left')) {
  player.velocityX = -1
}
```

Now we can move left and right!

__How can we make the character jump?__

> TODO: jumping



