const questions = [
    {
      question: "¿Que artista usaba la tecnica del temple?",
      options: ["Sandro Botticelli", "Jacques Louis David"],
      answer: "Sandro Botticelli"
    },
    {
      question: "¿Que sub genero trata sobre figuras divinas y explica cosas sobrenaturales?",
      options: ["Alegorico", "Religioso", "Mitologico"],
      answer: "Mitologico"
    },
    {
      question: "¿Que artista nacio en Florencia?",
      options: ["Sandro Botticelli", "Jacques Louis David"],
      answer: "Sandro Botticelli"
    },
    {
        question: "¿En que siglo el genero historico perdio poder?",
        options: ["XVIII", "X", "XVX"],
        answer: "XVIII"
    },
    {
        question: "El genero historico es...",
        options: ["Significa lo mismo que genero pictorico", "Subdivision de los generos pictoricos", "No se relacionan"],
        answer: "Subdivision de los generos pictoricos"
    }
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  const correctSound = document.getElementById('correct-sound');
  const incorrectSound = document.getElementById('incorrect-sound');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => {
        checkAnswer(option);
      });
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      score++;
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = `Respondiste: ${score} de ${questions.length}`;
  }
  
  function playCorrectSound() {
    correctSound.currentTime = 0; // Reinicia el audio para que se pueda reproducir varias veces seguidas
    correctSound.play();
  }
  
  function playIncorrectSound() {
    incorrectSound.currentTime = 0; // Reinicia el audio para que se pueda reproducir varias veces seguidas
    incorrectSound.play();
  }
  
  showQuestion();
  submitButton.addEventListener('click', () => {
    showResult();
  });
  