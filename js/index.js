// ========== Elements ==========
const levelInputs = document.querySelectorAll('input[name="difficulty"]');
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("check-btn");
const startBtn = document.getElementById("start-btn");
const howtoBtn = document.getElementById("howto-btn");
const messageEl = document.getElementById("message");
const rangeValueEl = document.getElementById("range-value");
const guessesValueEl = document.getElementById("guesses-value");

// ========== State ==========
const state = {
  max: 50,
  maxGuesses: 6,
  guessesUsed: 0,
  secret: 0,
  isOver: false,
};

// ========== Helpers ==========
function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getSelectedLevel() {
  const checked = document.querySelector('input[name="difficulty"]:checked');
  return {
    max: Number(checked.dataset.max),
    maxGuesses: Number(checked.dataset.guesses),
  };
}

function showMessage(text, type = "") {
  messageEl.textContent = text;
  messageEl.className = type ? `message message--${type}` : "message";
}

function renderStats() {
  rangeValueEl.textContent = `1 – ${state.max}`;
  guessesValueEl.textContent = `${state.guessesUsed} / ${state.maxGuesses}`;
}

function setControlsDisabled(disabled) {
  guessInput.disabled = disabled;
  checkBtn.disabled = disabled;
}

// ========== Game flow ==========
function startNewGame() {
  const level = getSelectedLevel();

  state.max = level.max;
  state.maxGuesses = level.maxGuesses;
  state.guessesUsed = 0;
  state.secret = getRandomNumber(level.max);
  state.isOver = false;

  guessInput.value = "";
  guessInput.min = 1;
  guessInput.max = state.max;
  setControlsDisabled(false);
  renderStats();
  showMessage(`I'm thinking of a number between 1 and ${state.max}.`);
  guessInput.focus();
}

function endGame(won) {
  state.isOver = true;
  setControlsDisabled(true);

  if (won) {
    showMessage(
      `Correct! You found ${state.secret} in ${state.guessesUsed} guesses.`,
      "win"
    );
  } else {
    showMessage(`Game over. The number was ${state.secret}.`, "lose");
  }
}

function checkGuess() {
  if (state.isOver) return;

  const raw = guessInput.value.trim();

  if (raw === "") {
    showMessage("Please enter a number first.", "error");
    return;
  }

  const guess = Number(raw);

  if (!Number.isInteger(guess) || guess < 1 || guess > state.max) {
    showMessage(`Enter a whole number between 1 and ${state.max}.`, "error");
    return;
  }

  state.guessesUsed++;
  renderStats();

  if (guess === state.secret) {
    endGame(true);
    return;
  }

  if (state.guessesUsed >= state.maxGuesses) {
    endGame(false);
    return;
  }

  const left = state.maxGuesses - state.guessesUsed;
  const direction = guess > state.secret ? "Too high" : "Too low";
  showMessage(`${direction}! ${left} guesses left.`, "hint");

  guessInput.value = "";
  guessInput.focus();
}

// ========== Events ==========
levelInputs.forEach((input) => {
  input.addEventListener("change", startNewGame);
});

checkBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkGuess();
});

startBtn.addEventListener("click", startNewGame);

howtoBtn.addEventListener("click", () => {
  showMessage( 
    "Pick a difficulty, type a number and press Check. You'll get a hint after every guess."
  );
});

// ========== Init ==========
startNewGame();