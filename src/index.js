import './style.css';

window.onload = () => {
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
  <i class="fas fa-trash-alt"></i>
  </li>
  <div class="border_bottom"></div>`;
      listContainer.innerHTML += list;
    }
  };

  showtasks();

  document.querySelectorAll('.box').forEach((item) => {
    console.log('hello');
    item.addEventListener('change', () => {
      if (item.checked) {
        console.log('Checkbox is checked..');
      } else {
        console.log('Checkbox is not checked..');
      }
    });
  });
};