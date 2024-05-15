let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

 const msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone","paper","scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw Play Again!!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoise) =>{
    console.log("userChoice = ",userChoise);
    const compChoice = genCompChoice();
    console.log("computerChoice = ",compChoice);

    if(userChoise === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoise === "stone"){
          userWin =  compChoice === "paper" ? false:true;
        }
        else if(userChoise === "paper")
        {
           userWin= compChoice ==="scissor" ? false:true;
        }
        else
        {
            userWin = compChoice === "stone" ? false:true;
        }
        showWinner(userWin,userChoise,compChoice);
        
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click",() =>{
        const userChoise = choice.getAttribute("id");
        
        playGame(userChoise);
    });
});