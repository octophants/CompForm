
var xspacing = 5;    
var w;               
var theta = 0.0;      
var amplitude = 50.0; 
var period = 500.0;   
var dx;             
var yvalues; 
function setup() {
  createCanvas(800 , 600);
  w = 2000
  dx = (TWO_PI / period) * random(10);
  yvalues = new Array(floor(w/random(10)));
}

function draw() {
  background(255,255,0);
  calcWave();
  renderWave();
}

function calcWave() {

  theta += 0.01;

  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  stroke(0);
  strokeWeight(1.5);
  fill(255,255,0);

  for (var x = 0; x < yvalues.length; x++) {
    rect(x*xspacing, height/2+yvalues[x], 20, 20);
  }
}
