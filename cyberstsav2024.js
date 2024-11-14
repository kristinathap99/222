// Questions array  
const questions = [  
  {  
      question: "Question goes here",  
      answers: [  
          { text: "Answer 1", correct: false },  
          { text: "Answer 2", correct: true },  
          { text: "Answer 3", correct: false },  
          { text: "Answer 4", correct: false }  
      ]  
  },  
  {  
      question: "Next question goes here",  
      answers: [  
          { text: "Answer 1", correct: true },  
          { text: "Answer 2", correct: false },  
          { text: "Answer 3", correct: false },  
          { text: "Answer 4", correct: false }  
      ]  
  },  
  // Add more questions as needed  
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
