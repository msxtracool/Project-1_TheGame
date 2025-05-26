class Turtles {
  constructor(gameArea) {
    this.gameScreen = gameArea;

    //obstacles position
    this.left = Math.floor(Math.random() * (800 - 0 + 1) + 0);
    this.top = Math.floor(Math.random() * (400 - 200 + 1) + 160);
    this.width = 90;
    this.height = 90;
    this.imagesArray = [];

    //create an img for the obstacles
    this.element = document.createElement("img");
    this.element.src = "../images/babyTurtle.PNG";

    this.element.style.position = "absolute";
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left -= 3;

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = this.left + "px";
  }
}

//Add new obstacles
