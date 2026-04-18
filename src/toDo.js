//IMPORT && EXPORTS
import { projectArray } from "./projects.js";
//IMPORT date-fns

//TO DO CLASS
class ToDo {
  constructor(title, description, dueDate, project, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority;
    this.completed = false;
    this.id = crypto.randomUUID();
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

//TO DO FUNCTIONS
export function addToDo(title, description, dueDate, project, priority) {
  let toDo = new ToDo(title, description, dueDate, project, priority);
  projectArray[
    projectArray.findIndex((toDo) => toDo.name === project)
  ].array.push({ ...toDo });
}

//TEST CODE
// addToDo("title1", "description1", "today", "personal", "low");
// addToDo("title2", "description2", "today", "personal", "medium");
// addToDo("title3", "description3", "today", "work", "high");
// addToDo("title4", "description4", "today", "work", "low");
// addToDo("title5", "description5", "today", "school", "medium");
// addToDo("title6", "description6", "today", "school", "high");
