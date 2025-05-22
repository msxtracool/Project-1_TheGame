class Obstacles {
  constructor(gameArea) {
    this.gameScreen = gameArea;
    this.left = 800;
    this.top = 300; //??
    this.width = 100;
    this.height = 100;

    //create an img for the obstacles
    this.element = document.createElement("img");
    this.element.src = "../images/obstacle01.PNG";
    this.element.style.position = "absolute";
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left -= 3;

    //I need to add more conditional for up and down.

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = this.left + "px";
  }
}
