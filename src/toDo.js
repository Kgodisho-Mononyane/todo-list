/*
IMPORT projectsArray from projects.js
IMPORT date-fns


CLASS ToDo
  CONSTRUCTOR title, description, dueDate, project, priority
    set this.title to title
    set this.description to description
    set this.dueDate to dueDate
    set this.project to project
    set this.priority to priority
    set this.completed to false

    FUNCTION updateTitle(newTitle)
      this.title to newTitle
    ENDFUNCTION

    FUNCTION updateDescription(newDescription)
      this.description to newDescription
    ENDFUNCTION

    FUNCTION UpdateDueDate(newDueDate)
      this.dueDate = newDueDate
    ENDFUNCTION

    FUNCTION updateProject(newProject)
      this.project = newProject
    ENDFUNCTION

    FUNCTION updatePriority(newPriority)
      this.priority = newPriority
    ENDFUNCTION

    FUNCTION updateToDo
    (this.completed === true)?false :true
      this.completed = true;
    ENDFUNCTION

    FUNCTION deleteToDo
      Delete toDo from projectArray
    ENDFUNCTION
ENDCLASS

EXPORT FUNCTION addToDo(title, description, dueDate, project, priority)
  SET ToDo to new ToDo(title, description, dueDate, project, priority)

  projectsArray[
     projectsArray.findIndex((toDo) => toDo.name === project)
   ].array.push({ ...toDo });
ENDFUNCTION
*/
