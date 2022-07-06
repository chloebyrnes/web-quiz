

var scoreText = document.querySelector('#score');
var restartbtnEl = document.querySelector("#restartbtn")
var submitBtn = document.querySelector("#submit")

// Highscore

function saveHighscore() {
    // get value of input box
    var initialsEl = document.getElementById("initials");
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];

    //format new score object for current user
    var newScore = {
        score: time,
        initials: initials
    };

    // save to local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    //redirect to next page
    window.location.href = "highscorepage.html"

    }
}