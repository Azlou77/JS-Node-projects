import {key, base, table} from './config.js';
// Functions for Fetch API
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const url = `https://api.airtable.com/v0/${base}/${table}`;
const ul = document.getElementById('titles');

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
    }
)
.then(function(json) {
    let titles = json.records;
    return titles.map(function(title) {
        let li = createNode('li'),
            span = createNode('span');
        span.innerHTML = `${title.fields.Name}`;
        append(li, span);
        append(ul, li);
  })
})

.catch(function(error) {
  console.log(error);
});