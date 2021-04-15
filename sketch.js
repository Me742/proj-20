var cat, mouse
var backgroundImage


function preload() {

  

   catRunning = loadAnimation( "images/cat2.png", "images/cat3.png", );
   mouseTeasing = loadAnimation( "images/mouse2.png", "images/mouse3.png",);
    backgroundImage = loadImage("images/garden.png");
    catImage = loadImage("images/cat1.png");
    mouseImage = loadImage("images/mouse1.png");
    catlastimg=loadAnimation("images/cat4.png");
    mouselastimg=loadAnimation("images/mouse4.png");

}

function setup() {
    createCanvas(1000, 800);
    cat=createSprite(800,700,20,20);
    mouse=createSprite(200,700,20,20);
}

function draw() {

    background(backgroundImage);
   
if (cat.x-mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catRunning", catlastimg);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouse", mouselastimg);
    mouse.changeAnimation("mouse");
}

    cat.addImage(catImage);
    cat.scale=0.1;
    mouse.addImage( mouseImage);
    mouse.scale=0.07;


    drawSprites();
}


function keyPressed() {

    if (keyCode === LEFT_ARROW) {
        cat.addAnimation("catRunning", catRunning);
        cat.changeAnimation("catRunning");
        cat.velocityX = -5;
     


        mouse.addAnimation("mouse", mouseTeasing);
        mouse.changeAnimation("mouse");
        mouse.frameDelay=25;
    
    }


}
