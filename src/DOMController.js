//IMPORTS
import { addToDo } from "./toDo.js";
import { projectArray, createProject, Project } from "./projects.js";

//INIT
function init() {
  allBtn();
}

init();

//TO DO EVENT LISTENERS
export const addTask = (function () {
  const addBtn = document.querySelector("#add-btn");

  addBtn.addEventListener("click", () => {
    console.log("Add button clicked");
    addDialogBox();
  });
})();

(function addToDoDOM() {
  document.addEventListener("submit", (event) => {
    const addTaskForm = event.target.closest("#add-form");
    const dialogBox = event.target.closest("#add-dialog");
    const toDoTitle = document.querySelector("#title-input"); //event.target.closest("#title-input");
    const toDoDescription = document.querySelector("#description-input");
    const toDoDueDate = "26 June"; //document.querySelector("due-input");
    const toDoProject = "personal"; //document.querySelector("#project-input");
    const toDoPriority = document.querySelector("#priority-options");

    if (addTaskForm) {
      event.preventDefault();
      displayToDo(toDoTitle.value, toDoDueDate.value, toDoPriority.value);
      addToDo(
        toDoTitle.value,
        toDoDescription.value,
        toDoDueDate,
        toDoProject,
        toDoPriority.value,
      );
      dialogBox.close();
      console.log("form submitted");
      console.log(projectArray);
    }
  });
})();

(function openToDoDisplay() {
  document.addEventListener("click", (event) => {
    const toDoContainer = event.target.closest(".todo-container");
    //const display = event.target.closest("#display-dialog")

    if (toDoContainer) {
      //display.showModal();
      console.log("container clicked")
    }
  })
  
})();

//TO DO CREATE ELEMENTS
function addDialogBox() {
  const leftContainer = document.querySelector("#left-container");

  const addBox = document.createElement("dialog");
  addBox.setAttribute("id", "add-dialog");
  addBox.setAttribute("closedby", "any");
  leftContainer.appendChild(addBox);
  addBox.showModal();

  const addForm = document.createElement("form");
  addForm.setAttribute("action", "");
  addForm.setAttribute("method", "post");
  addForm.setAttribute("id", "add-form");
  addBox.appendChild(addForm);

  const addHeader = document.createElement("h2");
  addHeader.setAttribute("id", "add-header");
  addHeader.textContent = "ADD NEW TASKS";
  addForm.appendChild(addHeader);

  const formElement1 = document.createElement("div");
  formElement1.setAttribute("class", "form-element");
  addForm.appendChild(formElement1);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("class", "form-label");
  titleLabel.setAttribute("for", "title-input");
  titleLabel.textContent = "Title: ";
  formElement1.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("class", "form-input");
  titleInput.setAttribute("id", "title-input");
  formElement1.appendChild(titleInput);

  const formElement2 = document.createElement("div");
  formElement2.setAttribute("class", "form-element");
  addForm.appendChild(formElement2);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("class", "form-label");
  descriptionLabel.setAttribute("for", "description-input");
  descriptionLabel.textContent = "Description: ";
  formElement2.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("class", "form-input");
  descriptionInput.setAttribute("id", "description-input");
  formElement2.appendChild(descriptionInput);

  const formElement3 = document.createElement("div");
  formElement3.setAttribute("class", "form-element");
  addForm.appendChild(formElement3);

  const dueLabel = document.createElement("label");
  dueLabel.setAttribute("class", "form-label");
  dueLabel.setAttribute("for", "due-input");
  dueLabel.textContent = "Due: ";
  formElement3.appendChild(dueLabel);

  const dueInput = document.createElement("input");
  dueInput.setAttribute("type", "date");
  dueInput.setAttribute("class", "form-input");
  dueInput.setAttribute("id", "due-input");
  formElement3.appendChild(dueInput);

  const formElement4 = document.createElement("div");
  formElement4.setAttribute("class", "form-element");
  addForm.appendChild(formElement4);

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("class", "form-label");
  projectLabel.setAttribute("for", "project-input");
  projectLabel.textContent = "Project: ";
  formElement4.appendChild(projectLabel);

  const projectInput = document.createElement("select");
  projectInput.setAttribute("name", "project-list");
  projectInput.setAttribute("id", "project-input");
  projectInput.setAttribute("class", "form-input");
  formElement4.appendChild(projectInput);

  const choose = document.createElement("option");
  choose.setAttribute("value", "choose");
  choose.textContent = "--Choose a Project--";
  projectInput.appendChild(choose);

  projectArray.forEach((project) => {
    const option = document.createElement("option");

    option.setAttribute("value", project.name);
    option.textContent = `${project.name.charAt(0).toUpperCase() + project.name.slice(1)}`; //project.name;
    projectInput.appendChild(option);
  });

  const formElement5 = document.createElement("div");
  formElement5.setAttribute("class", "form-element");
  addForm.appendChild(formElement5);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("class", "form-label");
  priorityLabel.setAttribute("for", "project-options");
  priorityLabel.textContent = "Priority: ";
  formElement5.appendChild(priorityLabel);

  const priorityOptions = document.createElement("select");
  priorityOptions.setAttribute("name", "priority");
  priorityOptions.setAttribute("id", "priority-options");
  priorityOptions.setAttribute("class", "form-input");
  formElement5.appendChild(priorityOptions);

  const test = document.createElement("option");
  test.setAttribute("value", "test");
  test.textContent = "--Choose The Priority--";
  priorityOptions.appendChild(test);

  const low = document.createElement("option");
  low.setAttribute("value", "low");
  low.textContent = "Low";
  priorityOptions.appendChild(low);

  const medium = document.createElement("option");
  medium.setAttribute("value", "medium");
  medium.textContent = "Medium";
  priorityOptions.appendChild(medium);

  const high = document.createElement("option");
  high.setAttribute("value", "high");
  high.textContent = "High";
  priorityOptions.appendChild(high);

  const addSubmitBtn = document.createElement("button");
  addSubmitBtn.setAttribute("id", "add-submit-btn");
  addSubmitBtn.setAttribute("type", "submit");
  addSubmitBtn.textContent = "SUBMIT";
  addForm.appendChild(addSubmitBtn);
}

