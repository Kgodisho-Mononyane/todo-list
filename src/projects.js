//IMPORTS AND EXPORTS
import { addToDo } from "./toDo.js";
export let projectArray = [];

//PROJECT CLASS
class Project {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.array = [];
  }

  deleteProject() {
    const obj = projectArray.findIndex((item) => item.id === this.id);
    if (obj) {
      projectArray.splice(obj, 1);
    }

    this.array = [];
    this.name = "";
    //Remove Project from projectArray
  }
}

//PROJECT FUNCTIONS
export function createProject(name) {
  let project = new Project(`${name}`);
  projectArray.push({ ...project });
}

//TEST CODE
// createProject("personal");
// createProject("work");
// createProject("school");
