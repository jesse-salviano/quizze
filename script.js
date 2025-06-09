const questionsByTopic = {
    aritmetica: [
      {
        question: "Quanto é 45 + 38?",
        options: ["83", "73", "93", "88"],
        answer: 0
      },
      {
        question: "Subtraia: 120 - 47",
        options: ["83", "73", "93", "63"],
        answer: 0
      },
      {
        question: "Multiplique: 7 × 6",
        options: ["42", "36", "48", "40"],
        answer: 0
      },
      {
        question: "Divida: 144 ÷ 12",
        options: ["11", "10", "12", "14"],
        answer: 2
      },
      {
        question: "Quanto é 15% de 200?",
        options: ["30", "25", "35", "40"],
        answer: 0
      },
      {
        question: "João tem R$150 e gasta R$45. Quanto sobra?",
        options: ["105", "115", "95", "100"],
        answer: 0
      },
      {
        question: "Qual é a média de 10, 20, 30 e 40?",
        options: ["25", "30", "20", "35"],
        answer: 0
      },
      {
        question: "Dobre o número 28",
        options: ["56", "48", "58", "60"],
        answer: 0
      },
      {
        question: "Metade de 86 é:",
        options: ["42", "43", "44", "41"],
        answer: 1
      },
      {
        question: "Quanto é 5²?",
        options: ["25", "10", "20", "15"],
        answer: 0
      }
    ],
  
    algebra: [
      {
        question: "Resolva: x + 5 = 12",
        options: ["6", "7", "8", "9"],
        answer: 1
      },
      {
        question: "Se 2x = 20, x é:",
        options: ["8", "10", "12", "14"],
        answer: 1
      },
      {
        question: "Resolva: x² = 49",
        options: ["6", "7", "8", "9"],
        answer: 1
      },
      {
        question: "Fator comum de 6x + 12:",
        options: ["6", "x", "3", "6(x + 2)"],
        answer: 3
      },
      {
        question: "Qual a raiz da equação x² - 9 = 0?",
        options: ["3", "±3", "9", "0"],
        answer: 1
      },
      {
        question: "x/3 = 5. x = ?",
        options: ["8", "12", "15", "18"],
        answer: 2
      },
      {
        question: "Expresse 3(x + 2):",
        options: ["3x + 2", "3x + 6", "x + 6", "3x + 3"],
        answer: 1
      },
      {
        question: "Se x = 2, quanto é 4x²?",
        options: ["16", "8", "4", "12"],
        answer: 0
      },
      {
        question: "Fatoração de x² + 2x + 1:",
        options: ["(x + 1)²", "(x + 2)(x - 1)", "(x + 1)(x - 1)", "(x + 2)²"],
        answer: 0
      },
      {
        question: "Resolva: 2x - 4 = 10",
        options: ["6", "7", "8", "9"],
        answer: 2
      }
    ],
  
    geometria: [
      {
        question: "Quantos lados tem um pentágono?",
        options: ["4", "5", "6", "7"],
        answer: 1
      },
      {
        question: "Área do quadrado com lado 4:",
        options: ["12", "8", "16", "10"],
        answer: 2
      },
      {
        question: "Área do triângulo com base 6 e altura 4:",
        options: ["12", "10", "14", "16"],
        answer: 0
      },
      {
        question: "Perímetro de um triângulo com lados 3, 4 e 5:",
        options: ["10", "12", "13", "14"],
        answer: 1
      },
      {
        question: "Área de um círculo com raio 2 (π=3):",
        options: ["12", "9", "6", "15"],
        answer: 1
      },
      {
        question: "Ângulo reto mede:",
        options: ["45°", "60°", "90°", "180°"],
        answer: 2
      },
      {
        question: "Um cubo tem quantas faces?",
        options: ["4", "6", "8", "10"],
        answer: 1
      },
      {
        question: "Área de um retângulo 5 × 3:",
        options: ["15", "8", "10", "12"],
        answer: 0
      },
      {
        question: "Triângulo com lados iguais é:",
        options: ["Escaleno", "Isósceles", "Equilátero", "Retângulo"],
        answer: 2
      },
      {
        question: "Volume do cubo com aresta 3:",
        options: ["27", "18", "36", "9"],
        answer: 0
      }
    ]
  };git 
  
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  
  function startQuiz(topic) {
    questions = questionsByTopic[topic];
    currentQuestion = 0;
    score = 0;
  
    document.getElementById("topic-select").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
  
    showQuestion();
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
  
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.classList.remove("selected");
    });
  
    updateProgress();
  }
  
  function selectOption(index) {
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach(btn => btn.classList.remove("selected"));
    buttons[index].classList.add("selected");
  
    // Salva a resposta selecionada na questão
    questions[currentQuestion].selected = index;
  }
  
  function nextQuestion() {
    const selected = questions[currentQuestion].selected;
    if (selected === undefined) {
      alert("Selecione uma opção antes de continuar.");
      return;
    }
  
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      // Redireciona para resultado com score
      window.location.href = `result.html?score=${score}&total=${questions.length}`;
    }
  }
  
  function updateProgress() {
    const percent = (currentQuestion / questions.length) * 100;
    document.getElementById("progress").style.width = percent + "%";
  }
  