function displayToDo(name, dueDate, priority) {
  const tasksContainer = document.querySelector("#tasks-container");
  //tasksContainer.innerHTML = "";

  //projectArray[projectArray.findIndex(obj => obj.name == "personal")].array(toDos => {

  const toDoContainer = document.createElement("div");
  toDoContainer.setAttribute("class", "todo-container");
  tasksContainer.appendChild(toDoContainer);

  const toDoHeader = document.createElement("h2");
  toDoHeader.setAttribute("class", "todo-header");
  toDoHeader.textContent = `${name}`;
  toDoContainer.appendChild(toDoHeader);

  const toDoDueDate = document.createElement("p");
  toDoDueDate.setAttribute("class", "todo-dueDate");
  toDoDueDate.textContent = `${dueDate}`;
  toDoContainer.appendChild(toDoDueDate);

  const toDoPriority = document.createElement("div");
  toDoPriority.setAttribute("class", "todo-priority");
  toDoPriority.textContent = `Priority: ${priority}`;
  toDoContainer.appendChild(toDoPriority);

  const toDoCompleteBtn = document.createElement("button");
  toDoCompleteBtn.setAttribute("class", "todo-complete-btn");
  toDoCompleteBtn.textContent = "Complete";
  toDoContainer.appendChild(toDoCompleteBtn);
}

//TO DO FUNCTIONS

//PROJECT EVENT LISTENERS
export const projectBtn = (function () {
  const projectBtn = document.querySelector("#project-btn");

  projectBtn.addEventListener("click", () => {
    console.log("Project button clicked");
    projectDialogBox();
  });
})();

(function addProjectDOM() {
  document.addEventListener("submit", (event) => {
    const projectForm = event.target.closest("#project-form");
    const projectDialog = event.target.closest("#project-dialog");

    if (projectForm) {
      event.preventDefault();
      let projectNameInput = projectForm.querySelector("#project-name-input");

      createProject(projectNameInput.value);
      addProjectBtn();
      projectDialog.close();
    }
    console.log(projectArray);
  });
})();

