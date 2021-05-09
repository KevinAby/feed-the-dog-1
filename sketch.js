//Create variables here 
var  dog, happyDog;

var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("Images/dogImg.png");
  dogImg1 = loadImage("Images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(700,600);
  
  dog = createSprite(350,350,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

    
}


function draw() {  
  background("turquoise");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here
  strokeWeight()
  stroke("red");
  fill("Green")
 textSize(20)
  text("Food Remaining: " + foodS, 50,80);
fill("Red")
  text("Press the up arrow key to feed the dog", 300,80);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
 if(x<=0){
    x=0;
  } 
  else{
    x=x-1;
}

  database.ref('/').update({
    Food: x 
  })
}

