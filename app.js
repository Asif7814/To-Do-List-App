// class Task { 
//     constructor(userText) {    
//         this.userText = userText;
//     }

//     createTask() {
//         const listItem = document.createElement("li");
//         listItem.setAttribute('class', 'task');

//         document.getElementsByClassName("task-container").appendChild(listItem);
//         console.log("Task was created.");
//     }

    // createCheckBox() { 
    //     const checkBox = document.createElement("input");
    //     checkBox.setAttribute('type', 'checkbox');
    //     checkBox.setAttribute('class', 'task-checkbox');

    //     // document.getElementsByClassName("task").append(checkBox);
    //     console.log("Checkbox was created.");
    // }

    // addUserText() { 
    //     const label = document.createElement("label");
    //     label.innerText = this.userText;
    //     label.setAttribute('for', 'task-checkbox'); // for id of task > checkbox
    //     label.setAttribute('class', 'task-text');

    //     // document.getElementsByClassName("task").append(label);
    //     console.log("User Text was added.");
    // }

    // createDeleteBtn() {
    //     const deleteBtn = document.createElement("button");
    //     deleteBtn.setAttribute('type', 'button');
    //     deleteBtn.setAttribute('class', 'task-delete');

    //     // document.getElementsByClassName("task").append(deleteBtn);
    //     console.log("Delete Button was created.");
    // }

    // appendTask() { 
    //     this.createTask();
    //     // const checkBox = this.createCheckBox();
    //     // const addUserText = this.addUserText();
    //     // const deleteBtn = this.createDeleteBtn();
    // }
// }

// let task1 = new Task("testing");

// task1.createTask();

// function addNewTask() {
//     let task = new Task("testing");
//     task.appendTask();
// }

// Check from task add
// const addTask = document.getElementById("user-add-task");

// addTask.addEventListener('change', addNewTask);

const listItem = document.createElement("li");
listItem.setAttribute('class', 'task');
document.getElementsByClassName("task-container").appendChild(listItem);
console.log("Task was created.");