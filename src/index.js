/* eslint-disable no-const-assign */
import './style.css';
import savedStatus from './checkboxStorage.js';
import CreateTask from './createtask.js';

/* let toDoList = [
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
]; */

let toDoList = [];

const previousData = JSON.parse(localStorage.getItem('storedTodos'));

if (!previousData) {
  localStorage.setItem('storedTodos', JSON.stringify(toDoList));
} else {
  toDoList = previousData;
}

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

document.getElementById('fa-sign-in-alt').addEventListener('click', () => {
  let i = toDoList.length;
  toDoList.push(new CreateTask(document.getElementById('input').value, false, i));
  i += 1;
  localStorage.setItem('storedTodos', JSON.stringify(toDoList));
});

document.getElementsByClassName('fa-trash-alt').addEventListener('click', () => {
  console.log('hey');
  document.getElementsByClassName('fa-trash-alt').parentElement.parentElement.remove();
  localStorage.setItem('storedTodos', JSON.stringify(toDoList));
});