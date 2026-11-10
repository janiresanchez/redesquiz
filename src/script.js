/*
  ==================================================
  ZONA EDITABLE: AQUÍ PUEDES CAMBIAR TUS PREGUNTAS
  ==================================================
  - En cada pregunta, la opción correcta está marcada con isCorrect: true
  - El juego mezcla las respuestas automáticamente en cada pregunta
*/
const quizQuestions = [
  {
    question: "Una gran planta fotovoltaica conectada a la red de alta tensión en Extremadura produce electricidad que acaba llegando a tu casa en Madrid. ¿Qué recorrido hace?",
    options: [
      { text: "Primero va por la red de transporte y después por la de distribución", isCorrect: true },
      { text: "Primero va por la red de distribución y después por la de transporte", isCorrect: false },
      { text: "Va solo por la red de transporte", isCorrect: false }
    ],
    explanation: "La red de transporte, gestionada por Red Eléctrica, lleva la electricidad en alta tensión a largas distancias. En las subestaciones se reduce la tensión y la red de distribución la reparte hasta cada punto de consumo. La energía que compartes con tu vecina en un autoconsumo colectivo, en cambio, suele moverse solo por la red de distribución."
  },
  {
    question: "Según cuentan las vecinas de la colonia Rosa Luxemburgo, su autoconsumo colectivo tardó más de un año en funcionar. ¿En qué paso se atascó exactamente?",
    options: [
      { text: "En la distribuidora, que tenía que gestionar el reparto de la energía y comunicarlo a las comercializadoras", isCorrect: true },
      { text: "En la licencia del ayuntamiento para instalar los paneles", isCorrect: false },
      { text: "En la compra de los paneles, por falta de material", isCorrect: false }
    ],
    explanation: "Un autoconsumo colectivo necesita varios trámites, como la licencia municipal o el registro autonómico. Pero el reparto de la energía entre las vecinas depende de la distribuidora y ahí llegaron las pegas con solicitud de documentación varias veces y largas esperas. El 95 % de los puntos de suministro está en manos de cuatro grupos que también venden electricidad, así que el autoconsumo compite con su propio negocio."
  },
  {
    question: "Si sumamos toda la potencia eléctrica que tenemos contratada en España y la comparamos con la electricidad que consumimos de verdad, ¿qué porcentaje de esa capacidad reservada usamos de media?",
    options: [
      { text: "Menos del 16 %", isCorrect: true },
      { text: "Alrededor del 50 %", isCorrect: false },
      { text: "Más del 80 %", isCorrect: false }
    ],
    explanation: "En los últimos cinco años, el factor de utilización medio del consumo eléctrico nacional ha estado por debajo del 16 %. Contratamos mucha más potencia de la que usamos, y esa potencia reserva hueco en la red. Este es uno de los motivos por los que la saturación de los puntos de conexión ronda el 94 %, aunque por los cables circule mucha menos electricidad. Es una saturación contractual, no física."
  },
  {
    question: "Entre septiembre de 2025 y marzo de 2026, la capacidad disponible para conectar nueva demanda…",
    options: [
      { text: "Se redujo un 36 %", isCorrect: true },
      { text: "Creció un 10 %", isCorrect: false },
      { text: "Se mantuvo estable", isCorrect: false }
    ],
    explanation: "Cada vez hay menos hueco para conectar bombas de calor, puntos de recarga o industria electrificada. La red se convierte así en un freno para la electrificación."
  },
  {
    question: "¿Qué son las conexiones flexibles?",
    options: [
      { text: "Acuerdos para conectar nueva demanda limitando su acceso en momentos puntuales, como los picos", isCorrect: true },
      { text: "Cables más largos para llegar a zonas rurales", isCorrect: false },
      { text: "Contratos para cambiar de comercializadora sin penalización", isCorrect: false }
    ],
    explanation: "Permiten conectar a más personas y proyectos sin construir nueva infraestructura, aprovechando mejor la que ya existe. Francia, Dinamarca, Lituania o Países Bajos ya las aplican."
  },
  {
    question: "Dos proyectos piden conexión en el mismo punto de la red. El A llegó primero, pero aún no tiene permisos ni financiación. El B llegó después y está listo para construir. Con el criterio clásico de “primero en llegar, primero en ser atendido”, ¿quién se conecta?",
    options: [
      { text: "El A", isCorrect: true },
      { text: "El B", isCorrect: false },
      { text: "Ninguno de los dos", isCorrect: false }
    ],
    explanation: "Este criterio es una de las causas de la saturación actual. Por eso la Unión Europea recomienda pasar a “primero en estar listo, primero en ser atendido”, para priorizar los proyectos maduros y frenar la especulación."
  },
  {
    question: "En julio de 2026, ¿qué parte de la generación renovable no se pudo integrar en la red?",
    options: [
      { text: "Más de un 9,5 %", isCorrect: true },
      { text: "Un 1 %", isCorrect: false },
      { text: "Un 30 %", isCorrect: false }
    ],
    explanation: "Es energía limpia que se desperdicia mientras seguimos dependiendo de los combustibles fósiles. No sobran renovables: falta electrificación, almacenamiento y una red preparada para aprovecharlas."
  },
  {
    question: "Para cumplir los objetivos climáticos, ¿cuánto tiene que crecer la demanda eléctrica en España entre 2025 y 2030, según el plan nacional de energía y clima?",
    options: [
      { text: "Casi un 40 %", isCorrect: true },
      { text: "Un 5 %", isCorrect: false },
      { text: "Esta medida no se contempla dentro del plan", isCorrect: false }
    ],
    explanation: "El plan prevé pasar de 256 TWh a 353 TWh, porque la movilidad, la climatización y la industria tienen que dejar los combustibles fósiles y electrificarse. Toda esa nueva demanda tiene que conectarse a una red que hoy ya está saturada."
  }
];

