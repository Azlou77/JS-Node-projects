const tree = {
    tagName: 'div',
    classList: ['columns', 'is-half'],
    text: 'Hello World!',
    attributes: {
        "data-test-id": 'myElement'
    }
    

}


function createElement() {
   
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('column', 'is-half');
    div.textContent = 'Hello World!';
    div.setAttribute('data-test-id','myElement');
    div.appendChild(p);
    for (let div of tree.p) {
        const chilDiv = createElement(div);
        p.appendChild(chilDiv);
    }
}

function  createBulkElements () {
    const div = document.createElement('div');
    div.classList.add('column', 'is-half');
    div.textContent = 'Hello World!';
    div.setAttribute('data-test-id','myElement');
    div.appendChild(div);

}


