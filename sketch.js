
var fixedRect, movingRect,obj1,obj2,obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100,100,30,30)
  obj1.shapeColor = "red"

  obj2 = createSprite(200,100,30,30)
  obj2.shapeColor = "red"

  obj3 = createSprite(300,100,30,30)
  obj3.shapeColor = "red"


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  

  obj1.y = mouseY
  obj1.x = mouseX

  if(obj1.isTouching(obj2)) {
    obj1.shapeColor = "blue"
  }

  bounceoff(movingRect,fixedRect) 
  
  drawSprites();
}

