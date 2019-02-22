// --- VARIABLES --- //
var mrg = 30;

var noise_1 = 0.0;
var noise_2 = 0.5;



// --- P5 --- //
function setup() {
  // Getting div size for canvas size
  var [canvas_w, canvas_h] = getDivSize('sketch-canvas');
  var canvas = createCanvas(canvas_w, canvas_h);
  // Setting canvas div
  canvas.parent('sketch-canvas');
  // Setting rect styles
  noStroke();
  // blendMode(EXCLUSION);
}

function draw() {
  background(250);
  // Updating perlin noise
  noise_1 = noise_1 + 0.01;
  noise_2 = noise_2 - 0.007;
  let x1 = noise(noise_1) * width;
  fill(255, 0, 0, 100);
  rect(x1/2, mrg, x1, height-2*mrg);
  let x2 = noise(noise_2) * width;
  fill(255, 255, 0, 100);
  rect(x2/2, mrg, x2, height-2*mrg);
}



// --- PLAIN JAVASCRIPT --- //
function getDivSize(div_name) {
  var div_w = document.getElementById(div_name).clientWidth;
  var div_h = document.getElementById(div_name).clientHeight;
  return [div_w, div_h];
}

function windowResized() {
  resizeCanvas(getDivSize('sketch-canvas')[0], getDivSize('sketch-canvas')[1]);
}