var app = function (){
  var canvas = document.querySelector("#main-canvas");
  var context = canvas.getContext("2d");

  context.fillStyle = "hotpink";
  context.fillRect(10, 10, 50, 50);



  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(100, 200);
  context.stroke();

  context.beginPath();
  context.moveTo(200,200);
  context.lineTo(200,300);
  context.lineTo(100, 300);
  context.closePath();
  // .closePath connects points to make a triangle
  context.fill();
  // this .stroke method actually draws it

  context.beginPath();
  context.arc(300, 300, 40, 0, 2 * Math.PI, true);
  // x and y coordinates on screen, then radius, start angle, end angle, anticlockwise
  context.stroke();

  var img = document.createElement("img");
  img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";

  var drawDoge = function(){
    context.drawImage(img, 400, 400, 90, 90);
  }

  img.addEventListener("load", drawDoge);

  var changeColour = function (){
    context.strokeStyle = this.value;
  }

  var colourPicker = document.querySelector("#input-colour");
  colourPicker.addEventListener("change", changeColour);

  var drawCircle = function(x, y){
    context.beginPath();
    context.arc(x, y, 40, 0, 2 * Math.PI, true);
    // x and y coordinates on screen, then radius, start angle, end angle, anticlockwise
    context.stroke();
  };

  canvas.addEventListener("click", function(event) {
    drawCircle(event.x, event.y);
  })
  }
  const render = () => {
    if ($canvas[0].getContext){
      canvas.fillStyle = "rgb(25,25,25)";
      canvas.fillRect(x,y,2,2);
  //
  //     var deltaX = 0;
  //     var deltaY = 0;
  //
  // $(document).keydown((e) => {
  //     switch(e.which) {
  //       case 37://left
  //         if (x >= 0) x--;
  //         else x=0;
  //         break;
  //       case 38: //up
  //         if (y >= 0) y--;
  //         else y = 0;
  //         break;
  //       case 39: //right
  //         if (x < width) x++;
  //         else x = width;
  //         break;
  //      case 40: //down
  //         if (y < height) y++;
  //         else y = height;
  //         break;
  //     }

window.addEventListener("load", app);
