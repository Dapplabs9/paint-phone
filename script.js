var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var lastX,lastY;
var color = "black";
var penWidth = 1;

var hieght = screen.height;
var width = screen.width;

var new_hieght = hieght - 30;
var new_width = width - 70;

if (width < 992){
    document.getElementById("canvas1").height = new_hieght;
    document.getElementById("canvas1").width = new_width;
}
canvas.addEventListener("touchstart",touch_start);

function touch_start(e){
    color = document.getElementById("colour").value;
    penWidth = document.getElementById("line_width").value;
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",touch_move);
function touch_move(e){
    var currentX = e.touches[0].clientX - canvas.offsetLeft;
    var currentY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth = penWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    lastX = currentX;
    lastY = currentY;
}