import { projectsArray } from "./projects.js";
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

export function addToDo(title, description, dueDate, project, priority) {
  let toDo = new ToDo(title, description, dueDate, project, priority);
  projectsArray[
    projectsArray.findIndex((toDo) => toDo.name === project)
  ].array.push(toDo);
  //displayBook(); //link to DOMController
}

addToDo("title1", "description1", "25-10-2026", "personal", "low");
addToDo("title2", "description2", "12-06-2026", "personal", "low");
addToDo("title3", "description3", "01-03-2025", "work", "high");
addToDo("title4", "description4", "05-06-2026", "work", "medium");
