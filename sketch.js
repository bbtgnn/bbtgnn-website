var canvas;

var mrg = 30;


let xoff = 0.0;
let xoff2 = 0.5;


function getDivSize() {
  var clientHeight = document.getElementById('sketch-canvas').clientHeight;
  var clientWidth = document.getElementById('sketch-canvas').clientWidth;
  return [clientWidth, clientHeight];
}

function setup() {
  canvas = createCanvas(getDivSize()[0], getDivSize()[1]);
  canvas.parent('sketch-canvas');
  strokeWeight(mrg);
  strokeCap(SQUARE);
  stroke(255, 0, 0);
}

function draw() {
  background(250);

  xoff = xoff + 0.01;
  xoff2 = xoff2 - 0.007;
  let n = noise(xoff) * width;
  line(n, mrg, n, height-mrg);
  let n2 = noise(xoff2) * width;
  line(n2, mrg, n2, height-mrg);
}

function windowResized() {
  resizeCanvas(getDivSize()[0], getDivSize()[1]);
}