import "./projects.js";

class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  //create new class
  //read class
  //update class
  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateDescription(newDescription) {
    this.description = newDescription;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }

  completeToDo() {
    this.completed = true;
  }
  //delete class
}

function addToDo(title, description, dueDate, priority) {
  let toDo = new ToDo(title, description, dueDate, priority);
  defaultProject.array.push(toDo);
  //push to project
}

// const wakeUp = new ToDo("Wake up", "Wake up at 5AM", "Due Date", "low");
// wakeUp.updateTitle("Wake Up at 5AM")
// console.log(wakeUp)
