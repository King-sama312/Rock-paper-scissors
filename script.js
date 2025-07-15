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

let computerChoice = GetComputerChoice()
let humanChoice = GetHumanChoice()

console.log("You chose", humanChoice)
console.log("Computer chose", computerChoice)

function determineWinner() {
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

console.log(determineWinner())

