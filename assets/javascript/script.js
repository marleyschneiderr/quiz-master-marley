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
    answer1: 'var',
    answer2: 'let',
    answer3: 'Both A & B',
    answer4: 'None of the above',
    answer: 3,
},

{
    question: 'Which of the following methods is used to access HTML elements using JavaScript?',
    answer1: 'getElementbyId()',
    answer2: 'getElementsbyClassName()',
    answer3: 'Both A & B',
    answer4: 'None of the above',
    answer: 3,
},

{
    question: 'How can a datatype be declared to be a constant type?',
    answer1: 'const',
    answer2: 'var',
    answer3: 'let',
    answer4: 'constant',
    answer: 1,
},

{
    question: 'Which function is used to serialize an object into a JSON string in JavaScript?',
    answer1: 'stringify()',
    answer2: 'parse()',
    answer3: 'convert()',
    answer4: 'None of the above',
    answer: 1,
},

{
    question: 'How do you stop an interval timer in JavaScript?',
    answer1: 'clearTimer',
    answer2: 'clearInterval',
    answer3: 'intervalOver',
    answer4: 'clearOver',
    answer: 2,
},

{
    question: 'How do you write a comment in JavaScript?',
    answer1: '/* */',
    answer2: '#',
    answer3: '//',
    answer4: '$$',
    answer: 3,
}
];

// create another constant, these will stay the same no matter what
const SCORE_POINTS = 300;
const MAX_QUESTIONS = 6;

// start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// function to get new question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
// keeping track of score throughout the quiz
        return window.location.assign('/end.html');
    }
// this is going to be question 1 of 6, 2 of 6, etc. - calculates what question we are on and provides a percentage 
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    // keep track of what question we are on 
    currentQuestion = availableQuestions[questionsIndex];
    // the question that we are on, going to know what question to ask 
    question.innerText = currentQuestion.question;

    answers.forEach(answer => {
        // know what answer we are clicking on 
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
    });
    //inserts new questions in the array, goes with questionsIndex 11 lines up from this one
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;

}

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // if you get the question correct, you will increase your score by 100 points
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        // whenever we answer a question, it will stay on the screen to answer
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            // call next question
            getNewQuestion()

        }, 1000);

    })
});