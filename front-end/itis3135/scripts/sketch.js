const redButton = document.getElementById("red-color");
const greenButton = document.getElementById("green-color");
const blueButton = document.getElementById("blue-color");
const purpleButton = document.getElementById("purple-color");
const whiteButton = document.getElementById("white-color");
const yellowButton = document.getElementById("yellow-color");
const pinkButton = document.getElementById("pink-color");
const clearCanvasButton = document.getElementById("clear-canvas");

const buttons = [redButton, greenButton, blueButton, purpleButton, whiteButton,
yellowButton, pinkButton];

//When user clicks a color button, change future line color to the color indicated by the
//button
const updateLineColor = (event) => {
  const newColor = event.target.innerHTML.toLowerCase();
  stroke(newColor);
};

buttons.forEach((button) => button.addEventListener('click', updateLineColor));

//When user clicks "Clear Canvas" button, clear the canvas
const clearCanvas = () => {
  clear();
  background(0);
};

clearCanvasButton.addEventListener("click", clearCanvas);

function setup() {
  // Create the canvas
  const canvasWidth = windowWidth * 0.7;
  const canvasHeight = windowHeight * 0.9;

  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvas-container");

  // Set background to black
  background(0);

  // Set width of the lines
  strokeWeight(10);

  // Set screen reader accessible description
  describe('A black canvas where the user draws by selecting a color and dragging the mouse');
}

function mouseDragged() {
  //Draw a line from the previous position to the current position
  line(pmouseX, pmouseY, mouseX, mouseY);
}