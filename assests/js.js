// Questions to connect


var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var questionsEl = document.querySelector('#questions');
var startScreen = document.querySelector('.quiz-intro');
var questionScreen = document.querySelector('.question-screen')

var btnAEl = document.querySelector("#button-a");
var btnBEl = document.querySelector("#button-b");
var btnCEl = document.querySelector("#button-c");
var btnDEl = document.querySelector("#button-d");

var timerEl = document.querySelector("#timer");
var startbtnEl = document.querySelector("#startbtn")

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
        question: 'Which HTML tag do we use for Javascript?',
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctanswer: '<script>'
    },
    {
        question: 'Which HTML tag do we use for Javascript?',
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctanswer: '<script>'
    },
    {
        question: 'Which HTML tag do we use for Javascript?',
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctanswer: '<script>'
    }
];

var currentquestionIndex = 0;
function startquiz() {
    startScreen.addClass("hide");
    questionScreen.removeClass("hide");
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
}

function checkanswer(selectedAnswer) {
    var correctanswer = questions[currentquestionIndex].correctanswer;
    if(selectedAnswer === correctanswer) {
        alert("Correct");
    }
    else {
        alert("Incorrect");
    }
    if(currentquestionIndex === questions.length -1) {
        alert("Your Score Is" + score);
        endQuiz();
    }
    else {
        currentquestionIndex++;
        setQandA();
    }
} 

var startTime = function() {
    if(time>0) {
        time-=1;
        document.getElementById ("timer").innerHTML=time;
    }
    else {
        clearInterval(valId);
        alert("Time is up")
    }
}




