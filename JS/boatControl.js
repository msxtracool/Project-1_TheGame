//adicionar a imagem no html e criar os controles
class BoatPlayer {
  constructor(gameScreen, left, top, height, width) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = 110;
    this.height = 110;
    this.element = document.createElement("img");

    this.element.src = "../images/boatpaper.PNG";
    this.element.style.width = this.width + "px";
    this.element.style.height = this.height + "px";
    this.element.style.position = "absolute";
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";

    this.gameScreen.appendChild(this.element);
  }
}
