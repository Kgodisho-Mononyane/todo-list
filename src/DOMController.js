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
    addProjectBox();
  });
})();

function addProjectBox() {
  const projectBox = document.querySelector("#project-dialog");
  projectBox.showModal();
}
