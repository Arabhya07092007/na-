var hypnoticBall, database;
var position;


var gameState = 0;
var playerCount;

var datebase;
var form,player,game;

function setup(){
  createCanvas(500,500);

  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount === 4){
    game.update(1);

  }
  if(gameState === 1){
    clear();
    game.play();
  }

  
}