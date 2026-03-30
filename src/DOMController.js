export const addTask = (function () {
  const addBtn = document.querySelector("#add-btn");

  addBtn.addEventListener("click", () => {
    console.log("Add button clicked");
    addDialogBox();
  });
})();

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

(function () {
  document.addEventListener("click", (event) => {
    const addSubmitBtn = event.target.closest("#add-submit-btn");

    if (addSubmitBtn) {
      event.preventDefault();
      console.log("Add submit button clicked");
    }
  });
})();

export const projectBtn = (function () {
  const projectBtn = document.querySelector("#project-btn");

  projectBtn.addEventListener("click", () => {
    console.log("Project button clicked");
    projectDialogBox();
  });
})();

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
  projectNameInput.setAttribute("id", "project-name-input");
  projectNameFormElement.appendChild(projectNameInput);

  const projectSubmitBtn = document.createElement("button");
  projectSubmitBtn.setAttribute("id", "project-submit-btn");
  projectSubmitBtn.setAttribute("type", "submit");
  projectSubmitBtn.textContent = "SUBMIT";
  projectForm.appendChild(projectSubmitBtn);
}

(function () {
  document.addEventListener("click", (event) => {
    const projectSubmitBtn = event.target.closest("#project-submit-btn");

    if (projectSubmitBtn) {
      event.preventDefault();
      console.log("Project submit button clicked");
    }
  });
})();


function displayToDo() {
  const tasksContainer = document.querySelector("#tasks-container");
  tasksContainer.innerHTML = "";
}


// async function createProject() {
//   const projectName = document.querySelector("#project-name-input")
//   const projectForm = document.querySelector("#project-form");

//   projectForm.addEventListener("submit", () => {
//     addProjectDOM(`${projectName.value}`)
//   })
// }


function addProjectDOM(name) {
  const projectContainer = document.querySelector("#project-container")

  const btn = document.createElement("button");
  btn.setAttribute("class", "project-btn");
  btn.textContent = `${name}`;
  projectContainer.appendChild(btn)
}

// addProjectDOM("Test")
// addProjectDOM("Personal")
