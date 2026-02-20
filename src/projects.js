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