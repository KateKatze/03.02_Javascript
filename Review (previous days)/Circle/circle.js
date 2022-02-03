document.getElementById("circle").addEventListener("mouseover", mouseIn);
document.getElementById("circle").addEventListener("mouseout", mouseOut);
document.getElementById("circle").addEventListener("click", mouseClick);
document.getElementById("circle").addEventListener("dblclick", doubleClick);

function mouseIn() {
    document.getElementById("circleText").innerHTML = "You are in the circle";
}

function mouseOut() {
    document.getElementById("circleText").innerHTML = "You are outside of the circle";
}

function mouseClick() {
    document.getElementById("circle").style.backgroundColor = "gray";
}

function doubleClick() {
    document.getElementById("circle").style.backgroundColor = "blue";
}