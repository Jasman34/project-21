var bullet,thickness;
var wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 80, 20);
  car.shapecolor=("white");

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=(80,80,80);
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*speed*weight*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapecolor(225,0,0);
  }
  if(damage<10){
    wall.shapecolor(0,225,0);
  }
  }
  drawSprites();
}

function hasCollided(Lwall,Lbullet){
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
 return false;
}