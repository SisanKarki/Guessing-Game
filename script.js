// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number sss";
// document.querySelector(".scor").textContent = 15;
// document.querySelector(".guessNumber").value = 2;

let num = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const getMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
// console.log(num);
// document.querySelector(".number").textContent = num;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessNumber").value);

  if (!guess) {
    getMessage("😧Enter number");
  } else {
    if (guess > num) {
      getMessage("📈Too high");

      score--;

      document.querySelector(".scor").textContent = score;
      if (score == 0) {
        document.querySelector(".message").textContent =
          "you lost motherfucker.Try Again";
        score = 10;
      }
      if (score < 0) score = 0;
      document.querySelector("body").style.backgroundColor = "red";
    } else if (guess < num) {
      document.querySelector(".message").textContent = "📉Too low";
      score--;
      if (score == 0) {
        document.querySelector(".message").textContent =
          "you lost motherfucker. Try Again";
        score = 10;
      }
      if (score < 0) score = 0;

      document.querySelector(".scor").textContent = score;
      document.querySelector("body").style.backgroundColor = "red";
    } else if (guess === num) {
      document.querySelector(".message").textContent = "💐correct number";
      score++;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".hscore").textContent = highscore;
      }
      if (score == 0) {
        document.querySelector(".message").textContent =
          "you lost motherfucker.Try Again";
        score = 10;
      }
      if (score < 0) score = 0;
      document.querySelector(".number").textContent = num;
      document.querySelector(".scor").textContent = score;
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".guessNumber").style.backgroundColor = "green";
      document.querySelector("text").style.backgroundColor = "black";
    } else {
      document.querySelector(".message").textContent = "😟Guess again";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  let num1 = Math.trunc(Math.random() * 20) + 1;
  num = num1;
  score = 10;
  document.querySelector(".message").textContent = "🤔 Start Guessing...";
  document.querySelector(".scor").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guessNumber").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
});
