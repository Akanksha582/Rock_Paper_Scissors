let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
}

const showWinner = (userWin) => {
    if(userWin) {
        console.log("you win!");
    }else{
        console.log("you lose");
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice) {
        //Draw condition
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors"? false :true;
        }else {
            //rock, paper
            userWin = compChoice === "rock"? false :true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoices =choice.getAttribute("id");
        console.log("choice was clicked", userChoices);
        playGame(userChoices);
    });
});