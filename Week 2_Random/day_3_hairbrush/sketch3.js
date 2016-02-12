var yoff = random(500);        

function setup() {
  createCanvas(8000, 600);
  frameRate(1);
}

function draw() {
background(215,45,104);
noFill();
stroke(random(150), random(20), random(255), 200);
strokeWeight(random(0.1,1));
  
  var xoff = random(500);       
  
  for (var x = random(500); x <= width; x += 10) {

    var y = map(noise(xoff, yoff), random(500), random(100), random(100) ,random(200));
    vertex(random(x, y), random(x,y)); 
 
    xoff += 0.5;
  }
  yoff += 0.5;
vertex(random(x, y), random(x,y)); 
vertex(random(x, y), height); 
  endShape(CLOSE);
}