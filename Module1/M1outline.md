# Module 1 lesson overview  :sparkles: 
In this module, we will learn about the platform on which we are building our game and set up the background and main character for our example game.  

The game at this point has a background and the main character.  

  + Intro to environment (game code studio)
  + canvas & coordinate system
  + highlevel how game/processing works -- flipbook analogy
  + sprites creation and animation including scaling
  + module will introduce variables and functions

## Welcome!
  + discuss games and programming experience
  + show example game here? While this might not look like grand theft auto VI, this is the first step to making a game like that.
  + what is programming? Exercise on following directions. (maybe this could be part of module 2)

## We will be using game lab as our coding environment
  + game lab is a product of code.org - it is designed to help starting game designers get to a simple end product fast.
  + navigate to game lab and set up an account (either via our classroom account or your own) 
  + look at the example module 1, if we haven't already (follow a link to the game) 

## let's take a short tour 
### the code tab (where code is in orange in the upper left) has 4 main parts:  
  1. the main part is your workspace, which contains your code. it' starting you with the most essential piece of code. 
  2. to the left is a toolbox, where you can drag blocks of code into your workspace. try this now. click around. notice the tools are divided into different color coded sections. 
  > try this! drag over a new block of code, hit the the code botton in the upper right
  > blocks to code and back
you don't always have to use blocks, as you get more familiar you might want to write in code. there is a botton on the right of the workspace to switch back and forth. The code is javascript - a real programming language often used for web development
  3. all the way to the left is the game prototype
  4. on the bottom is the debug console - if there is an error in your code, it will tell you here when you run your program. It also incudes other tools for debugging which we'll use later.

### now lets look at the animation tab 
   + in the upper left toggle the button from code to animation
   + let's start here

## How do we make a character?
Sprites! Sprites are any object in a video game that can float in front of a background and can be manipulated. think of old animations where they painted characters onto clear sheets. they can be your characters (the main player, enemies), the ground, other objects they interact with - like coins.
### select a sprite from the library
  + We'll start by adding our main character
  + In the Animation tab, click the + to the left to add a new animation
  + there's lots to choose, from, and you'll have time to browse later, but for now, go to "characters" and select a main character from among those labeled alienBeige, alienBlue .... Green, Pink, or Yellow
  + should we have them select the walking ones too?
  + you could also make your own
### drawing pane
  + if you click on your animation, it will now show up in the drawing pane, where you can edit the image
  + it's best to duplicate your sprite first before editing it 
  + try turning it upside down
# I'm here with writing outline---
### sprite variable
a sprite is variable for a character - holds a collection of properties like it's location ; 
create, set animation, draw; 
sprites draw from the center
Dot notation for sprite properties
### set animation command, scale command

### canvas & coordinate system

## drawloop
Draw function - executes commands in a loop, repeats every 30 seconds (or the set world frame rate per second). Like a flip book. 
if you change a sprite property every frame, it looks like it's moving.

try it - wait, so many sprites!
Our flip book is drawn on transpartent panes. we need to give it a background that redraws each time.

## select and display a background   



if you redraw the background each time. and change a sprite property. It appears as if the sprite or drawn object is moving.
Combine with random number for location, or increment a sprite property. use rotation for now
## functions
Useful for organizing code, as well as using for repeated bits of code. 
Can call functions anywhere in program. Before or after defining. In or out of the draw loop.

    