(function projectBtnEvents() {
  const container = document.querySelector("#project-container");
  const containerHeader = document.querySelector("#tasks-header");

  container.addEventListener("click", (event) => {
    if (event.target.id == "default-project") {
      projectArray.forEach((project) => {
        //load all the to dos
        //displayToDo(name, dueDate, priority)
      });
      alert("all clicked");
    } else {
      //append all the to-dos from specific project to container
      // projectArray.forEach(project.array => {
      //   console.table(project.array[0])
      // })
      //display project specific to dos
      //projectArray.forEach(toDo => )
      //event.target.classlist.toggle("selected")
      console.log(`${event.target.textContent} clicked`);
    }
    containerHeader.textContent = `${event.target.innerText.toUpperCase()} PROJECTS`;
  });
})();

//PROJECT CREATE ELEMENTS
function allBtn() {
  const projectContainer = document.querySelector("#project-container");

  const allBtn = document.createElement("div");
  allBtn.setAttribute("class", "project");
  allBtn.setAttribute("id", "default-project");
  allBtn.textContent = "All";
  projectContainer.appendChild(allBtn);
}

function addProjectBtn() {
  const projectContainer = document.querySelector("#project-container");
  projectContainer.innerHTML = "";
  allBtn();

  projectArray.forEach((project) => {
    const projectBtn = document.createElement("div");
    projectBtn.setAttribute("class", "project");
    projectBtn.setAttribute("id", `${project.name}-project`);
    projectBtn.textContent = `${project.name.charAt(0).toUpperCase() + project.name.slice(1)}`;
    //add delete button
    projectContainer.appendChild(projectBtn);

    /*
      DELETE FUNCTIONALITY
      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("class", "project-delete")
      deleteBtn.textContent = "X";
      projectBtn.appendChild(deleteBtn)*/
  });
}

function projectDialogBox() {
  const leftContainer = document.querySelector("#left-container");

  const projectBox = document.createElement("dialog");
  projectBox.setAttribute("id", "project-dialog");
  projectBox.setAttribute("closedby", "any"); //check if this works
  leftContainer.appendChild(projectBox);
  projectBox.showModal();

  const projectForm = document.createElement("form");
  projectForm.setAttribute("action", "");
  projectForm.setAttribute("method", "post");
  projectForm.setAttribute("id", "project-form");
  projectBox.appendChild(projectForm);

  const projectHeader = document.createElement("h2");
  projectHeader.setAttribute("id", "project-header");
  projectHeader.textContent = "CREATE PROJECT";
  projectForm.appendChild(projectHeader);

  const projectNameFormElement = document.createElement("div");
  projectNameFormElement.setAttribute("class", "form-element");
  projectNameFormElement.setAttribute("id", "project-name-form-element");
  projectForm.appendChild(projectNameFormElement);

  const projectNameLabel = document.createElement("label");
  projectNameLabel.setAttribute("for", "project-name-input");
  projectNameLabel.setAttribute("class", "form-label");
  projectNameLabel.setAttribute("id", "project-name-label");
  projectNameLabel.textContent = "Project Name: ";
  projectNameFormElement.appendChild(projectNameLabel);

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("class", "form-input");
  projectNameInput.setAttribute("name", "project-name");
  projectNameInput.setAttribute("id", "project-name-input");
  projectNameFormElement.appendChild(projectNameInput);

  const projectSubmitBtn = document.createElement("button");
  projectSubmitBtn.setAttribute("id", "project-submit-btn");
  projectSubmitBtn.setAttribute("type", "submit");
  projectSubmitBtn.textContent = "SUBMIT";
  projectForm.appendChild(projectSubmitBtn);
}

//PROJECT FUNCTIONS

//TEST CODE
displayToDo("number 1", "today", "low");
displayToDo("wake up", "tomorrow", "medium");
console.table(
  projectArray[projectArray.findIndex((obj) => obj.name == "personal")].array
)

createProject("personal");
createProject("work");
createProject("school");
addToDo("title1", "description1", "today", "personal", "low");
addToDo("title2", "description2", "today", "personal", "medium");
addToDo("title3", "description3", "today", "work", "high");
addToDo("title4", "description4", "today", "work", "low");
addToDo("title5", "description5", "today", "school", "medium");
addToDo("title6", "description6", "today", "school", "high");

console.log(projectArray)
console.log('test')