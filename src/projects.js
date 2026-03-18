import { addToDo } from "./toDo.js";

export let projectsArray = [];
class Project {
  constructor(name) {
    this.name = name;
    this.array = [];
  }

  clearArray() {
    this.array = [];
  }

  deleteProject() {
    //function that deletes the current object
    //this.array = []
    //this.name = []
    //projectsArray.splice()
  }
}

function createProject(name) {
  let project = new Project(name);
  projectsArray.push({ ...project });
  //displayProject();
}

createProject("personal");
createProject("work");
createProject("fun");

console.log(projectsArray);
