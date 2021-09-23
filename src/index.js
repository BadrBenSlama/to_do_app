/* eslint-disable no-const-assign */
import './style.css';
import savedStatus from './checkboxStorage.js';

let toDoList = [
  {
    description: 'take a walk',
    completed: false,
    index: 0,
  },
  {
    description: 'prepare lunch',
    completed: false,
    index: 1,
  },
  {
    description: 'take a shower',
    completed: false,
    index: 2,
  },
];

const previousData = JSON.parse(localStorage.getItem('storedTodos'));

if (!previousData) {
  localStorage.setItem('storedTodos', JSON.stringify(toDoList));
} else {
  toDoList = previousData;
}

/* const listContainer = document.getElementById('todo_list');

const showtasks = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const task = toDoList[i];
    const list = `<li class="task flex" id="${task.index}">
  <div>

    <input type="checkbox" class="checkbox" id="checkbox">
    <span>${task.description}</span>
  </div>
  <i class="fas fa-trash-alt"></i>
  </li>
  <div class="border_bottom"></div>`;
    listContainer.innerHTML += list;
  }
}; */

for (let i = 0; i < toDoList.length; i += 1) {
  const task = toDoList[i];
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.id = 'checkbox';
  checkbox.type = 'checkbox';
  li.classList.add('flex', 'task');
  li.id = toDoList[i].index;
  const div = document.createElement('div');
  div.appendChild(checkbox);
  const span = document.createElement('span');
  span.innerText = task.description;
  div.appendChild(span);
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('fas', 'fa-trash-alt');
  li.appendChild(div);
  li.appendChild(trashIcon);
  document.getElementById('todo_list').appendChild(li);
  const borderBottomDiv = document.createElement('div');
  borderBottomDiv.classList.add('border_bottom');
  document.getElementById('todo_list').appendChild(borderBottomDiv);
  if (task.completed === true) {
    checkbox.checked = true;
  }
}

for (let i = 0; i < toDoList.length; i += 1) {
  document.getElementById(`${i}`)
    .addEventListener('change', savedStatus.bind(null, i), false);
}
