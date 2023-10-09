// Import config.js file
import {key, base, table} from './config.js';

const url = `https://api.airtable.com/v0/${base}/${table}`;

// Fetch data from Airtable API
fetch (url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    
    }
})
.then(function(data) {
    return data.json();
})
.then(function(json) {
    // Loop through the data
    let titles = json.records;

    // Create a row
    let row = document.createElement('section');
    row.className = 'row';
    for (let i = 0; i < 4; i++) {

        // Create a column
        let col = document.createElement('div');
        col.className = 'col-lg-2';

        // Create a card
        let div = document.createElement('article');
        div.className = 'card';

        // Create a card header
        let div1 = document.createElement('div');
        div1.className = 'card-header';
        div1.innerHTML = 'Category:' +' ' + titles[i].fields.Category;

        // Create a card body
        let div2 = document.createElement('div');
        // Create an image
        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = titles[i].fields.Pictures[0].url;
        div2.className = 'card-body';

        // Create a card title and text
        let h3 = document.createElement('h3');
        h3.className = 'card-title';
        h3.innerHTML = titles[i].fields.Name;
        let p = document.createElement('p');
        p.className = 'card-text';
        p.innerHTML = titles[i].fields.Description;

        // Create a card footer
        let div3 = document.createElement('div');
        div3.className = 'card-footer';
        div3.innerHTML = 'Prices:' + ' ' + titles[i].fields.Prices + '€';

        // Append elements to the DOM
        div2.appendChild(h3);
        div.appendChild(img);
        div2.appendChild(p);
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        col.appendChild(div);
        row.appendChild(col);

    }
    document.body.appendChild(row);
})

// Catch errors
.catch(function(error) {
  console.log(error);
});