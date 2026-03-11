import { addToDo } from "./toDo.js";

export let projectsArray = [];
class Project {
  constructor(name) {
    this.name = name;
    this.array = [];
  }

  //create
  //read
  //update
  updateName(newName) {
    this.name = newName;
  }

  //delete
  clearArray() {
    this.array = [];
  }

  deleteProject() {
    //function that deletes the current object
  }
}

function createProject(name) {
  let project = new Project(name);
  projectsArray.push({ ...project });
  //displayProject();
}

createProject("personal");
createProject("Work");

console.log(projectsArray);