// Referencias a elementos del DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const questionTextEl = document.getElementById("question-text");
const answersContainerEl = document.getElementById("answers-container");
const feedbackEl = document.getElementById("feedback");
const explanationBoxEl = document.getElementById("explanation-box");
const explanationEl = document.getElementById("explanation");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");
const resultMessageEl = document.getElementById("result-message");

const progressFillEl = document.querySelector(".progress-fill");

// Estado del juego
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;
let displayedOptions = [];

totalQuestionsEl.textContent = quizQuestions.length;

function showScreen(screenToShow) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  screenToShow.classList.add("active");
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  hasAnswered = false;
  scoreEl.textContent = score;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  explanationEl.textContent = "";
  explanationBoxEl.classList.remove("visible");
  nextBtn.disabled = true;
}

function shuffleOptions(options) {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}

function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  hasAnswered = false;
  nextBtn.disabled = true;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  explanationEl.textContent = "";
  explanationBoxEl.classList.remove("visible");

  currentQuestionEl.textContent = currentQuestionIndex + 1;
  progressFillEl.style.width = `${((currentQuestionIndex) / quizQuestions.length) * 100}%`;
  questionTextEl.textContent = currentQuestion.question;
  answersContainerEl.innerHTML = "";
  displayedOptions = shuffleOptions(currentQuestion.options);

  // Cambiar el texto del botón si es la última pregunta
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Finalizar quiz";
  } else {
    nextBtn.textContent = "Siguiente pregunta";
  }

  displayedOptions.forEach((option, optionIndex) => {
    const answerButton = document.createElement("button");
    answerButton.className = "answer-btn";
    answerButton.type = "button";
    answerButton.textContent = option.text;
    answerButton.addEventListener("click", () => handleAnswer(optionIndex));
    answersContainerEl.appendChild(answerButton);
  });
}

function handleAnswer(selectedOptionIndex) {
  if (hasAnswered) return;
  hasAnswered = true;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const answerButtons = answersContainerEl.querySelectorAll(".answer-btn");
  const isCorrect = displayedOptions[selectedOptionIndex].isCorrect;
  const correctOptionIndex = displayedOptions.findIndex((option) => option.isCorrect);

  answerButtons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctOptionIndex) {
      button.classList.add("correct");
    } else if (index === selectedOptionIndex && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score += 1;
    scoreEl.textContent = score;
    feedbackEl.textContent = "¡Muy bien! Respuesta correcta.";
    feedbackEl.classList.add("correct");
  } else {
    feedbackEl.textContent = "Ups... no es correcta. ¡La siguiente te saldrá genial!";
    feedbackEl.classList.add("incorrect");
  }

  explanationEl.textContent = currentQuestion.explanation;
  explanationBoxEl.classList.add("visible");
  
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Finalizar quiz";
  } else {
    nextBtn.textContent = "Siguiente pregunta";
  }

  nextBtn.disabled = false;
}

function showFinalResult() {
  resultMessageEl.classList.remove("score-good", "score-bad");
  finalScoreEl.classList.remove("score-good", "score-bad");

  if (score >= 6) {
    resultMessageEl.textContent = "¡Excelente trabajo! Has dominado el quiz.";
    finalScoreEl.textContent = `${score} / ${quizQuestions.length} 👍`;
    resultMessageEl.classList.add("score-good");
    finalScoreEl.classList.add("score-good");
    createConfetti();
  } else if (score >= 4) {
    resultMessageEl.textContent = "¡Enhorabuena! Has aprobado pero puedes mejorar mucho.";
    finalScoreEl.textContent = `${score} / ${quizQuestions.length} 📚✏️`;
    resultMessageEl.classList.add("score-good");
    finalScoreEl.classList.add("score-good");
    createConfetti();
  } else {
    resultMessageEl.textContent = "Necesitas seguir practicando. ¡Tú puedes!";
    finalScoreEl.textContent = `${score} / ${quizQuestions.length} 👎`;
    resultMessageEl.classList.add("score-bad");
    finalScoreEl.classList.add("score-bad");
  }

  showScreen(resultScreen);
}

function createConfetti() {
  const confettiCount = 150;
  const colors = ['#4898c8', '#98c8e8', '#f8d838', '#e84858', '#78c898', '#d8d858'];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    const delay = Math.random() * 2;
    const duration = Math.random() * 3 + 2;
    const drift = Math.random() * 40 - 20;
    confetti.style.setProperty('--drift', `${drift}px`);
    confetti.style.animation = `fall ${duration}s ease forwards ${delay}s`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);

    // Remove confetti after animation ends
    const lifeTime = (delay + duration + 0.5) * 1000;
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, lifeTime);
  }
}

function goToNextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showFinalResult();
  }
}

startBtn.addEventListener("click", () => {
  startScreen.classList.add("fade-out");
  setTimeout(() => {
    resetGame();
    showScreen(quizScreen);
    renderQuestion();
  }, 300);
});

nextBtn.addEventListener("click", goToNextQuestion);

restartBtn.addEventListener("click", () => {
  resetGame();
  showScreen(startScreen);
});

