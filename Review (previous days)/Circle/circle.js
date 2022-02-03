let circle1 = document.getElementById("circle")

circle1.addEventListener("click", function() {
    circle1.style.backgroundColor = "magenta"
})
circle1.addEventListener("mouseover", function() {
    circle1.innerHTML = ("boy")
})
circle1.addEventListener("mouseout", function() {
    circle1.innerHTML = ("doggo")
})
circle1.addEventListener("dblclick", function() {
    circle1.style.backgroundColor = "orange"
})