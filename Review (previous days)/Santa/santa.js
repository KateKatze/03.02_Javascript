function removeSanta() {

    if (this.style.opacity == 0) {
        this.style.opacity = "1"
    } else {
        this.style.opacity = "0"
    }
}
var santaSelect = document.getElementsByClassName("santadog");

for (let i = 0; i < santaSelect.length; i++) {
    santaSelect[i].addEventListener("click", removeSanta)
}