playGame();




function playGame(){
    let userScore= 0;
    let cpuScore = 0;
    let userChoice = getUserChoice();
    let cpuChoice = getCpuChoice();
    for (let i = 0; i < 4; i++){
        let outcome = playRound(getCpuChoice(), getUserChoice())
        if (outcome === "Win"){
            userScore++;
        } else if (outcome === "Lose"){
            cpuScore++;
        }
        console.log("Score\n" +
                    "User: " + userScore +
                    "\nCPU: " + cpuScore)
    }
    function playRound(cpuChoice, userChoice){
        if (userChoice === "Invalid"){
            console.log("Invalid input")
            return;
        }
        if (userChoice === cpuChoice){
            console.log("Draw! You both chose " + cpuChoice);
            return "Draw";
        } else if ((userChoice === "ROCK" && cpuChoice === "SCISSORS") || (userChoice === "PAPER" && cpuChoice === "ROCK") || (userChoice === "SCISSORS" && cpuChoice === "PAPER")){
            console.log("You win! " + userChoice + " beats " + cpuChoice);
            return "Win";
        } else {
            console.log("You lose! " + cpuChoice + " beats " + userChoice);
            return "Lose";
        }
    }

    function getCpuChoice(){
        let choice = Math.random();
        if (choice > 0.33){
            return "ROCK";
        } else if(choice > 0.66){
            return "PAPER";
        } else {
            return "SCISSORS";
        }
    }

    function getUserChoice(){
        let userChoice = prompt("Please enter your choice").toUpperCase();
        if (userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS"){
            return "Invalid";
        }
        return userChoice;
    }

}


