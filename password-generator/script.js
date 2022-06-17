const copyEl = document.getElementById('copy');
const pwEl = document.getElementById('pw');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWZYX';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;

  let password = '';
  if (len <= 15 && len >= 5) {
    if (upperEl.checked) {
      password += getUppercase();
    }

    if (lowerEl.checked) {
      password += getLowercase();
    }

    if (numberEl.checked) {
      password += getNumber();
    }

    if (symbolEl.checked) {
      password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
      const x = generateX();
      password += x;
      //   console.log(`password string is: ${password}`);
    }
    if (password) {
      pwEl.innerText = password;
    } else {
      pwEl.innerText = 'Please Select The Options';
    }
  } else {
    pwEl.innerText = 'Enter a valid length';
  }
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    // console.log('uppercase called');
    xs.push(getUppercase());
  }

  if (lowerEl.checked) {
    // console.log('lowercase called');
    xs.push(getLowercase());
  }

  if (numberEl.checked) {
    // console.log('number called');
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    // console.log('symbol called');
    xs.push(getSymbol());
  }
  //   console.log(xs);

  if (xs.length === 0) return '';
  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', () => {
  generatePassword();
});

copyEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});
