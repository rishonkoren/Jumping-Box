var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
    box1 = createSprite(150,550,200,50)
    box1.shapeColor = "blue";
    box2 = createSprite(360,550,200,50)
    box2.shapeColor = "orange";
    box3 = createSprite(570,550,200,50)
    box3.shapeColor = "green";
    box4 = createSprite(780,550,200,50)
    box4.shapeColor = "red";
    ball = createSprite(500,300,50,50)
    ball.shapeColor = "black"
    ball.velocityX = 3
    ball.velocityY = 3
    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

drawSprites();
    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box1) && ball.bounceOff(box1)){
        ball.shapeColor = box1.shapeColor
        music.play()
    }
    if(ball.isTouching(box2) && ball.bounceOff(box2)){
        ball.shapeColor = box2.shapeColor
        music.play()
    }
    if(ball.isTouching(box3) && ball.bounceOff(box3)){
        ball.shapeColor = box3.shapeColor
        music.play()
    }
    if(ball.isTouching(box4) && ball.bounceOff(box4)){
        ball.shapeColor = box4.shapeColor
        music.play()
    }
}
