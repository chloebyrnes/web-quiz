// Highscore
var highscoresContainer = document.getElementById('highscores');

function getHighscore() {
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    console.log(highscores)

    highscoresContainer.innerHTML = ''

    highscores.forEach(highscore => {
        var listItem = document.createElement('li');
        var initials = highscore.initials;
        var score = highscore.score;
        listItem.textContent = 'Initials: ' + initials + ' Highscore: ' + score;
        highscoresContainer.appendChild(listItem)
    })
}

getHighscore()
