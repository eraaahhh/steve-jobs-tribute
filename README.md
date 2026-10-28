const quotes = [
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs"
  },
  {
    text: "Think different.",
    author: "Steve Jobs"
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs"
  },
  {
    text: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs"
  }
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const prevQuoteBtn = document.getElementById("prevQuote");
const nextQuoteBtn = document.getElementById("nextQuote");

let quoteIndex = 0;

function updateQuote(direction) {
  if (direction === "next") {
    quoteIndex = (quoteIndex + 1) % quotes.length;
  } else {
    quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
  }

  quoteText.textContent = `“${quotes[quoteIndex].text}”`;
  quoteAuthor.textContent = `— ${quotes[quoteIndex].author}`;
}

nextQuoteBtn.addEventListener("click", () => updateQuote("next"));
prevQuoteBtn.addEventListener("click", () => updateQuote("prev"));

setInterval(() => updateQuote("next"), 7000);

const questions = [
  {
    question: "Which product launched the smartphone era?",
    options: ["iPhone", "iPod", "MacBook", "iPad"],
    answer: "iPhone"
  },
  {
    question: "What company did Steve Jobs co-found in 1976?",
    options: ["Microsoft", "Apple", "Google", "Pixar"],
    answer: "Apple"
  },
  {
    question: "Which famous slogan is associated with Steve Jobs?",
    options: ["Just do it", "Think different", "Go further", "The future is now"],
    answer: "Think different"
  },
  {
    question: "Which product was central to digital music portability?",
    options: ["iMac", "iPad", "iPod", "Apple Watch"],
    answer: "iPod"
  },
  {
    question: "Which company did Jobs help lead in animation before returning to Apple?",
    options: ["Sony", "Pixar", "Adobe", "Netflix"],
    answer: "Pixar"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const nextQuestionBtn = document.getElementById("nextQuestion");
const restartQuizBtn = document.getElementById("restartQuiz");

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionText.textContent = currentQuestion.question;
  answerList.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.textContent = option;

    button.addEventListener("click", () => handleAnswer(button, option, currentQuestion.answer));
    answerList.appendChild(button);
  });

  nextQuestionBtn.textContent = currentQuestionIndex === questions.length - 1 ? "See results" : "Next";
}

function handleAnswer(button, selectedOption, correctAnswer) {
  const allButtons = Array.from(answerList.children);
  allButtons.forEach((item) => {
    item.disabled = true;
    item.classList.add("disabled");

    if (item.textContent === correctAnswer) {
      item.classList.add("correct");
    }

    if (item.textContent === selectedOption && selectedOption !== correctAnswer) {
      item.classList.add("wrong");
    }
  });

  if (selectedOption === correctAnswer) {
    score += 1;
  }

  nextQuestionBtn.disabled = false;
}

function showResults() {
  questionNumber.textContent = "Quiz complete";
  questionText.textContent = `You scored ${score} out of ${questions.length}.`;
  answerList.innerHTML = `
    <p style="margin: 0; color: var(--muted); line-height: 1.7;">
      ${score === questions.length ? "Perfect! You really know Steve Jobs’ legacy." : score >= 3 ? "Great job! You have a solid understanding of his impact." : "Nice try! Review the creations and quotes above to sharpen your knowledge."}
    </p>
  `;

  nextQuestionBtn.classList.add("hidden");
  restartQuizBtn.classList.remove("hidden");
}

nextQuestionBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    const selected = document.querySelector(".answer-option.disabled");
    if (!selected) {
      alert("Please choose an answer before moving on.");
      return;
    }

    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    const selected = document.querySelector(".answer-option.disabled");
    if (!selected) {
      alert("Please choose an answer before viewing your score.");
      return;
    }

    showResults();
  }
});

restartQuizBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  nextQuestionBtn.classList.remove("hidden");
  restartQuizBtn.classList.add("hidden");
  renderQuestion();
});

renderQuestion();
