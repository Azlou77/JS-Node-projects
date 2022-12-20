class TodoItem extends TodoList{
    constructor() {
        this.text = text;
        this.completed = false;

    }
    onToggle() {
        this.completed = !this.completed;
    }
    render() {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const td1 = document.createElement('td');
        td1.textContent = this.text;
        tr.appendChild(td1);
        const td2 = document.createElement('td');
        td2.textContent = this.completed;
        tr.appendChild(td2);
    }
}

//Create table
 const table = document.createElement('table');
 root.appendChild(table);
 //Create table header
 const thead = document.createElement('thead');
 table.appendChild(thead);
 //Create table header row
 const tr = document.createElement('tr');
 thead.appendChild(tr);
 //Create table header cells
 const th1 = document.createElement('th');
 th1.textContent = 'Title';
 tr.appendChild(th1);
 const th2 = document.createElement('th');
 th2.textContent = 'Done';
 tr.appendChild(th2);
 //Create table body
 const tbody = document.createElement('tbody');
 table.appendChild(tbody);
 //Create table body rows
 const tr1 = document.createElement('tr');
 tbody.appendChild(tr1);
 //Create table body cells
 const td1 = document.createElement('td');
