let head;

function preload() {
  // Load model with normalise parameter set to true
  head = loadModel('head_low_2.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  stroke(0); // Set the stroke color to white
  strokeWeight(0.5)
  noFill(); // Don't fill the polygons
}

function draw() {
  background(255,255,255,0);
  scale(2.5);
  rotateX(PI);
  rotateY(frameCount * 0.004);
  model(head);
}