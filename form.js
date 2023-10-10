// Import config.js file
import {key, base, table} from './projects/js/config.js';

const url = `https://api.airtable.com/v0/${base}/${table}`;

let data = {
    name: 'trident',
    category: 'close combat',
    description: 'a three-pronged spear',
    image: 'https://i.imgur.com/9JjlfmS.jpg'
};

// Fetch data from Airtable API
fetch (url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(function(data) {
    return data.json();
})
.then(function(json) {
    console.log(json);
})
