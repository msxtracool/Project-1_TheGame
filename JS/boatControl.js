//adicionar a imagem no html e criar os controles
class BoatPlayer {
  constructor(gameArea, left, top, height, width) {
    this.gameScreen = gameArea;
    this.left = 0;
    this.top = 350;
    this.width = 125;
    this.height = 125;
    this.directionX = 0; //speedy indicator
    this.directionY = 0;

    //create an img for the player
    this.element = document.createElement("img");
    this.element.src = "./images/boatpaper.png";
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    this.gameScreen.appendChild(this.element);
  }

  //makes the boat move in the gameArea
  move() {
    if (this.top <= 145 && this.directionY < 0) {
      this.directionY = 0;
    }
    this.left = this.left + this.directionX;
    this.top = this.top + this.directionY;

    if (this.left < 0) {
      this.left = 0;
    }
    if (this.left > 800) {
      this.left = 800;
    }
    if (this.top < 0) {
      this.top = 0;
    }
    if (this.top > 350) {
      this.top = 350;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }

  //collision
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect(); //calculate boat's rectangle.
    const obstacleRect = obstacle.element.getBoundingClientRect(); //calculate obstacle's rectangle.

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
