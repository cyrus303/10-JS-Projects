const addBtn = document.getElementById('addNote');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener('click', () => {
  addNewNote();
});

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
  </div>
  <div class="main hidden"></div>
  <textarea > </textarea>
  </div>
  `;
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');

  //   const note = note.querySelector('.notes');

  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked.parse(text);

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', () => {
    note.remove();
    console.log('clicked delete button');
    updateLS();
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked.parse(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];
  notesText.forEach((note) => {
    notes.push(note.value);
  });
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));
}
