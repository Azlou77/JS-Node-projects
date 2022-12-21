class TodoList {
    constructor(rootElement) {
      this.rootElement = rootElement;
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(new TodoItem(item));
      this.render();
    }
  
    render() {
      for (let item of this.items) {
        this.rootElement.appendChild(item.htmlElement);
      }
    }
  }
  
  class TodoItem {
    constructor({ text, completed } = {}) {
      this.text = text;
      this.completed = completed || false;
      this.id = crypto.randomUUID();
      this.htmlElement = document.createElement('li');
      this.htmlElement.addEventListener('click', this.onToggle);
      this.render();
    }
  
    onToggle = () => {
      this.completed = !this.completed;
      this.render();
    };
  
    render() {
      this.htmlElement.textContent = this.text;
      this.htmlElement.style.color = this.completed ? 'green' : 'black';
    }
  }
  
  const appDiv = document.getElementById('todo-app');
  const todoList = new TodoList(appDiv);
  todoList.addItem({ text: 'make a todo app', completed: false });
  
  const form = document.querySelector('form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    todoList.addItem({ text: input.value, completed: false });
  });
  