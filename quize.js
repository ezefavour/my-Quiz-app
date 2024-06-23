'use strict'
let questions = [
    {
        question: 'what is the full meaning of opec',
        answers: [
            { text: 'Organization of the Petroleum Exporting Countries', correct: true},
            { text: 'Organization of the Petroleum Extracting Countries', correct: false},
            { text: 'Organization of the People Exporting Countries', correct: false},
            { text: 'Organization of the Petroleum Exporting community', correct: false},
            { text: 'Origins of the Petroleum Exporting Countries', correct: false},
        ]
    },
    {
        question: 'who is the founder of javascript',
        answers: [
            { text: 'Brendan amos', correct: false},
            { text: 'Brendan dvaid', correct: false},
            { text: 'john Eich', correct: false},
            { text: 'mark storm', correct: false},
            { text: 'Brendan Eich', correct: true},
        ]
    },
    {
        question: 'what is the full meaning of ecowas',
        answers: [
            { text: 'Economic communcation of West African States', correct: false},
            { text: 'Economic Community of Weast African States', correct: false},
            { text: 'Economics Community of West African States', correct: false},
            { text: 'Economic Community of West African States', correct: true},
            { text: 'Economic Community of West African soul', correct: false},
        ]
    },
    {
        question: 'who discover river niger',
        answers: [
            { text: 'dungo Park', correct: false},
            { text: 'Mnugo Park', correct: false},
            { text: 'Mungo Parker', correct: false},
            { text: 'Mango Park', correct: false},
            { text: 'Mungo Park', correct: true},
        ]
    },
    {
        question: 'nigeria obtain her independence in what year',
        answers: [
            { text: 'October 1 1960', correct: true},
            { text: 'October 2 1960', correct: false},
            { text: 'October 21 1960', correct: false},
            { text: 'October 1 1961', correct: false},
            { text: 'may 1 1960', correct: false},
        ],
    },
];

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-button")
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    ShowQuestion();

}

function ShowQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
       button.addEventListener("click", selectAnswer)
       
    });
}
function   resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart"
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
//validateing process coming soon