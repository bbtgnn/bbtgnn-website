// --- VARIABLES --- //
var mrg = 0;

var noise_1 = 0.0;
var noise_2 = 0.5;



// --- P5 --- //
function setup() {
  // Getting div size for canvas size
  var canvas = createCanvas(windowWidth, Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  ));
  // Setting canvas div
  canvas.parent('sketch-canvas');
  // Setting rect styles
  noStroke();
  // blendMode(EXCLUSION);
}

function draw() {
  background(245);
  // Updating perlin noise
  noise_1 = noise_1 + 0.001;
  noise_2 = noise_2 - 0.0007;
  let x1 = noise(noise_1) * width;
  fill(255, 0, 0, 100);
  rect(x1/2, mrg, x1, height-2*mrg);
  let x2 = noise(noise_2) * width;
  fill(255, 255, 0, 100);
  rect(x2/2, mrg, x2, height-2*mrg);
}

function windowResized() {
  resizeCanvas(windowWidth, Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  ));
}