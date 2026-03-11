//import {addToDo} from "./toDo.js";
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

let projectsArray = [];

function createProject(name) {
  let project = new Project(name);
  projectsArray.push(project);
  //displayProject();
}

createProject("personal");
createProject("Work");

projectsArray[0].updateName("test")
console.log(projectsArray)