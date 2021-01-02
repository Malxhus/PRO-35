var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
 dog = loadImage("images/doglmg.png")
 happyDog = loadImage("images/doglmg1.png")
}

function setup() {
  createCanvas(500,500);
  
  dog = new dog(200,200,50,50)
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background("green");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();

  

}



