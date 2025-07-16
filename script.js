function GetComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    if (a == 0) {
        return "rock"
    }
    else if (a == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


function GetHumanChoice() {
    let userChoice = prompt("Choose rock, paper or scissors")
    let ChoiceString = userChoice.toLowerCase()
    if (ChoiceString !== "rock" && ChoiceString !== "paper" && ChoiceString !== "scissors") {
        alert("Invalid choice! Please try again.")
        return GetHumanChoice() // recursive retry
    }

    return ChoiceString
}

function determineWinner(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {
        return "It's a tie!"
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            return "You win!"
        }
        else {
            return "You lose!"
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            return "You win!"
        }
        else {
            return "You lose!"
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            return "You win!"
        }
        else {
            return "You lose!"
        }
    }
}

function playRound() {
    let computerChoice = GetComputerChoice()
    let humanChoice = GetHumanChoice()

    console.log("You chose", humanChoice)
    console.log("Computer chose", computerChoice)

    let result = determineWinner(humanChoice, computerChoice) 
    console.log(result)
    return result
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let result = playRound(); 

        if (result === "You win!") {
            playerScore += 1;
        }
        else if (result === "You lose!") {
            computerScore += 1;
        }

        console.log(`Score after round ${i}: You = ${playerScore}, Computer = ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You won!! Yayy! 🤗");
    } else if (playerScore < computerScore) {
        console.log("You lose!! 😫");
    } else {
        console.log("It's a tie overall! 😐");
    }
}


playGame()


