class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameArea = document.querySelector("#game-area");
    this.endScreen = document.querySelector("#gameover-screen");
    this.gameContainer = document.querySelector("#game-container");
    this.scorePanel = document.querySelector("#panel");
    this.scoreBoard = document.querySelector("#scores");
    this.gameTimer = document.querySelector("#timer");
    this.player = new BoatPlayer(this.gameArea, 0, 350);
    //this.height = 600;
    //this.width = 500;
    this.saveTurtles = [new Turtles(this.gameArea)];
    this.score = 0;
    this.gameIsOver = false;
    this.gameIntervalId = null; //store game's timer;
    this.frames = 0; //repeats turtles

    this.totalTime = 30; // total timer
    this.currentTime = this.totalTime;
    this.timerIntervalId = null;
  }
  start() {
    //this.gameArea.style.height = this.height + "px";
    // this.gameArea.style.width = this.width + "px";
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.gameArea.style.display = "block";

    this.startTimer(); // start the time

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, Math.round(1000 / 60));
  }
  gameLoop() {
    this.frames++;
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  //updates the boat and the turtle when moving and exceeding screen
  update() {
    console.log("Im in the update");

    //move the player
    this.player.move();

    //every 30 frames add new turtle
    if (this.frames % 40 === 0) {
      this.saveTurtles.push(new Turtles(this.gameArea));
    }

    //transverse the Array of turtles
    for (let i = 0; i < this.saveTurtles.length; i++) {
      const currentTurtles = this.saveTurtles[i];
      currentTurtles.move();

      //Check if the boat catches turtles.
      if (this.player.didCollide(currentTurtles)) {
        this.score++;
        this.scoreBoard.innerText = this.score; //updated the score panel

        console.log("bum bum bum");

        //remove from array
        this.saveTurtles.splice(i, 1);

        //remove from the DOM
        currentTurtles.element.remove();
      }

      //Exceed the screen width, remove from the array and DOM
      if (currentTurtles.left < -5) {
        //remove from array
        this.saveTurtles.splice(i, 1);

        //remove from the DOM
        currentTurtles.element.remove();
        i--;
      }
    }
  }

  startTimer() {
    this.timerIntervalId = setInterval(() => {
      this.currentTime--;

      // update the time
      timerSpan.textContent =
        this.currentTime < 10 ? "0" + this.currentTime : this.currentTime; //adds a 0 if the number is less than 10

      // update the progress bar
      const percent = (this.currentTime / this.totalTime) * 100; // calculates the percentagem of time passed
      progressBar.style.width = percent + "%"; // add the passed percentagem to progress bar

      // finishes game when time is up
      if (this.currentTime === 0) {
        clearInterval(this.timerIntervalId);
        this.gameIsOver = true;
        timerSpan.textContent = "00";
        alert("Time is UP!");
      }
    }, 1000);
  }
}
