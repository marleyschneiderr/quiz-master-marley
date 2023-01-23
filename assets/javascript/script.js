// var gamescore = 0;
 // var presentQuestion = 0;
// var startScreen = 0;
// var pauseScreen = 0;
// var secondsRemaining = 75;
// var incorrect = 10;

// buttons that will be clicked on screen

// var ClickStartScreen = document.getElementById('Start-Game');
// var ClickNextButton = document.getElementById('next-button');
// var ClickStartButton = document.getElementById('button-start');




// WHEN I click the start button
// THEN a timer starts and I am presented with a question

// const startButton = document.getElementById("start-button");
 //    startButton.addEventListener("click", startQuiz);

//startQuiz function that will start the timer, present the 1st question, bind click event on options
  // function startQuiz() {
    // start timer
  //  startTimer();

    // 1st question shows up
  //  presentQuestion();

    //bind clikc event on options
  //  bindOptionClickEvent();
// }

// start timer and update the timer display on the page
// function startTimer() {
 //   let time = 75;
 //   const timerInterval = setInterval(function() {
 //       time --;
      //  document.getElementById("timer").innerHTML = time;
//      if (time === 0) {
   //         clearInterval(timerInterval);
 //       }
   //  }, 1000);
// }

// present the first question and options on the page
// function presentQuestion() {
  //  const question = "Inside which HTML element do we put the JavaScript?";
   // const options = ["<script>", "<js>", "<scripting>", "<javascript>"]
// }

// unction bindOptionClickEvent() {
   //  const options = document.querySelectorAll(".option");
  //  options.forEach(function(option) {
   //     option.addEventListener("click", function() {
   //         // Check if the selected option is right
   //         if (this.innerHTML === "<script>") {
   //             console.log("CORRECT!");
   //         } else {
   //             console.log("WRONG!");
   //         }
  //      });
  //  });
// }

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score





// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// quiz variables 

// select items to target 
// using document query selector - it can target both class and ids
const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answer-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// create let variables for current question selection
let currentQuestion = 0;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// array with question objects in it
let questions = [ {
    question: 'Which of the following keywords is used to define a variable in JavaScript?',
    choice1: 'var',
    choice2: 'let',
    choice3: 'Both A & B',
    choice4: 'None of the above',
    answer: 3,
},

{
    question: 'Which of the following methods is used to access HTML elements using JavaScript?',
    choice1: 'getElementbyId()',
    choice2: 'getElementsbyClassName()',
    choice3: 'Both A & B',
    choice4: 'None of the above',
    answer: 3,
},

{
    question: 'How can a datatype be declared to be a constant type?',
    choice1: 'const',
    choice2: 'var',
    choice3: 'let',
    choice4: 'constant',
    answer: 1,
},

{
    question: 'Which function is used to serialize an object into a JSON string in JavaScript?',
    choice1: 'stringify()',
    choice2: 'parse()',
    choice3: 'convert()',
    choice4: 'None of the above',
    answer: 1,
},

{
    question: 'How do you stop an interval timer in JavaScript?',
    choice1: 'clearTimer',
    choice2: 'clearInterval',
    choice3: 'intervalOver',
    choice4: 'clearOver',
    answer: 2,
},

{
    question: 'How do you write a comment in JavaScript?',
    choice1: '/* */',
    choice2: '#',
    choice3: '//',
    choice4: '$$',
    answer: 3,
},
]
