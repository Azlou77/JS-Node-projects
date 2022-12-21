//import styles 
import './style.css';

// const root =  document.querySelector('#app');
// const div = document.createElement('div');
// div.textContent = 'Hello World';
// root.appendChild(div);

//get the form and input
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const form = $('#form');
// const inputs = $('#input');


const root =  document.querySelector('#app');
//Create title
const title = document.createElement('h1');
title.textContent = 'Bonjour';
root.appendChild(title);

//Add event on name and firstname
const input = document.querySelector('name');

const firstname = document.getElementById('firstname');
const name = document.getElementById('name');

name.onkeyup = fullName;
name.addEventListener('keyup', fullName);
function fullName(e) {
    console.log(e.target.value);
    fullName.textContent= name.value + firstname.value;
  }

//Create form
const inputs = document.querySelectorAll('#input');

form.addEventListener('submit', (evt) => {
    //prevent the default behavior
    evt.preventDefault();
    let fields = document.querySelectorAll('input[required]');
    console.log('fields ');

});
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
});