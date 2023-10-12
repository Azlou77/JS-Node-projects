// Import config.js file
import {key} from './config.js';

const url = `https://api.airtable.com/v0/app708JRaOzw9xfPE/Weapons`;

let data = {
    "fields": {
        "Link": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Warhammer_14th_century.jpg/800px-Warhammer_14th_century.jpg",
        "Category": "close combat",
        "Description": "A warhammer is a late medieval weapon of war intended for close combat action, whose design resembles the hammer.",
        "Prices": 100,
        "Name": "Warhammer"

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


