// Dom Elements

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContanier = document.getElementById("answer-contanier");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Who Is The Best Team In The World?",
    answers: [
      { text: "Barcelona", correct: true },
      { text: "Real Madrid", correct: false },
      { text: "PSG", correct: false },
      { text: "Man city", correct: false },
    ],
  },
  {
    question: "Who is Number One On Planet Earth?",
    answers: [
      { text: "Albert Einstin", correct: false },
      { text: "Osama Elzero", correct: false },
      { text: "Mo Alaa", correct: true },
      { text: "Magdi Yacoub", correct: false },
    ],
  },
  {
    question: "Who Is The Best Football player In History?",
    answers: [
      { text: "Messi", correct: true },
      { text: "Mardona", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Pele", correct: false },
    ],
  },
  {
    question:
      "Which keyword is used to declare a constant variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "What does 'DOM' stand for?",
    answers: [
      { text: "Data Object Model", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Digital Order Model", correct: false },
      { text: "Document Oriented Method", correct: false },
    ],
  },
  {
    question: "Which method is used to print something to the browser console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "log.console()", correct: false },
      { text: "document.write.console()", correct: false },
    ],
  },
  {
    question: "What is the result of typeof null in JavaScript?",
    answers: [
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: true },
      { text: "number", correct: false },
    ],
  },
  {
    question: "Which symbol is used for strict equality (value and type)?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "=", correct: false },
      { text: "!=", correct: false },
    ],
  },
  {
    question: "Which array method adds an element to the end of an array?",
    answers: [
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
      { text: "push()", correct: true },
    ],
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answers: [
      { text: "// comment", correct: true },
      { text: "<!-- comment -->", correct: false },
      { text: "# comment", correct: false },
      { text: "** comment **", correct: false },
    ],
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false },
    ],
  },
  {
    question: "What will be the output of: console.log(2 + '2')?",
    answers: [
      { text: "4", correct: false },
      { text: "22", correct: true },
      { text: "NaN", correct: false },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which method is used to select an element by its id?",
    answers: [
      { text: "document.querySelectorAll()", correct: false },
      { text: "document.getElementsByClassName()", correct: false },
      { text: "document.getElementById()", correct: true },
      { text: "document.getElement()", correct: false },
    ],
  },
  {
    question: "Which function is used to print output in Python?",
    answers: [
      { text: "echo()", correct: false },
      { text: "print()", correct: true },
      { text: "console.log()", correct: false },
      { text: "printf()", correct: false },
    ],
  },
  {
    question: "Which symbol is used for single-line comments in Python?",
    answers: [
      { text: "//", correct: false },
      { text: "/* */", correct: false },
      { text: "#", correct: true },
      { text: "--", correct: false },
    ],
  },
  {
    question: "What is the correct file extension for Python files?",
    answers: [
      { text: ".pt", correct: false },
      { text: ".pyt", correct: false },
      { text: ".python", correct: false },
      { text: ".py", correct: true },
    ],
  },
  {
    question: "Which data type is used to store True or False values?",
    answers: [
      { text: "bool", correct: true },
      { text: "int", correct: false },
      { text: "str", correct: false },
      { text: "float", correct: false },
    ],
  },
  {
    question: "Which of these is a mutable data type in Python?",
    answers: [
      { text: "tuple", correct: false },
      { text: "list", correct: true },
      { text: "str", correct: false },
      { text: "int", correct: false },
    ],
  },
  {
    question: "What is the output of: print(type([]))?",
    answers: [
      { text: "<class 'tuple'>", correct: false },
      { text: "<class 'dict'>", correct: false },
      { text: "<class 'list'>", correct: true },
      { text: "<class 'set'>", correct: false },
    ],
  },
  {
    question: "Which keyword is used to define a function in Python?",
    answers: [
      { text: "function", correct: false },
      { text: "def", correct: true },
      { text: "func", correct: false },
      { text: "define", correct: false },
    ],
  },
  {
    question: "What does len('Python') return?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "6", correct: true },
      { text: "Error", correct: false },
    ],
  },
  {
    question: "Which operator is used for floor division in Python?",
    answers: [
      { text: "/", correct: false },
      { text: "//", correct: true },
      { text: "%", correct: false },
      { text: "**", correct: false },
    ],
  },
  {
    question:
      "Which keyword is used to create a loop that runs over a sequence?",
    answers: [
      { text: "for", correct: true },
      { text: "loop", correct: false },
      { text: "repeat", correct: false },
      { text: "foreach", correct: false },
    ],
  },
  {
    question: "How do you get user input in Python?",
    answers: [
      { text: "scan()", correct: false },
      { text: "get()", correct: false },
      { text: "input()", correct: true },
      { text: "read()", correct: false },
    ],
  },
  {
    question: "Which of these is used to handle exceptions in Python?",
    answers: [
      { text: "try / except", correct: true },
      { text: "catch / throw", correct: false },
      { text: "error / handle", correct: false },
      { text: "check / fix", correct: false },
    ],
  },
];

// QUIZ STATE VARS

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  questionText.textContent = currentQuestion.question;

  // todo: explain this in a second
  answerContanier.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset?
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answerContanier.appendChild(button);
  });
  progressBar.style.width =
    (currentQuestionIndex / quizQuestions.length) * 100 + "%";
}

function selectAnswer() {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // todo: explain this in a second
  Array.from(answerContanier.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 500);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect You Are a Genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great Jop! You Know Your Stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Great effort! Keep Learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not Bad! Try Again To Improve!";
  } else {
    resultMessage.textContent = "Keep Studying! You Will Get Better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
