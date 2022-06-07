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

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
  currentQuestion++;
}
