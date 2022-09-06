

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;


const rockBton = document.getElementById("rock");
const paperBton = document.getElementById("paper");
const scissorsBton = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


rockBton.addEventListener("click", ()=>{
    play(ROCK);
});
paperBton.addEventListener("click", ()=>{
    play(PAPER);
});
scissorsBton.addEventListener("click", ()=>{
    play(SCISSORS);
});

function play(userOption){
     userImg.src = "Images/"+userOption+".svg";

     resultText.innerHTML = "..."

     const interval = setInterval(function(){
        const machineOption = calcMchineOption();
        machineImg.src = "Images/"+machineOption+".svg"
     }, 200)

     setTimeout(function(){

        clearInterval(interval);

        const machineOption = calcMchineOption();
     
        const result = calcResult(userOption, machineOption);
       
        machineImg.src = "Images/"+machineOption+".svg"
        switch(result){
           case TIE:
               resultText.innerHTML = "Empate 🤜🤛!"
               break;
           case WIN:
               resultText.innerHTML = "Ganaste 😎!"
               break;
           case LOST:
               resultText.innerHTML = "Perdiste 😓!"
               break;
        }
     }, 2000); 
}

function calcMchineOption(){
    const number = Math.floor(Math.random() *3 );
    switch (number){
        case 0:
            return ROCK;
            case 1:
                return PAPER;
                case 2:
                    return SCISSORS;
    }
}

function calcResult(userOption, machineOption){
    if(userOption == machineOption){
        return TIE;

     }else if(userOption == ROCK){

        if(machineOption == PAPER) return LOST;
        if(machineOption == SCISSORS) return WIN;
        
     }else if(userOption == PAPER){

        if(machineOption == SCISSORS) return LOST;
        if(machineOption == ROCK) return WIN;
        
     }else if(userOption == SCISSORS){

        if(machineOption == ROCK) return LOST;
        if(machineOption == PAPER) return WIN;
        
     }
}