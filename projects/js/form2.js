// Import config.js file
import {key, table, base} from './config.js';

const url = `https://api.airtable.com/v0/${base}/${table}`;

document.querySelector('button').addEventListener('click', getValue);
function getValue() {

  // Select element by id to get value
  let name = document.querySelector('#name').value;
  let description = document.querySelector('#description').value;
  let category = document.querySelector('#category').value;
  let price = document.querySelector('#price').value;
  let link = document.querySelector('#link').value;

  // Create object to store data
  let data = {
        "fields": {
          "Name": name,
          "Description": description,
          "Category": category, 
          "Price": price,
          "Link": link
        }
      }
  }


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