
const questions = [  
    {  
        question: "What is the capital of france?",  
        answers: [  
            { text: "Rome", correct: false },  
            { text: "Paris", correct: true },  
            { text: "Sydney", correct: false },  
            { text: "London", correct: false }  
        ]  
    },  
    {  
        question: "What is the largest desert in the world?",  
        answers: [  
            { text: "Sahara ", correct: true },  
            { text: "Antartica ", correct: false },  
            { text: "Gobi ", correct: false },  
            { text: " Thar", correct: false }  
        ]  

    },
 {
    question: "What is the largest land locked country in the world?",  
        answers: [  
            { text: "Nepal", correct: false },  
            { text: "Ethiopoa ", correct: false },  
            { text: "Kazakhstan ", correct: true },  
            { text: " Mongolia", correct: false }    
    // Add more questions as needefsd  
  ]
}
]
;  
  
  // DOM elements  
  const questionElement = document.getElementById('question');  
  const answerButtons = document.getElementById('answer-buttons');  
  const nextButton = document.getElementById('next-btn');  
  
  let currentQuestionIndex = 0;  
  let score = 0;  
  
  // Start quiz function  
  function startQuiz() {  
    currentQuestionIndex = 0;  
    score = 0;  
    nextButton.style.display = 'none';  
    showQuestion(questions[currentQuestionIndex]);  
  }  
  
  // Show question function  
  function showQuestion(question) {  
    questionElement.innerText = question.question;  
    answerButtons.innerHTML = ''; // Clear previous answers  
    question.answers.forEach(answer => {  
        const button = document.createElement('button');  
        button.innerText = answer.text;  
        button.classList.add('btn');  
        button.dataset.correct = answer.correct;  
        button.addEventListener('click', selectAnswer);  
        answerButtons.appendChild(button);  
    });  
  }  
  
  // Select answer function  
  function selectAnswer(e) {  
    const selectedButton = e.target;  
    const correct = selectedButton.dataset.correct === 'true';  
    
    if (correct) {  
        score++;  
        selectedButton.classList.add('correct');  
    } else {  
        selectedButton.classList.add('incorrect');  
        // Highlight correct answer  
        Array.from(answerButtons.children).forEach(button => {  
            if (button.dataset.correct === 'true') {  
                button.classList.add('correct');  
            }  
        });  
    }  
  
    // Disable all buttons after selection  
    Array.from(answerButtons.children).forEach(button => {  
        button.disabled = true;  
    });  
  
    nextButton.style.display = 'block'; // Show next button  
  }  
  
  // Next button function  
  nextButton.addEventListener('click', () => {  
    currentQuestionIndex++;  
    if (currentQuestionIndex < questions.length) {  
        showQuestion(questions[currentQuestionIndex]);  
    } else {  
        showScore();  
    }  
  });  
  
  // Show score function  
  function showScore() {  
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;  
    nextButton.innerText = 'Play Again';  
    nextButton.style.display = 'block';  
    nextButton.addEventListener('click', startQuiz);  
  }  
  
  // Start the quiz  
  startQuiz();