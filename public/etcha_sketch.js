
var app = function() {
  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

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

window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            deltaX -= 2;
            break;
        case 38:
            deltaY -= 2;
            break;
        case 39:
            deltaX += 2;
            break;
        case 40:
            deltaY += 2;
            break;
    }
    drawCircle();
}


}

window.addEventListener("load", app);
