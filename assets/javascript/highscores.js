const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// allows the score you save to show up on screen, whatever you type in will fill it in
highScoresList.innerHTML = 
highScores.map(socre => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('');
