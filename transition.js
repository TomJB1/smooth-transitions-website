let buttons = document.getElementsByClassName("change-page")
let circle = document.getElementById("circle");

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', pageTransition);
 }

window.onload = function() {
    circle.classList.remove("cover");
  };

function pageTransition(event) {
    circle.classList.add("cover");
    setTimeout(() => {
        window.location = event.target.attributes.href.nodeValue;
    }, 500);
}