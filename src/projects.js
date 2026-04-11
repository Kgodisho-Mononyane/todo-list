import { addToDo } from "./toDo.js";
export let projectArray = [];

class Project {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.array = [];
  }

  deleteProject() {
    this.array = [];
    this.name = "";
    //Remove Project from projectArray
  }
}

export function createProject(name) {
  let project = new Project(`${name}`);
  projectArray.push({ ...project });
}

createProject("personal");
createProject("work");
// createProject("schoolwork")