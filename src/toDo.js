import { projectArray } from "./projects.js";
//IMPORT date-fns

class ToDo {
  constructor(title, description, dueDate, project, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.completed = false;
  }

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
    //move the toDo into the new project
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }

  updateCompletion() {
    if (this.completed == false) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }

  deleteToDo() {
    //remove toDo from projectArray
    //delete toDo
  }
}

export function addToDo(title, description, dueDate, project, priority) {
  let toDo = new ToDo(title, description, dueDate, project, priority);
  projectArray[
    projectArray.findIndex((toDo) => toDo.name === project)
  ].array.push({ ...toDo });
}
