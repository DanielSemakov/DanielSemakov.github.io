let drawing = false;
let lines = [];
let brushColor = "red";

function setup() {
  createCanvas(windowWidth * 0.95, windowHeight * 0.9);
  background(0);
  strokeWeight(5);
  colorMode(HSB);
}

function mousePressed() {
  drawing = true;
  lines.push([]);
}

function mouseReleased() {
  drawing = false;
}

function draw() {
  for (let i = 0; i < lines.length; i++) {
    let currentLine = lines[i];
    stroke(brushColor);
    noFill();
    beginShape();
    for (let j = 0; j < currentLine.length; j++) {
      vertex(currentLine[j].x, currentLine[j].y);
    }
    endShape();
  }

  if (drawing) {
    let currentLine = lines[lines.length - 1];
    currentLine.push(createVector(mouseX, mouseY));
  }
}

document.getElementById("clear-canvas").addEventListener("click", () => {
  background(0);
  lines = [];
});

document.getElementById("red-color").addEventListener("click", () => {
  brushColor = "red";
});

document.getElementById("green-color").addEventListener("click", () => {
  brushColor = "green";
});

document.getElementById("blue-color").addEventListener("click", () => {
  brushColor = "blue";
});

document.getElementById("purple-color").addEventListener("click", () => {
  brushColor = "purple";
});

document.getElementById("white-color").addEventListener("click", () => {
  brushColor = "white";
});

document.getElementById("yellow-color").addEventListener("click", () => {
  brushColor = "yellow";
});

document.getElementById("pink-color").addEventListener("click", () => {
  brushColor = "pink";
});

