import "./projects.js";

class ToDo {
  constructor(title, description, dueDate, project, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
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

  updateProject(newProject) {
    this.project = newProject;
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
  let toDo = new ToDo(title, description, dueDate, project, priority);
  //projectName.push(toDo)
  displayBook(); //link to DOMController
  //push to project
}

// const wakeUp = new ToDo("Wake up", "Wake up at 5AM", "Due Date", "low");
// wakeUp.updateTitle("Wake Up at 5AM")
// console.log(wakeUp)
