// Questions array  
const questions = [  
  {  
      question: "What is the capital city of China ?",  
      answers: [  
          { text: "Kathmandu", correct: false },  
          { text: "Beijing", correct: true },  
          { text: "Hong Kong", correct: false },  
          { text: "New Delhi", correct: false }  
      ]  
  },  
  {  
      question: "What is te captial city of Canada ?",  
      answers: [  
          { text: "Ottawa", correct: true },  
          { text: "Toronoto", correct: false },  
          { text: "Montreal", correct: false },  
          { text: "Sydney", correct: false }  
      ]  
  },
  {  
        question: "What is the longest river in the world?",  
        answers: [  
            { text: "Amazon", correct:false  },  
            { text: "Nile", correct: true },  
            { text: "Congo", correct: false },  
            { text: "Amur", correct: false }  
        ]  
    },
    {  
        question: "Who discovered gravity?",  
        answers: [  
            { text: "Edmond Halley", correct: false },  
            { text: "David Hume", correct: false },  
            { text: "Isaac Newton", correct: true },  
            { text: "Albert Einstein", correct: false }  
        ]  
    },
    {  
        question: "What is the tallest mountain in the world?",  
        answers: [  
            { text: "Mt.Everest", correct: true },  
            { text: "K2", correct: false },  
            { text: "Lhotse", correct: false },  
            { text: "Mont blanc", correct: false }  
        ]  
    },
   
];  

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
