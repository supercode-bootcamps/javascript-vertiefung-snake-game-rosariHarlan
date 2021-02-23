var snakeContainer = document.createElement("div");
snakeContainer.id = "snakeField";
document.body.appendChild(snakeContainer);

function createDivs() {
  for (var i = 0; i <= 99; i++) {
    var divItems = document.createElement("div");
    divItems.classList.add("item");
    snakeContainer.appendChild(divItems);
  }
}

createDivs();

snakeContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "#fe019a";
  e.target.style.animation = "disco 1.5s infinite";
  setTimeout(function () {
    e.target.style.backgroundColor = "lightblue";
    e.target.style.animation = "none";
  }, 500);
});
