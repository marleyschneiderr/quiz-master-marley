// define variables for end page js
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// highscore page js variables
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// whenever a user presses the key, it is going to re-enable the save function for the highscore name inputed 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

// allows user to click button, page will not refresh unless button is clicked 
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    
    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    })

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};