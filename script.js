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

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz ()

function loadQuiz() {
    deselectAnswers ()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innertext = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}
function getSelected() {
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
        score++
        }
    currentQuiz++
    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML =
        `<h2>You answered ${score}/${quizData.length} quetions correctly</h2>

        <button onclick="location.reload()">Reload</button>
        `
    }
}
})