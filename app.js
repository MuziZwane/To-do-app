// Assuming you have a task list with <li> elements inside a <ul> element
const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-button');
const todoList = document.getElementById('todo-list');


// add a task
const addTask = () => {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const task = document.createElement('li');
        todoList.appendChild(task);
        todoInput.value = '';
    }
}


// create a new task elements
const createTaskElement = (taskText) => {
    const task = document.createElement('li');
    task.className = "todo-item";
    
    // create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    // create a span for the task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteTask);

    // append the elements to the task
    task.appendChild(checkbox);
    task.appendChild(taskTextSpan);
    task.appendChild(deleteButton);

    return task;
}
// remove a task
const deleteTask = (event) => {
    const task = event.target.parentNode;
    todoList.removeChild(task);

}
// cross out a task
const crossOutTask = (event) => {
    const task = event.target.parentNode;
    task.classList.toggle('completed');
}

// event listener for add task button
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
// event listener for toggle class
todoList.addEventListener('change', crossOutTask);

// example of tasks
const tasks = ['Buy groceries', 'Do laundry', 'Clean the house'];

// create task elements for each task
tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    todoList.appendChild(taskElement);
});