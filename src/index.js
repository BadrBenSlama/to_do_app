import './style.css';

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
    <input type="checkbox" class="box" id="list_box">
    <span>${task.description}</span>
  </div>
   <button type="submit"><i class="fas fa-ellipsis-v"></i></button>
  </li>
  <div class="border_bottom"></div>`;
    listContainer.innerHTML += list;
  }
};

window.onload = showtasks;