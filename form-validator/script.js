const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('errorElement');

form.addEventListener('submit', (e) => {
  let messages = [];

  if (name.value === '' || name.value == null) {
    messages.push('Name is required');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if (password.value.length >= 15) {
    messages.push('Password must be less than 15 characters');
  }

  if (password.value === 'password') {
    messages.push('password cannot be password');
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
});
