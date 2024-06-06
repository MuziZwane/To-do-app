const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-button');
const todoList = document.getElementById('todo-list');

// Function to create a new task element
const createTaskElement = (taskText) => {
    const task = document.createElement('li');
    task.className = "todo-item";

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    // Create a span for the task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteTask);

    // Append the elements to the task
    task.appendChild(checkbox);
    task.appendChild(taskTextSpan);
    task.appendChild(deleteButton);

    return task;
}

// Function to add a task
const addTask = () => {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const task = createTaskElement(taskText);
        todoList.appendChild(task);
        todoInput.value = '';
    }
}

// Function to delete a task
const deleteTask = (event) => {
    const task = event.target.parentNode;
    todoList.removeChild(task);
}

// Function to cross out a task
const crossOutTask = (event) => {
    const task = event.target.parentNode;
    task.classList.toggle('completed');
}

// Event listener for add task button
addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Event listener for toggle class
todoList.addEventListener('change', crossOutTask);

// Example of tasks
const tasks = ['Buy groceries', 'Do laundry', 'Clean the house'];

// Create task elements for each task
tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    todoList.appendChild(taskElement);
});