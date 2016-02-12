var radius = 300;

function setup() {
  createCanvas(800, 600, WEBGL);
  noStroke();
  fill(204,90,200);
  frameRate(1);
}

function draw() {
  noStroke();
  background(204,70,200);
  var dirY = (random(800) / height - 0.5) * 2;
  var dirX = (random(800) / width - 0.5) * 2;
 
  ambientLight(204,70,200);
  sphere(radius);
 directionalLight(242,190,48, dirX, dirY, 1);
}