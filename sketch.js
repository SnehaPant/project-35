//Create variables here
var dog,happydog,database, foodStock;
 var foodS=20
function preload()
{
  //load images here
  dog=loadImage('Dog.png')
  happydog=loadImage('happydog.png')
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog1=createSprite(250,390,10,10)
  dog1.addImage(dog)
  dog1.scale=0.3
  foodStock=database.ref('food')
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  foodS=foodS-1
  writeStock(foodS)
  dog1.addImage(happydog)
}
  drawSprites();
  textSize(20)
  fill("white")
  text('foodRemaning:' + foodS ,100,250)
  text('NOTE:Press UP_ARROW key to feed Drago Milk!',30,30)
  

  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  database.ref('/').update(
    {
      food: x
    }
  )
}



