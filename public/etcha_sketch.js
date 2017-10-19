
var app = function() {
  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

  var deltaX = 0;
  var deltaY = 0;

function drawCircle(){

  context.beginPath();
  context.arc(300 + deltaX, 300 + deltaY,5, 0, 2 * Math.PI, true);
  // x and y coordinates on screen, then radius, start angle, end angle, anticlockwise
  context.closePath();

  context.lineWidth = 5;
  context.strokeStyle = "rgba(102, 102, 102, 1)";
  context.stroke();

  // the fill color
  context.fillStyle = "rgba(102, 102, 102, 1)";
  context.fill();
}
drawCircle();

var Keys = {
  up: false,
  down: false,
  left: false,
  right: false,
}
window.addEventListener("keydown", function(event) {
  var kc = event.keyCode;
  // event.preventDefault();

  if (kc === 37 ) {Keys.left = true}
  if (kc === 38 ) {Keys.up = true}
  if (kc === 39 ) {Keys.right = true}
  if (kc === 40 ) {Keys.down = true}

  moveSomething();

});

window.addEventListener("keyup", function(event) {
  var kc = event.keyCode;
  // event.preventDefault();

  if (kc === 37 ) {Keys.left = false}
  if (kc === 38 ) {Keys.up = false}
  if (kc === 39 ) {Keys.right = false}
  if (kc === 40 ) {Keys.down = false}

});



function moveSomething(e) {
  if (Keys.up) {
    if (deltaY <= -300) {
      deltaY = -298;}
    else {deltaY -= 4;}
  }
  if (Keys.down) {
    if (deltaY >= 300) {
      deltaY = 298;}
    else {deltaY += 4;}
  }
  if (Keys.left) {
    if (deltaX <= -300) {
      deltaX = -298;}
    else {deltaX -= 4;}
  }
  if (Keys.right) {
    if (deltaX >= 300) {
      deltaX = 298;}
    else {deltaX += 4;}
  }
    drawCircle();
}



}

window.addEventListener("load", app);
