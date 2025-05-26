//this file is connected to the buttons of the game

//variables
const playGameButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const gameContainer = document.querySelector("#game-container");
const gameArea = document.querySelector("#game-area");
const timerSpan = document.querySelector("#timer span");
const progressBar = document.querySelector(".bar");
let ourGame;

//event listeners
playGameButton.addEventListener("click", () => {
  startGame();
});

//add the arrow buttons
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    console.log("right pressed");
    ourGame.player.directionX = 2;
  }
  if (event.code === "ArrowLeft") {
    console.log("left pressed");
    ourGame.player.directionX = -2;
  }
  if (event.code === "ArrowUp") {
    console.log("Up pressed");
    ourGame.player.directionY = -2;
  }
  if (event.code === "ArrowDown") {
    console.log("Down pressed");
    ourGame.player.directionY = 2;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    console.log("right pressed");
    ourGame.player.directionX = 0;
  }
  if (event.code === "ArrowLeft") {
    console.log("left pressed");
    ourGame.player.directionX = 0;
  }
  if (event.code === "ArrowUp") {
    console.log("Up pressed");
    ourGame.player.directionY = 0;
  }
  if (event.code === "ArrowDown") {
    console.log("Down pressed");
    ourGame.player.directionY = 0;
  }
});
//functions

function startGame() {
  console.log("starting the game");
  //hide the start screen
  ourGame = new Game();
  ourGame.start();
}
