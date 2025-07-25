let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

const buttons = document.querySelectorAll(".choice-btn");
const resultText = document.getElementById("round-result");
const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const nextRoundBtn = document.getElementById("next-round-btn");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function disableChoices() {
  buttons.forEach((btn) => btn.disabled = true);
}

function enableChoices() {
  buttons.forEach((btn) => btn.disabled = false);
}

function playRound(playerChoice) {
  disableChoices();
  resultText.textContent = "⏳ Thinking...";
  
  setTimeout(() => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    roundCount++;

    resultText.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice} — ${result}`;
    scoreText.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    
    if (roundCount < maxRounds) {
      nextRoundBtn.style.display = "inline-block";
    } else {
      resultText.textContent += ` Game Over!`;
      nextRoundBtn.style.display = "none";
    }
  }, 800); 
}


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    playRound(playerChoice);
  });
});

nextRoundBtn.addEventListener("click", () => {
  nextRoundBtn.style.display = "none";
  enableChoices();
  resultText.textContent = "Make your choice!";
});

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  resultText.textContent = "Make your choice!";
  scoreText.textContent = "You: 0 | Computer: 0";
  nextRoundBtn.style.display = "none";
  enableChoices();
});



