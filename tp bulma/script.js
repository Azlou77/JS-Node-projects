// const supportedClass = ['is-info', 'is-success', 'is-warning', 'is-danger'];

// const createBanner = ({ className = 'is-success', text = 'Lorem' } = {}) => {
//   if (!supportedClass.includes(className)) {
//     throw new Error(`
//       please provide a valid className
//       valid classes: ${supportedClass.join(', ')}  
//     `);
//   }
//   const column = document.createElement('div');
//   column.classList.add('column', 'is-half');

//   const article = document.createElement('article');
//   article.classList.add('message', className);

//   /* BEGIN header */
//   const header = document.createElement('div');
//   header.classList.add('message-header');

//   const headerParagraph = document.createElement('p');
//   headerParagraph.textContent = 'Success';
//   const headerButton = document.createElement('button');
//   headerButton.classList.add('delete');
//   headerButton.setAttribute('aria-label', 'delete');

//   header.appendChild(headerParagraph);
//   header.appendChild(headerButton);
//   /* END header */

//   /* BEGIN body */
//   const body = document.createElement('div');
//   body.classList.add('message-body');
//   body.innerHTML = text;
//   /* END body */

//   article.appendChild(header);
//   article.appendChild(body);

//   column.appendChild(article);

//   return column;
// };

// const banner = createBanner({ className: 'is-info' });
// const banner2 = createBanner({
//   className: 'is-warning',
//   text: 'Warning this is a <strong>warning text</strong>',
// });
// document.querySelector('.columns').appendChild(banner);
// document.querySelector('.columns').appendChild(banner2);

//import styles 
import './style.css';

// const root =  document.querySelector('#app');
// const div = document.createElement('div');
// div.textContent = 'Hello World';
// root.appendChild(div);

//get the form and input
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const form = $('#form');
const inputs = $('#input');

form.addEventListener('submit', (evt) => {
    //prevent the default behavior
    evt.preventDefault();
    console.log('submit');

});
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
});