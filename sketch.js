var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;

var allPlayers;
var distance = 0;

var form, player, game;
var trackImg;
var groundImg;

var car1,car2,car3,car4;
 var carImg1, carImg2, carImg3, carImg4;
var cars; // array

function preload(){
  carImg1=loadImage("images/car1.png");
  carImg2=loadImage("images/car2.png");
  carImg3=loadImage("images/car3.png");
  carImg4=loadImage("images/car4.png");
  trackImg=loadImage("images/track.jpg");
  groundImg=loadImage("images/ground.png");

  
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();

    
  }
}
