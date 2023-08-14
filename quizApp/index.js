const questions = [
  {
    question: "what is OS-main part ? ",
    answers: [
      { text: "kernel", correct: true },
      { text: "cpu", correct: false },
      { text: "screen", correct: false },
      { text: "camera", correct: false },
    ],
  },
  {
    question: "what is redux ? ",
    answers: [
      { text: "JS library", correct: false},
      { text: "JS tool", correct: true },
      { text: "Browser Api", correct: false },
      { text: "Browser function", correct: false },
    ],
  },
  {
    question: "who is the first person to land on moon ? ",
    answers: [
      { text: "Neil Armstrong", correct: true },
      { text: "neil", correct: false },
      { text: "yadav", correct: false },
      { text: "table", cprrect: false },
    ],
  },
  {
    question: "what is mans scientific name  ? ",
    answers: [
      { text: "human", correct: false },
      { text: "animal", correct: false },
      { text: "homo sapien", correct: true },
      { text: "camera", correct: false },
    ],
  },
];

let question= document.getElementById('question');
let answerbtns = document.getElementById("answers");
let nextbtn = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz() {
    currentQuestionIndex = 0; 
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestions();   
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + ".  " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    
})
}

function resetState() {
    nextbtn.style.display = "none";
    while (answerbtns.firstChild) {             // to remove all the previous answers, otherwise the new answers have been appended after the previous ones
        answerbtns.removeChild(answerbtns.firstChild);
  }
}
 
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbtn.style.display = "block";
  
}


function showScore() {
  resetState();
  question.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  }
  else {
    showScore();
  }

}



nextbtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else {
    startQuiz();
  }
})



startQuiz();