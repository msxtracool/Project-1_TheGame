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
    this.obstacles = [new Obstacles(this.gameArea)];
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

  //updates the boat and the obstacle when moving and exceeding screen
  update() {
    console.log("Im in the update");
    //move the player
    this.player.move();

    //transverse the Array of obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      //Exceed the screen width, remove from the array and DOM
      if (currentObstacle.left < -5) {
        //remove from array
        this.obstacles.splice(i, 1);

        //remove from the DOM
        currentObstacle.element.remove();
        i--;
      }
    }
  }
}
