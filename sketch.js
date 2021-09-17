var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "lightblue";

  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "lightgreen";

  movingRect.debug = true;
  
  rect1 = createSprite(200,100,60,50);
  rect1.shapeColor = "orange"
  rect2 = createSprite(400,100,50,50);
  rect2.shapeColor = "purple"
  rect3 = createSprite(300,100,60,50);
  rect3.shapeColor = "blue"
  rect4 = createSprite(100,100,60,50);
  rect4.shapeColor = "white"
}

function draw() {
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);


  if (isTouching(movingRect, rect1)) {
    rect1.shapeColor = "red";
  movingRect.shapeColor = "red";
  } else {
    rect1.shapeColor = "lightblue";
  movingRect.shapeColor = "lightgreen";
  }
  
  

  drawSprites();
}
function isTouching(object1, object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && 
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 && 
    object2.y - object1.y < object1.height/2 + object2.height/2 ) {
  return true
} else {
  return false;
}
}