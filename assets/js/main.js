// --- Create main div container ---

let snakeContainer = document.createElement("div");
snakeContainer.id = "snakeField";
document.body.appendChild(snakeContainer);

// --- Create 100 children divs and mouseover effect ---

function discoSnake() {
  for (let i = 0; i <= 99; i++) {
    let divItem = document.createElement("div");
    divItem.classList.add("item");
    snakeContainer.appendChild(divItem);

    divItem.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#fe019a";
      // e.target.style.animation = "disco 1.5s infinite";
      setTimeout(function () {
        e.target.style.backgroundColor = "lightblue";
        // e.target.style.animation = "none";
        // e.target.innerHTML = "&#x1F40D;";
      }, 200);
    });
  }
}

discoSnake();

let snakeItem = document.getElementsByClassName("item");
let score = 0;

let addSnakeFood = () => {
  let snakeFood = 0;
  setInterval(function () {
    snakeFood = Math.floor(Math.random() * 99);
    snakeItem[snakeFood].classList.add("food");
    snakeItem[snakeFood].addEventListener("mouseover", (e) => {
      e.target.classList.remove("food");
      // score++;
      // console.log(score);
    });
  }, 1000);
};

addSnakeFood();
