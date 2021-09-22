import './style.css';
import checkboxStorage from './checkboxStorage.js';

const toDoList = [
  {
    description: 'take a walk',
    completed: true,
    index: 1,
  },
  {
    description: 'prepare lunch',
    completed: false,
    index: 2,
  },
  {
    description: 'take a shower',
    completed: true,
    index: 3,
  },
];

const listContainer = document.getElementById('todo_list');

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
};

showtasks();
checkboxStorage();
