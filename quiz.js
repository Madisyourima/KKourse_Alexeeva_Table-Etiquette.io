// взаимодействие с квизом

// Открыть модальное окно
const openStartQuizBtn = document.getElementById("open-start_quiz_btn");
if (openStartQuizBtn) {
  openStartQuizBtn.addEventListener("click", () => {
    document.getElementById("my-quiz").classList.add("open");
  });
}

// Закрыть модальное окно
const closeMyQuizBtn = document.getElementById("close-my-quiz-btn");
if (closeMyQuizBtn) {
  closeMyQuizBtn.addEventListener("click", () => {
    document.getElementById("my-quiz").classList.remove("open");
  });
}

// Закрыть модальное окно при нажатии на Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-quiz").classList.remove("open");
  }
});


// Закрыть модальное окно при клике вне его
const quizBox = document.querySelector("#my-quiz .quiz__box");
const modal = document.getElementById("my-quiz");
if (quizBox && modal) {
  // Добавляем слушателя для закрытия модального окна по клику вне модального окна
document.addEventListener("click", (event) => {
  const isClickWithinModal = modal.contains(event.target) || quizBox.contains(event.target);
  if (!isClickWithinModal) {
    modal.classList.remove("open");
  }
});
}

// Закрыть модальное окно при клике вне его. 
document.getElementById("my-quiz").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});




// механизм квиза
const questions = [
  {
    question: "Как, с точки зрения европейского этикета, следует держать вилку и нож, находясь за столом?",
    choices: ["как вам удобно", "вилку- в правой руке", "вилку- в левой руке"],
    correct: 2
  },
  {
    question: "Как нужно передавать соль за столом?",
    choices: ["закрыв отверстия в солонке большим пальцем", "против часовой стрелки", "в одной подставке с перцем"],
    correct: 2
  },
  {
    question: "Можно ли в ресторане самому поднимать упавшую на пол салфетку или столовый прибор?",
    choices: ["нет, это должен сделать официант", "не только можно, но и нужно", "на ваше усмотрение"],
    correct: 0
  },
  {
    question: "Как правильно брать хлеб из хлебной тарелки за общим столом?",
    choices: ["рукой", "вилкой", "ножом"],
    correct: 0
  },
  {
    question: "В какой момент застолья следует открывать красное вино?",
    choices: ["за час до начала застолья", "в любой момент застолья", "перед подачей мясного блюда"],
    correct: 0
  },
  {
    question: "Как правильно есть хлеб за общим столом?",
    choices: ["отламывая по кусочку над тарелкой", "откусывая небольшими кусочками", "обмакивая его в содержимом тарелки"],
    correct: 0
  },
  {
    question: "Как следует класть готовые блюда себе на тарелку?",
    choices: ["специальными приборами", "своими приборами", "как вам удобно"],
    correct: 0
  },
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Верно!";
    correctAnswers++;
  } else {
    feedback.textContent = "Не верно!";
  }

  setTimeout(() => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p>Вы ответили верно на ${correctAnswers} из ${questions.length} вопросов по этикету.</p>`;
    }
  }, 1000);
  event.stopPropagation(); 
}
showQuestion();
