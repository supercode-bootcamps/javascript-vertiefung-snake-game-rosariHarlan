// --- Create HTML elements ---

let snakeContainer = document.createElement("div");
snakeContainer.id = "snakeField";
document.body.appendChild(snakeContainer);

let scoreBoard = document.createElement("div");
scoreBoard.id = "scoreBoard";
document.body.appendChild(scoreBoard);

let scoreDisplay = document.createElement("p");
scoreDisplay.id = "score";
scoreBoard.appendChild(scoreDisplay);

let timer = document.createElement("div");
timer.id = "timer";
document.body.appendChild(timer);

let snakeImage = document.createElement("img");
snakeImage.src = "assets/img/snake.png";
scoreBoard.appendChild(snakeImage);

let popUp = document.createElement("span");
popUp.classList.add("popUp");
snakeContainer.appendChild(popUp);

// --- Create 100 children divs and mouseover effect ---

function discoSnake() {
  for (let i = 0; i <= 99; i++) {
    let divItem = document.createElement("div");
    divItem.classList.add("item");
    snakeContainer.appendChild(divItem);
    divItem.addEventListener("mouseover", function firstListener(e) {
      e.target.style.backgroundColor = "#fe019a";
      e.target.style.animation = "disco 1.5s infinite";
      setTimeout(function () {
        e.target.style.backgroundColor = "lightblue";
        e.target.style.animation = "none";
      }, 200);
    });
  }
}

discoSnake();

// --- Create timer ---

let totalSeconds = 0;

let showTimer = setInterval(function () {
  totalSeconds++;
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds - hour * 3600) / 60);
  let seconds = totalSeconds - (hour * 3600 + minute * 60);
  minute = minute < 10 ? "0" + minute : minute;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${minute} : ${seconds}`;
}, 1000);

// --- Add snake food and stop timer ---

let snakeItem = document.getElementsByClassName("item");
let score = 0;

let addSnakeFood = () => {
  let snakeFood = 0;
  let showFood = setInterval(function () {
    snakeFood = Math.floor(Math.random() * 99);
    snakeItem[snakeFood].innerHTML = "&#x1f352;";
    snakeItem[snakeFood].addEventListener("mouseover", function myListener(e) {
      e.target.innerHTML = " ";
      score++;
      scoreDisplay.innerHTML = `You ate ${score} cherries`;
      snakeItem[snakeFood].removeEventListener("mouseover", myListener);
      if (score === 10) {
        clearInterval(showFood);
        clearInterval(showTimer);
        popUp.innerHTML =
          "Your snake is now full! Come back again later! Time played: " +
          timer.innerHTML;
        popUp.classList.toggle("showPopup");
        snakeImage.style.display = "block";
        snakeContainer.classList.add("disabled");
      }
    });
  }, 500);
};

addSnakeFood();
