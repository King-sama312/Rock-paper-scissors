function getComputerChoice() {
    return Math.floor(Math.random() * 3)

}

function getHumanChoice() {
   let a = prompt("Choose rock, paper and scissors in small letters")
   return a
}

console.log("You chose", getHumanChoice())

if (getComputerChoice() == 0) {
    console.log("Computer chose Rock")
}
else if (getComputerChoice() == 1) {
    console.log("Computer chose Paper")
}
else {
    console.log("Computer chose Scissors")
}
