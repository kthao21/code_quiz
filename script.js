//link to the DOM
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var timerEl = document.querySelector(".timer");
var choiceEl = document.querySelector(".choice-container");
var answerEl = document.querySelector(".answer");
var resultEl = document.querySelector(".result");
var controlsEl = document.querySelector(".controls");
var startButton = document.querySelector(".controls__start");
var questionEl = document.querySelector("#question");
var answerAEl = document.querySelector("#a");
var answerBEl = document.querySelector("#b");
var answerCEl = document.querySelector("#c");
var answerDEl = document.querySelector("#d");
var alertEl = document.querySelector(".alert");
var scoreScreenEl = document.querySelector("#scores-screen");
var submitEl = document.getElementById("submit");
var initialEl = document.querySelector("#initials");
var scoreEl = document.querySelector("#scoreEl");



var correct = 0;
var incorrect = 0;
var timer = null;
var timeLeft = 30;
var score = 0;
var currentQuestionIndex = 0;

var questionList = [
    {
        question: "Commonly used datatypes DO NOT include _______.",
            a: "Booleans",
            b: "Strings",
            c: "Alerts",
            d: "Numbers",
            correctAnswer: "c",
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
            a: "Quotes",
            b: "Parenthesis",
            c: "Curly Brackets",
            d: "Square Brackets",
            correctAnswer: "c",
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
            correctAnswer: "a",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis",
            correctAnswer: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            a: "JavaScript",
            b: "Terminal/Bash",
            c: "for loops",
            d: "console.log",
            correctAnswer: "d",
    }
];


//constant
var kDuration = 30;
var kStorageCorrectAnswer = "correct answers";
var kStorageIncorrectAnswer = "incorrect answers";

//event: page load
function init() {
    console.log('Game Loading...');

}

//event: start button
function startQuiz(ev) {
    console.log(currentQuestionIndex);
    console.log("Quiz started!");
    timer = setInterval(handleTimerTick, 1000);
    score = 0;
    startButton.setAttribute("class", "hide");
    quizContainer.removeAttribute("class");
    showQuestion();
}
startButton.addEventListener("click", startQuiz);

function showQuestion () {
    questionEl.textContent = questionList[currentQuestionIndex].question;
    answerAEl.textContent = questionList[currentQuestionIndex].a;
    answerBEl.textContent = questionList[currentQuestionIndex].b;
    answerCEl.textContent = questionList[currentQuestionIndex].c;
    answerDEl.textContent = questionList[currentQuestionIndex].d;
    choiceEl.addEventListener("click", checkAnswer);
}
function checkAnswer(event) {
    console.log(event.target);
    if (event.target.getAttribute("id") == questionList[currentQuestionIndex].correctAnswer) {
        alertEl.textContent = "correct";
        score++;
    } else {
        alertEl.textContent = "incorrect";
    }
    alertEl.setAttribute("class", "alert");
    setTimeout(function() {
        alertEl.setAttribute("class", "alert hide");
    }, 1000);
    currentQuestionIndex++;
    if (timeLeft <= "0" || currentQuestionIndex === questionList.length) {
       quizEnd ();
       console.log("game over!");
    } else {
        showQuestion();
    }
}



//event: timer tick
function handleTimerTick(ev) {
    timeLeft--;
    console.log("timer ticked!", timeLeft);

    timerEl.textContent = timeLeft;
}



//event: game ends
function quizEnd() {
    clearInterval(timer);

    scoreScreenEl.removeAttribute("class");
    scoreEl.textContent = score;
    quizContainer.setAttribute("class", "hide");

}
    
function saveScore() {
    console.log('testing');
    var initials = initialEl.value.trim();
    if ( initials !== '') {
        console.log("testing 2");
        var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
        //creating a score object for local storage
        var newScore = {
            score: score,
            initials: initials,
        };
        highScores.push(newScore);
        window.localStorage.setItem("highScores", JSON.stringify(highScores));

        //take us to high scores page

        window.location.href="highscore.html";
    }
}
submitEl.onclick = saveScore;

//refactoring - functions we reuse outside of event handlers





init();

