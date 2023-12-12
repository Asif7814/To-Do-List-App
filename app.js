// const listItem = document.createElement("li");
// listItem.setAttribute('class', 'task');
// listItem.target.appendChild(listItem);
// console.log("Task was created.");

const text = document.getElementById("add-task-text");
const submitBtn = document.getElementById("add-task-button");
const taskContainer = document.getElementById("task-container");

function addNewTask() {
    if (text.value == "") {
        window.alert("Enter in a task!");
    } else { 
        const newTask = document.createElement("li");
        newTask.setAttribute('class', 'task');
        taskContainer.appendChild(newTask);

        const newCheckBox = document.createElement("input");
        newCheckBox.setAttribute('type', 'checkbox');
        newCheckBox.setAttribute('class', 'task-checkbox');
        newCheckBox.setAttribute('id', `task-checkbox${1}`);
        newTask.appendChild(newCheckBox);
        
        const newLabel = document.createElement("label");
        newLabel.setAttribute('for', `task-checkbox${1}`);
        newLabel.setAttribute('class', 'task-text');
        newLabel.innerText = text.value;
        newLabel.style.textDecoration = "none";
        newTask.appendChild(newLabel);

        const newDeleteBtn = document.createElement("button");
        newDeleteBtn.setAttribute('type', 'button');
        newDeleteBtn.setAttribute('class', 'task-delete');
        newDeleteBtn.innerText = "X";
        newTask.appendChild(newDeleteBtn);

        text.value = ""; // clear text value from input

        newCheckBox.addEventListener('click', () => { // this is a shortcut to function() {} with some changes - dependent on situation, cannot always be used 
            newLabel.style.textDecoration = "line-through";
        });

        newLabel.style.textDecoration = "none";

        newDeleteBtn.addEventListener('click', () => {
            taskContainer.removeChild(newTask);
        });
    }
}

text.addEventListener('change', addNewTask); // this allows users to press enter to add new task
submitBtn.addEventListener('click', addNewTask);

// text.addEventListener('input', addNewTask); - accidental but can be used for live searching