//Create variables here
var dog, dogImg, happyDog, happyDogImg, database, foodS, foodStock;
function preload()
{
  //load images here
  dogImg=loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png');
}

function setup() {
  database = firebase.database();
  //console.log(database);
	createCanvas(500, 500);
  dog = createSprite(250, 250, 1, 1);
  dog.addImage('dog', dogImg);
  dog.scale = 0.2;

 var foodStock = database.ref('Food');
  foodStock.on('value', readStock);
}


function draw() {  
  background(46, 139, 87);
  
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage('dog' , happyDogImg);
    }
  
  

  drawSprites();
  //add styles here
  fill('black');
  text('Press UP_ARROW key to feed the dog', 150, 50);
}

function readStock(data){
  foodS = data.val();
  
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
   })

}


