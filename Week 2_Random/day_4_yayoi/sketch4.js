var max_distance;

function setup() {
  createCanvas(800, 500);
  noStroke();
  max_distance = dist(0, 0, width, height);
  frameRate(1);
}

function draw() {
  background(255);
fill(0,0,255);
  for(var i = 0; i <= width; i += random(20)) {
    for(var j = 0; j <= height; j += random(20)) {
      var size = dist(random(700), random(500), i, j);
      size = size/max_distance * random(10,30);
      ellipse(i, j, size, size);
    }
  }
}