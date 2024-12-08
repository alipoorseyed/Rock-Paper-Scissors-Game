let start_button = document.querySelector("body > div > main > div > div.start > button");
let timerElement = document.querySelector("body > div > main > div > div.start > p");
let resultElement = document.querySelector("body > div > main > div > p.result");
let rock_button =  document.querySelector("body > div > main > div > div.rps-span > button:nth-child(1)");
let paper_button = document.querySelector("body > div > main > div > div.rps-span > button:nth-child(2)");
let scissors_button = document.querySelector("body > div > main > div > div.rps-span > button:nth-child(3)");
let playerwin = document.querySelector("body > div > main > div > div.score > p.my-score");
let computerwin = document.querySelector("body > div > main > div > div.score > p.copmuter-score");
let notice_massege = document.querySelector("body > div > main > div > p.notice");
let reset_button = document.querySelector("body > div > main > div > p.reset");
let mode = document.querySelector("body > div > header > div > img");


let playerChoice;
let countdown;
const choices = ["rock", "paper", "scissors"];
let playerwincount = 0;
let computerwincount = 0;


mode.addEventListener("click",function(){
    document.body.classList.toggle("body-dark");
    document.querySelector("body > div").classList.toggle("dark");
    if(document.querySelector("body > div").classList.contains("dark")){
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(1) > path").setAttribute("fill","white");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(2) > path").setAttribute("fill","white");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(3) > path").setAttribute("fill","white");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(5) > path").setAttribute("fill","white");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(6) > path").setAttribute("fill","white");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(7) > path").setAttribute("fill","white");
        mode.setAttribute("src" , "./images/Vector (6).svg");
    }else{
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(1) > path").setAttribute("fill","black");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(2) > path").setAttribute("fill","black");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(3) > path").setAttribute("fill","black");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(5) > path").setAttribute("fill","black");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(6) > path").setAttribute("fill","black");
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(7) > path").setAttribute("fill","black");
        mode.setAttribute("src" , "./images/Vector (3).svg");
    }
});

reset_button.addEventListener("click",reset);



start_button.addEventListener("click",start_game);

function start_game(){
    start_button.style.display = "none";
    rock_button.addEventListener("click",rock_func);
    paper_button.addEventListener("click",paper_func);
    scissors_button.addEventListener("click",scissors_func);
    notice_massege.style.display = "none"
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(1)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(2)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(3)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(5)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(6)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(7)").style.display = "none";
    startTimer(11);
}


function startTimer(timer) {
    playerChoice = null;
    countdown = setInterval(function() {
        timer--;
        timerElement.textContent = timer;

        if (timer === 0) {
            clearInterval(countdown);
            if (playerChoice === null) {
                resultElement.textContent = "Time is up ! You have not selected anything 😑";
                computerwincount++;
                computerwin.innerHTML = `COMPUTER SCORE : ${computerwincount}`;
                if(computerwincount === 3){
                    reset();
                }
            }
        }
    }, 1000);
}


function playerSelect(choice) {
    playerChoice = choice;
    clearInterval(countdown);

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if(computerChoice === "rock"){
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(5)").style.display = "block";
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(6)").style.display = "none";
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(7)").style.display = "none";
    }else if(computerChoice === "paper"){
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(5)").style.display = "none";
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(6)").style.display = "block";
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(7)").style.display = "none";
    }else{
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(5)").style.display = "none";
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(6)").style.display = "none";
        document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(7)").style.display = "block";
    }
    let result;

    if (playerChoice === computerChoice) {
        result = "TIE 😒";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WON ! 🎉";
        playerwincount++;
        playerwin.innerHTML = `PLAYER SCORE : ${playerwincount}`;
    } else {
        result = "YOU LOSE ! ❌";
        computerwincount++;
        computerwin.innerHTML = `COMPUTER SCORE : ${computerwincount}`
    }

    resultElement.textContent = result;

    if(playerwincount === 3){
        setTimeout(() => {
            alert("player win !");
            reset();
        }, 100); 
        return true;
    } else if(computerwincount === 3){
        setTimeout(() => {
            alert("computer win !");
            reset();
        }, 100);  
        return true;
    }

    return false;
}


function rock_func(){
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(1)").style.display = "block";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(2)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(3)").style.display = "none";
    let x = playerSelect("rock");
    if(!x){
        startTimer(11);
    }
}

function paper_func(){
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(2)").style.display = "block";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(1)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(3)").style.display = "none";
    let x = playerSelect("paper");
    if(!x){
        startTimer(11);
    }
}
function scissors_func(){
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(3)").style.display = "block"
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(1)").style.display = "none";
    document.querySelector("body > div > main > div > div.show-rps > svg:nth-child(2)").style.display = "none";
    let x = playerSelect("scissors");
    if(!x){
        startTimer(11);
    }
}



function reset(){
         clearInterval(countdown);
         start_button.style.display = "block";
         resultElement.textContent = "";
         playerwin.innerHTML = `PLAYER SCORE : 0`;
         computerwin.innerHTML = `COMPUTER SCORE : 0`;
         playerwincount = 0;
         computerwincount = 0;
         timerElement.textContent = "";
         notice_massege.style.display = "block";
         rock_button.removeEventListener("click",rock_func);
         paper_button.removeEventListener("click",paper_func);
         scissors_button.removeEventListener("click",scissors_func);
}