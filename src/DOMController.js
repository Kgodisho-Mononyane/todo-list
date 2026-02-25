export const addTask = (function () {
  const addBtn = document.querySelector("#add-btn");

  addBtn.addEventListener("click", () => {
    console.log("Add button clicked");
    addDialogBox();
  });
})();

function addDialogBox() {
  const dialogBox = document.querySelector("#add-dialog");
  dialogBox.showModal();
}

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
  projectBox.setAttribute("closedby", "any") //check if this works
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
  projectNameLabel.textContent = "Project Name: "
  projectNameFormElement.appendChild(projectNameLabel);

  const projectNameInput = document.createElement("input");
  projectNameInput.setAttribute("type", "text");
  projectNameInput.setAttribute("class", "form-input");
  projectNameInput.setAttribute("id", "project-name-input");
  projectNameFormElement.appendChild(projectNameInput);

  const projectSubmitBtn = document.createElement("button")
  projectSubmitBtn.setAttribute("id", "project-submit-btn");
  projectSubmitBtn.setAttribute("type", "submit");
  projectSubmitBtn.textContent = "SUBMIT";
  projectForm.appendChild(projectSubmitBtn)

}
