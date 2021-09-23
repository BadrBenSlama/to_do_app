export default class CreateTask {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  /* add() {
      let toDoList = [];
      if (this.previousData) {
        toDoList = this.previousData;
      }
      const idGenerator = Math.floor(Math.random() * 100);
      toDoList.push(new BooksAndAuthor(title.value, author.value, idGenerator));
      localStorage.setItem('storedBooks', JSON.stringify(toDoList));
    }

    delete(number) {
      document.getElementById(`${number}`).remove();
      const arrOfBooks = this.previousData;
      arrOfBooks.splice(arrOfBooks.findIndex((item) => item.idOfBook === number), 1);
      localStorage.setItem('storedBooks', JSON.stringify(arrOfBooks));
    } */
}