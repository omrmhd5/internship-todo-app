
        document.getElementById('add-task').addEventListener('click', function() {
            const taskInput = document.getElementById('new-task');
            const task = taskInput.value.trim();
            if (task) {
                addTask(task);
                taskInput.value = ''; // Clear the input field
            }
        });

        function addTask(task) {
            const taskList = document.getElementById('task-list');
            const listItem = document.createElement('li');
            listItem.className = 'task-item';

            const taskText = document.createElement('span');
            taskText.textContent = task;

            const completeButton = document.createElement('button');
            completeButton.className = 'complete-task';
            completeButton.innerHTML = '<i class="fas fa-check"></i>';
            completeButton.addEventListener('click', function() {
                taskText.style.textDecoration = 'line-through';
            });

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-task';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(taskText);
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
        }
    
const model = {
  todos: [
    {
      id: 1,
      title: "task 1",
      completed: false,
      created_at: "",
      updated_at: "",
    },
    {
      id: 2,
      title: "task 2",
      completed: false,
      created_at: "",
      updated_at: "",
    },
    {
      id: 39,
      title: "task 3",
      completed: false,
      created_at: "",
      updated_at: "",
    },
  ],
  addTodo: function (todo) {
    this.todos.push(todo);
    view.renderTodo(todo.title);
  },
  getTodos: function () {
    return this.todos;
  },
};

const view = {
  init: function () {
    const todos = model.getTodos();
    todos.forEach((todo) => this.renderTodo(todo.title));
  },
  renderTodo: function (title) {
    const todoElem = `<li><p>${title}</p>
                           <button class="circle check">
                           <i class="fas fa-check-circle"></i>
                           </button>

                           <button class="circle delete">
                           <i class="fas fa-trash"></i>
                           </button></li>`;
    const todoListElem = document.getElementById("todosList");

    todoListElem.innerHTML += todoElem;
    return;
  },
};

const controller = {
  init: function () {
    this.handleAddTodo();
  },
  handleAddTodo: function () {
    const formElem = document.getElementById("myForm");
    formElem.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputElemVal = document.getElementById("in").value;
      model.addTodo({
        id: model.getTodos()[model.getTodos().length - 1].id + 1,
        title: inputElemVal,
        completed: false,
        created_at: "",
        updated_at: "",
      });
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  controller.init();
  view.init();
});
