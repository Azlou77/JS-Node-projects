class TodoList {
    constructor(items= []) {
        this.items = items;
    }
    
    addItem() {
        this.items.push('New todo');
        console.log(this.items);
    }
    render() {
        this.items.forEach(function(todo) {
            console.log(todo);
        });
    }
}


const root =  document.querySelector('#app');
//Create title
const title = document.createElement('h1');
title.textContent = 'Bonjour';
root.appendChild(title);
const TodoList = document.createElement('table');
