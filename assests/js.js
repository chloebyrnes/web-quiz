// Questions to connect


var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var questionsEl = document.querySelector('#questions');
var startScreen = document.querySelector('.quiz-intro');
var questionScreen = document.querySelector('.question-screen')
//Finish screen
var finishScreen = document.querySelector('.quiz-finish-screen')

var btnAEl = document.querySelector("#button-a");
var btnBEl = document.querySelector("#button-b");
var btnCEl = document.querySelector("#button-c");
var btnDEl = document.querySelector("#button-d");
var feedBackEl = document.querySelector("#feedback");

var timerEl = document.querySelector("#timer");
var startbtnEl = document.querySelector("#startbtn")
var restartbtnEl = document.querySelector("#restartbtn")
var submitBtn = document.querySelector("#submit")

var time = 75;
var score = time;
var remainingtime = "";

document.getElementById("startbtn").addEventListener("click", function(){
    startquiz();

});


var questions = [
    {
        question: 'Which HTML tag do we use for Javascript?',
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctanswer: '<script>'
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        choices: ["!!/--Comment", "!--Comment--!", "// Comment", "<!--Comment-->"],
        correctanswer: '// Comment'
    },
    {
        question: 'Which operator is used to assign a value to a variable?',
        choices: ["x", "-", "*", "="],
        correctanswer: '='
    },
    {
        question: 'Is JavaScript case-sensitive?',
        choices: ["No", "Yes", "Not always", "Only when creating an array"],
        correctanswer: 'Yes'
    }
];

var currentquestionIndex = 0;
function startquiz() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    remainingtime = time;
    valId = setInterval(startTime, 1000);
    setQandA();
};

function setQandA() {
    var currentquestion = questions[currentquestionIndex];
    questionsEl.textContent = currentquestion.question;
    btnAEl.textContent = questions[currentquestionIndex].choices[0];
    btnBEl.textContent = questions[currentquestionIndex].choices[1];
    btnCEl.textContent = questions[currentquestionIndex].choices[2];
    btnDEl.textContent = questions[currentquestionIndex].choices[3];
};

function checkanswer(selectedAnswer) {
    var correctanswer = questions[currentquestionIndex].correctanswer;
    if(selectedAnswer === correctanswer) {
        //alert("Correct");
        feedBackEl.textContent = "Correct!";
    }
    else {
        //alert("Incorrect");
        feedBackEl.textContent = "Incorrect!";
        time-=5
        document.getElementById("timer").innerHTML=time;
    }
    feedBackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedBackEl.setAttribute("class", "feedback hide");
    }, 1000);

    if(currentquestionIndex === questions.length -1) {
        //alert("Your Score Is" + time);
        endQuiz();
    }
    else {
        currentquestionIndex++;
        setQandA();
    }
};

var startTime = function() {
    if(time>0) {
        time-=1;
        document.getElementById ("timer").innerHTML=time;
    }
    else {
        clearInterval(valId);
        //alert("Time is up")
        feedBackEl.textContent = "Time's up!";
    }
};

// Finish screen

var currentquestionIndex = 0;
function endQuiz() {
    clearInterval(valId);

    finishScreen.classList.remove("hide");
    questionScreen.classList.add("hide");

    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;
};




btnAEl.addEventListener("click", function () {
    checkanswer(btnAEl.textContent);
});
btnBEl.addEventListener("click", function () {
    checkanswer(btnBEl.textContent);
});
btnCEl.addEventListener("click", function () {
    checkanswer(btnCEl.textContent);
});
btnDEl.addEventListener("click", function () {
    checkanswer(btnDEl.textContent);
});


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

submitBtn.onclick = saveHighscore;

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

