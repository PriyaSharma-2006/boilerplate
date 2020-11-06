var wall,thickness;
var bullet, speed,weight;
function setup() {
  createCanvas(1200,800);
   car=createSprite(50, 200, 50, 50);
   car.shapeColor="blue"
   wall=createSprite(800,200,thickness,height/2);
   wall.shapeColor="green"

speed =random(55,90);
weight=random(400,1500);
thickness=random(22,83)

car.velocityX=speed;
}

function draw() {
  background("white");
  

 
  if(hascollided(bullet,wall))
  { bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
    if(damage>10)
{
  wall.shapeColor=color(255,0,0)

}
if(damage<10)
{
wall.shapeColor=Color(0,255,0)

}
  



  drawSprites();
}
function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>wallLeftEdge)
  {
    return true;
  }
  return false;
}





