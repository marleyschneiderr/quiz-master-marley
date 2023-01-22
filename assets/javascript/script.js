var gamescore = 0;
var presentQuestion = 0;
var startScreen = 0;
var pauseScreen = 0;
var secondsRemaining = 75;
var incorrect = 10;

// buttons that will be clicked on screen

var ClickStartScreen = document.getElementById('Start-Game');
var ClickNextButton = document.getElementById('next-button');
var ClickStartButton = document.getElementById('button-start');




// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // Add an event listener for the start button

// let start = document.querySelector(#button-start);

// start.addEventListener ("click", function()
  //   var timeEl = document.querySelector(".timer");
   // var secondsLeft = 75;
// )

const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startQuiz);

//startQuiz function that will start the timer, present the 1st question, bind click event on options
function startQuiz() {
    // start timer
    startTimer();

    // 1st question shows up
    presentQuestion();

    //bind clikc event on options
    bindOptionClickEvent();
}

// start timer and update the timer display on the page
function startTimer() {
    let time = 75;
    const timerInterval = setInterval(function() {
        time --;
        DocumentTimeline.getElementById("timer").innerHTML = time;
        if (time === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
