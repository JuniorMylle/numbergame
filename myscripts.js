 var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.getElementById("guesses");
var lastResult = document.getElementById("lastResult");
var lowOrHi = document.getElementById("lowOrHi");
var guessSubmit = document.getElementById("guessSubmit");
var guessField = document.getElementById("guessField");
var guessCount = 1;
function checkGuess() {
  var userGuess = Number(guessField.value);
  guesses.innerHTML += userGuess + " ";
  if(guessCount == 10) {
    lastResult.innerHTML = "!!!GAME OVER!!!";
    disableForm();
  } else {
    
    if(userGuess == randomNumber) {
      lastResult.innerHTML = "Congratulations! You got it right!";
      lowOrHi.innerHTML = "";
      disableForm();
    } else {
      lastResult.innerHTML = "Wrong!";
      if(userGuess < randomNumber) {
        lowOrHi.innerHTML = "Your guess is too low!";
      } else if(userGuess > randomNumber) {
        lowOrHi.innerHTML = "Your guess is too high!";
      }
    }
    guessCount++;
    guessField.value = "";
  }
}
function disableForm() {
var wholeForm = document.querySelector(".form");
  wholeForm.style.opacity = 0.5;
  guessField.setAttribute("disabled", "disabled");
  guessSubmit.setAttribute("disabled", "disabled");
