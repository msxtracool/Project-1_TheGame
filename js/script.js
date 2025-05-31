//this file is connected to the buttons of the game

//variables
const playGameButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const gameContainer = document.querySelector("#game-container");
const gameArea = document.querySelector("#game-area");
const timerSpan = document.querySelector("#timer span");
const progressBar = document.querySelector(".bar");
const restartButton = document.querySelector("#restart-button");
let ourGame;
//event listeners
//start button
playGameButton.addEventListener("click", () => {
  startGame();
});

//restart buttoon
restartButton.addEventListener("click", () => {
  window.location.reload();
});

//add the arrow buttons
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    console.log("right pressed");
    ourGame.player.directionX = 4;
  }
  if (event.code === "ArrowLeft") {
    console.log("left pressed");
    ourGame.player.directionX = -4;
  }
  if (event.code === "ArrowUp") {
    console.log("Up pressed");
    ourGame.player.directionY = -4;
  }
  if (event.code === "ArrowDown") {
    console.log("Down pressed");
    ourGame.player.directionY = 4;
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
  //hide the start screen
  ourGame = new Game();
  ourGame.start();
}
