// Generate a random number between 1 and 25
let randomNumber = Math.floor(Math.random() * 25) + 1;
const input = document.querySelector('#inputBtn');
const message = document.querySelector('p');
const submitBtn = document.querySelector('button[type="submit"]');
const resetBtn = document.querySelector('button[type="reset"]');

// Function to check the guess
submitBtn.addEventListener('click', () => {
  const userGuess = Number(input.value);

  if (!userGuess) {
    message.textContent = "⚠️ Please enter a number!";
    message.style.color = "yellow";
  } else if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    message.style.color = "lightgreen";
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "📈 Too low! Try again.";
    message.style.color = "orange";
  }

  input.value = ""; // Clear input
});

// Function to reset the game
resetBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 25) + 1;
  message.textContent = "🔄 Game reset! Guess again.";
  message.style.color = "white";
  input.value = "";
});
