// Import config.js file
import {key} from './config.js';

const url = `https://api.airtable.com/v0/app708JRaOzw9xfPE/Weapons`;


// Add event on click button
document.getElementById("submit").addEventListener("click", getValue);
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    let name = document.getElementById("name").value;
    let picture = document.getElementById("picture").value;
    let description = document.getElementById("description").value;

};

// Create a data object
let data = {
    "fields" : {
       "name": "name",
       "picture": "picture",
       "description": "description",
    }
};
// Fetch data from Airtable API
fetch (url, {
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


