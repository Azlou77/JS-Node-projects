import {key, base, table} from './config.js';

const url = `https://api.airtable.com/v0/${base}/${table}`;

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
    let titles = json.records;
    let row = document.createElement('section');
    row.className = 'row';
    for (let i = 0; i < 3; i++) {
        let col = document.createElement('div');
        col.className = 'col-lg-3';
        let div = document.createElement('article');
        div.className = 'card';
        let div2 = document.createElement('div');
        div2.className = 'card-body';
        let h3 = document.createElement('h3');
        h3.className = 'card-title';
        h3.innerHTML = titles[i].fields.Name;
        let p = document.createElement('p');
        p.className = 'card-text';
        p.innerHTML = titles[i].fields.Description;
        div2.appendChild(h3);
        div2.appendChild(p);
        div.appendChild(div2);
        col.appendChild(div);
        row.appendChild(col);
    }
    document.body.appendChild(row);
})
.catch(function(error) {
  console.log(error);
});