//link to the DOM
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question");
var choiceEl = document.querySelector(".choice");
var answerEl = document.querySelector(".answer");
var resultEl = document.querySelector(".result");
var startButton = document.querySelector(".controls__start");
var submitButton = document.querySelector(".controls__submit");
var restartButton = document.querySelector(".controls__restart");
var clearButton = document.querySelector(".controls__clear");

var correct = 0;
var incorrect = 0;
var timer = null;
var timeLeft = 0;

//constant
var kDuration = 30;

//event: page load
function init() {
    console.log('Game Loading...');
}

//event: start button
function startQuiz(ev) {
    console.log("Quiz started!");
}
startButton.addEventListener("click", startQuiz);

//event: timer tick
function handleTimerTick(ev) {
    console.log("timer ticked!");
}

//event: select a choice
function handleSelectedChoice(ev) {
    console.log("you selected answer");
}
questionEl.addEventListener("click", handleSelectedChoice);

//event: submit initals
function submitInitials(ev) {
    console.log("you submitted your initials!");
}
submitButton.addEventListener("click", submitInitials);

//event: go back
function handleRestart(ev) {
    console.log("you restarted the game!");
}

restartButton.addEventListener("click", handleRestart);

//event: clear high score
function handleClearScore(ev) {
    console.log("you cleared all scores!");
}

clearButton.addEventListener("click", handleClearScore);

//event: game ends



//refactoring - functions we reuse outside of event handlers

init();

let quizData = [
    {
        question: "Commonly used datatypes DO NOT include _______.",
            a: "Booleans",
            b: "Strings",
            c: "Alerts",
            d: "Numbers",
            correct: "c",
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
            a: "Quotes",
            b: "Parenthesis",
            c: "Curly Brackets",
            d: "Square Brackets",
            correct: "c",
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
            correct: "a",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis",
            correct: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            a: "JavaScript",
            b: "Terminal/Bash",
            c: "for loops",
            d: "console.log",
            correct: "d",
    }
];
