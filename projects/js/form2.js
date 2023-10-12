// Import config.js file
import {key, table, base} from './config.js';


document.getElementById('addBtn').addEventListener('click', function(event) {
    event.preventDefault();
    getValue();
  });
  
function getValue() {
 

  // Select element by id to get value
  let name = document.querySelector('#name').value;
  let description = document.querySelector('#description').value;
  let category = document.querySelector('#category').value;
  let link = document.querySelector('#link').value;

  // Create object to store data
  let data = {
        "fields": {
          "Name": name,
          "Description": description,
          "Category": category, 
          "Link": link
        }
      };

const url = `https://api.airtable.com/v0/${base}/${table}/`;

fetch(url , {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json',
    
  },
    body: JSON.stringify(data),
 
})
.then((response) => {
    if (response.ok) {
        response.json().then((data) => {
            console.log(data);
                                       
          })
    } else {
        console.log('Erreur statut !=200');
    }
}).catch((error) => {
    console.log(`Erreur: ${error.message}`);
})
}
