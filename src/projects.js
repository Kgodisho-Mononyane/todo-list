//IMPORT { addToDo } from "./toDo.js";
export let projectArray = [];

class Project {
  constructor(name) {
    this.name = name;
    this.array = [];
  }

  deleteProject() {
    this.array = [];
    this.name = "";
    //Remove Project from projectArray
  }

}

function createProject(name) {
  let project = new Project(`${name}`);
  projectArray.push({...project})
}