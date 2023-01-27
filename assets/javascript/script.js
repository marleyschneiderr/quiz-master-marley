// select items to target 
// using document query selector - it can target both class and ids
const question = document.querySelector('#question');
const answers = Array.from(document.querySelectorAll('.answer-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
// const startButtonEl = document.getElementById('start-button');

// create let variables for current question selection
let currentQuestion = 0;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let pauseInterval = 0;
let secondsLeft = 76;

// timer variable defined 
var timeEl = document.querySelector("#timer");

 
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

// timer 
const startTimer = function () {
    // We are checking zero because its originally set to zero
    if (pauseInterval === 0) {
        pauseInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(pauseInterval);
                allDone();
                timeEl.textContent = "Time's up!";
            }
        }, 1000);
    }
  //  mainScreen(currentQuestion);
};

// start game function
startGame = () => {
    startTimer()
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

// function to get new question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
// keeping track of score throughout the quiz
        return window.location.assign('./end.html');
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
    //inserts new questions in the array, goes with questionsIndex 
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
        let classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        // taking 10 seconds off everytime a question is answered incorrectly 
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        } else if (classToApply === "incorrect") {
            secondsLeft -= 12;
        }

        selectedChoice.parentElement.classList.add(classToApply);
        // whenever we answer a question, it will stay on the screen to answer
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            // call next question
            getNewQuestion()

        }, 1000);

    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};

startGame ();

