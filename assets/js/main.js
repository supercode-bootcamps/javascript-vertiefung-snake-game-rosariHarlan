var snakeContainer = document.getElementById("snakeField");
var item = document.querySelectorAll(".item");

function createDivs() {
  for (var i = 0; i <= 99; i++) {
    snakeContainer.innerHTML += '<div class="item"></div>';
  }
}

createDivs();

snakeContainer.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "orange";
});
