// Import config.js file
import {key, table, base} from './config.js';

const url = `https://api.airtable.com/v0/${base}/${table}/`;


const form = document.querySelector('form');
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

fetch(url , {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));