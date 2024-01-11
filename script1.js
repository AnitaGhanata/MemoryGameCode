const cards = document.querySelectorAll(".card");
let hasFlipedCard =false;
let lockBoard = false;
let firstCard, secondCard;


function shuffleCards(){
    cards.forEach(card=>{
        let ranDomPos = Math.floor(Math.random() * 12);
        card.style.order = ranDomPos;
    })
}

function flipCard(){
    if(lockBoard) {
        return;
    }
    this.classList.add('flip');
    if(!hasFlipedCard){
        hasFlipedCard =  true;
        firstCard = this;
        return;
    }
    secondCard = this;
    lockBoard = true;
    checkForMatch();
}
function checkForMatch(){
    let isMatch = firstCard.dataset.index === secondCard.dataset.index ;
    if(isMatch){
        disabledCards();
     }
    unfipCards();
    checkForWin();
}

function disabledCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unfipCards(){
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}
function resetBoard(){
    hasFlipedCard =false; 
    lockBoard = false;
    firstCard= null;
    secondCard = null;
}

// timer function here 
let timeInterval ;
let seconds = 0;
let timeDiv = document.getElementById("timingShow");

// reset Game again
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', resetGame);
function resetGame(){
    cards.forEach(card=>{
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    })
    resetBoard();
    shuffleCards();
    stopTimer();
    seconds = 0;
    startTimer();
    //document.getElementById("resultShow").innerHTML = "";
}
function Time(time){
    if(time < 10) {
        return '0'+ time;
    }
    return time;
}

function startTimer(){
    timeInterval = setInterval(()=>{
        seconds ++;

        const hours = Math.floor(seconds/3600);
        const minets = Math.floor((seconds % 3600) / 60);
        const rememingSecond = seconds % 60;

        timeDiv.innerHTML = `Timer: ${Time(hours)}:${Time(minets)}:${Time(rememingSecond)}`

    }, 1000)
}

function stopTimer(){
    clearInterval(timeInterval);
}

function checkForWin(){
    if(document.querySelectorAll('.flip').length === cards.length){
        stopTimer();

        const hours = Math.floor(seconds/3600);
        const minets = Math.floor((seconds % 3600) / 60);
        const rememingSecond = seconds % 60;
        document.getElementById("resultShow").innerHTML = `Congratulations! You've completed the game in ${Time(hours)}:${Time(minets)}:${(rememingSecond)}`
    }
}


function startGame(){
    startTimer();
    shuffleCards();
    cards.forEach(card=> card.addEventListener('click', flipCard));
    document.getElementById("startButton").remove()
}

let buttonStartGame = document.getElementById("startButton");
buttonStartGame.addEventListener('click', startGame)