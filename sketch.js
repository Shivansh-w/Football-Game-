var striker, goalkeeper;
var goal;
var goalImage;
var goalkeeperImage;
var strikerImage;
var football, footballImage;
var scoretext,textscoreImage;
var goaltext,textgoalImage;


function preload(){
  goalImage= loadImage("Goal.jpg");
  goalkeeperImage= loadImage("goalkeeper.jpg");
  strikerImage= loadImage("sti.png");
  footballImage= loadImage("Football.jpg");
  textscoreImage= loadImage("TextScore.png");
  textgoalImage= loadImage("textgoal.png");

}
function setup() {
  createCanvas(1280,625);
  
  
   goal= createSprite(625,160,200,20)
   goal.addImage(goalImage);
   goal.scale= 2;
   goalkeeper= createSprite(600,230,20,20);
   goalkeeper.addImage(goalkeeperImage);
   goalkeeper.scale=0.5;
   striker= createSprite(650,500,20,20);
   striker.addImage(strikerImage);
   striker.scale= 2.5;
   football= createSprite(585,560,20,20);
   football.addImage(footballImage);
   football.scale= 0.2;
   scoretext= createSprite(780,580,20,20);
   scoretext.addImage(textscoreImage);
   scoretext.scale=0.5;
   goaltext= createSprite(780,400,20,20);
   goaltext.addImage(textgoalImage);
   goaltext.scale=0.5;
   goaltext.visible= false;

   for(var i =5;i>0;i--){
    console.log(i);
     textSize(24);
     text(i,20,40);
   }
  
   
}

function draw() {
  background(0);
  text("Score A GOAL !",200,10);
  goalkeeper.x= World.mouseX;
  
  if(keyWentDown("space")){
    football.y= 540;
    football.velocityY=-5;   
  }

  if(football.isTouching(goalkeeper)){
    football.velocityX=0;
    football.velocityY=0;
  }

  if(football.y>goalkeeper.y){
    goaltext.visible=true; 
  }

  if(frameCount>=180){
    scoretext.visible= false;
  }  
  
  drawSprites();
}