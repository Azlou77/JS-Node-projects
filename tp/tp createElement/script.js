// const tree = {
//     tagName: 'div',
//     classList: ['columns', 'is-half'],
//     text: 'Hello World!',
//     attributes: {
//         "data-test-id": 'myElement'
//     }
    

// }


// function createElement() {
   
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     div.classList.add('column', 'is-half');
//     div.textContent = 'Hello World!';
//     div.setAttribute('data-test-id','myElement');
//     div.appendChild(p);
//     for (let div of tree.p) {
//         const chilDiv = createElement(div);
//         p.appendChild(chilDiv);
//     }
// }

// Import stylesheets
import './style.css';

const tree = {
  tagName: 'div',
  classList: ['columns', 'is-half'],
  text: 'Hello World!',
  attributes: {
    'data-test-id': 'myElement',
  },
  children: [
    {
      tagName: 'p',
      text: 'bonjour',
      children: [
        {
          tagName: 'br',
        },
        {
          tagName: 'strong',
          text: ' hello',
        },
      ],
    },
  ],
};

const createElement = ({ tagName, ...rest }) => {
  const element = document.createElement(tagName);

  if ('classList' in rest) {
    element.classList.add(...rest.classList);
  }

  if ('text' in rest) {
    element.textContent = rest.text;
  }

  if ('attributes' in rest) {
    for (let [key, value] of Object.entries(rest.attributes)) {
      element.setAttribute(key, value);
    }
  }

  if ('children' in rest) {
    for (let e of createBulkElement(rest.children)) element.appendChild(e);
  }

  return element;
};

const createBulkElement = (elements) => {
  const result = [];
  for (let element of elements) {
    result.push(createElement(element));
  }
  return result;
};

const root = createElement(tree);

document.getElementById('app').appendChild(root);


// function  createBulkElements () {
//     const div = document.createElement('div');
//     div.classList.add('column', 'is-half');
//     div.textContent = 'Hello World!';
//     div.setAttribute('data-test-id','myElement');
//     div.appendChild(div);

// }


