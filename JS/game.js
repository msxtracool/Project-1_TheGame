class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameArea = document.querySelector("#game-area");
    this.endScreen = document.querySelector("#gameover-screen");
    this.gameContainer = document.querySelector("#game-container");
    this.scorePanel = document.querySelector("#panel");
    this.scoreBoard = document.querySelector("#scores");
    this.livesContainers = document.querySelector("#lives");
    this.player = new BoatPlayer(this.gameArea, 0, 350);
    //this.height = 600;
    //this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null; //store game's timer;
  }
  start() {
    //this.gameArea.style.height = this.height + "px";
    // this.gameArea.style.width = this.width + "px";
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.gameArea.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, Math.round(1000 / 60));
  }
  gameLoop() {
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    console.log("Im in the update");
    this.player.move();
  } //It will control my player
}
