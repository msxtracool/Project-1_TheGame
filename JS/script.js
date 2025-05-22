//this file is connected to the buttons of the game

//variables
const playGameButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const gameContainer = document.querySelector("#game-container");
const gameArea = document.querySelector("#game-area");
let ourGame;

//event listeners
playGameButton.addEventListener("click", () => {
  startGame();
});

//functions

function startGame() {
  console.log("starting the game");
  //hide the start screen
  const ourGame = new Game();
  ourGame.start();
}
