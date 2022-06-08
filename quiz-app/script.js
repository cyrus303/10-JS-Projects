const quizData = [
  {
    question: 'how old is sachin',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c',
  },
  {
    question: 'what is the most used programming language in 2019?',
    a: 'Java',
    b: 'C++',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What country has the highest life expectancy?',
    a: 'India',
    b: 'Ireland',
    c: 'United Kingdom',
    d: 'Hong Kong',
    correct: 'd',
  },
  {
    question: 'What is the most common surname in the United States? ',
    a: 'Wilson',
    b: 'Kelly',
    c: 'Smith',
    d: 'Harvey',
    correct: 'c',
  },
  {
    question: 'What artist has the most streams on Spotify?',
    a: 'Drake',
    b: 'Eminem',
    c: 'Michel Jackson',
    d: 'Post Mellon',
    correct: 'a',
  },
];

const quiz = document.getElementById('quiz');
const radioEle = document.getElementsByName('answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

uncheckAnswers();
loadQuiz();

function loadQuiz() {
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function selectedValue() {
  for (i = 0; i < radioEle.length; i++) {
    if (radioEle[i].checked) {
      return radioEle[i].id;
    }
  }
  return undefined;
}

function uncheckAnswers() {
  radioEle.forEach((answer) => {
    answer.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  //check to see the selected answer
  const ans = selectedValue();

  if (ans && ans === quizData[currentQuiz].correct) {
    score++;
  } else {
  }
  if (ans) {
    if (currentQuiz < quizData.length - 1) {
      currentQuiz++;
      uncheckAnswers();
      loadQuiz();
    } else {
      // TODO: show results once the quiz is completed

      quiz.innerHTML = `<h2>You answered ${score} questions correctly out of ${quizData.length} </h2>

      <button onclick='location.reload()'>Reload</button>`;
    }
  }
});
