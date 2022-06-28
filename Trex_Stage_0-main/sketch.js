var ground 

var trex ,trex_running;
var sprite



function preload(){

 trex_running = loadAnimation('trex1.png' , 'trex3.png' , 'trex4.png')

}



function setup(){

  createCanvas(600,200)
 
  //crie um sprite de trexß
 sprite = createSprite(200,50,20,20)
  trex = createSprite(50,160,20,50)
  trex.addAnimation('running', trex_running)
    trex.scale = 0.5
    trex.x = 50

    ground = createSprite(200,180,400,20)
}

function draw(){
 background("white")
 console.log(trex.y)
if (keyDown("space")) {
  trex.velocityY = trex.velocityY +0.5
  


}

 
trex.collide(ground)



 
  drawSprites()

}
