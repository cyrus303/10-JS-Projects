const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

// var storedTodos = JSON.parse(localStorage.getItem('todos'));

// if (storedTodos) {
//   storedTodos.forEach((storedTodo) => {
//     addTodo(storedTodo);
//   });
// }
form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(storedTodo) {
  //grabbing input value
  let todoText = input.value;

  //   if (storedTodo) {
  //     //reseting if input from local storage is found
  //     todoText = input.value;
  //   }
  if (todoText) {
    const todoEl = document.createElement('li');
    // if (storedTodo.completed) {
    //   todoEl.classList.add('completed');
    // }

    todoEl.innerText = todoText;

    // click to strike through
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      //   updateLS();
    });

    // right click to delete
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();

      //   updateLS();
    });

    todos.appendChild(todoEl);
    input.value = '';

    // updateLS();
  }
}

// function updateLS() {
//   const todosEl = document.querySelectorAll('li');
//   const todos = [];

//   todosEl.forEach((todoEl) => {
//     todos.push({
//       text: todoEl.innerText,
//       completed: todoEl.classList.contains('completed'),
//     });
//   });
//   console.log(todos);
//   localStorage.setItem('todos', JSON.stringify(todos));
// }
