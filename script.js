const quizatv = document.getElementById('quiz');
const BotaoEntrar = document.getElementById('revisao');
const resulatv = document.getElementById('results');

const perguntas = [
  {
    question: "Qual formato de imagem é o ideal para utilizar como fundo transparente de um site?",
    alternativa: {
      a: "jpeg",
      b: "img",
      c: "png \n"
    },
    correct: "c"
  },
  {
    question: "Qual sequencia abaixo serve para adicionar uma imagem no html? ",
    alternativa: {
      a: "CTRL + ALT + P",
      b: "IMG + ENTER",
      c: "IMG + ALT \n"
    },
    correct: "b"
  },
  {
    question: "para que serve a tag &lthr&gt? ",
    alternativa: {
      a: "Adicionar uma linha",
      b: "Quebrar uma linha",
      c: "Duplicar uma linha \n"
    },
    correct: "a"
  },
  {
    question: "Selecione a ordem corretar em relação a frase abaixo: <br> Uma linguagem de marcação de hiper texto com folhas de estilo em cascata. " ,
    alternativa: {
      a: "JS e HTML",
      b: "HTML e CSS",
      c: "CSS e JS \n"
    },
    correct: "b"
  },
  {
    question: "Como acessar o VScode através do CMD?",
    alternativa: {
      a: "Digitar no prompt de comando : Code.html", 
      b: "Digitar no prompt de comando : Code .",
      c: "Digitar no CMD : Code_ \n"
    },
    correct: "b"
  }
];

function correcaoQuiz() {
  const output = [];

  perguntas.forEach((currentQuestion, questionNumber) => {
    const alternativa = [];

    for (const letter in currentQuestion.alternativa) {
      alternativa.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}: ${currentQuestion.alternativa[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="alternativa">${alternativa.join('')}</div>`
    );
  });

  quizatv.innerHTML = output.join('');
}

function botaoCorrigir() {
  const answerContainers = quizatv.querySelectorAll('.alternativa');
  let numCorrect = 0;

  perguntas.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correct) {
      numCorrect++;
      answerContainers[questionNumber].style.color = "lightgreen";
    } else {
      answerContainers[questionNumber].style.color = "peru";
    }
  });

  resulatv.innerHTML = 'pontuação: <br> ${numCorrect} pontos ao total!';
  
  resulatv.innerHTML = `Sua pontuação: <br> ${numCorrect}/5 pontos! <br>Seu Objetivo: ${perguntas.length}/5`;
}

correcaoQuiz ();
