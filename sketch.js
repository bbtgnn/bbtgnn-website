var canvas;
var t=0;
var rad;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  rad = width/10
}

function draw() {
  background(51);
  fill(255);
  ellipse(width/2+rad*cos(t),height/2+rad*sin(t),100,100);
  t += 0.05;
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};