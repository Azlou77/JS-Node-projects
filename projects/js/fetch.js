// Import dotenv
import 'dotenv/config' ;

let base = process.env.AIRTABLE_BASE;
let apiKey = process.env.AIRTABLE_API_KEY;
let table = process.env.AIRTABLE_TABLE;

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer ' + apiKey);

const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
    };

fetch ('https://api.airtable.com/v0/' + base + '/' + table, myInit)
    .then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
    })
    .then(data => {
    console.log(data);
    ListRecords(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

    function ListRecords(data) {
        const name = data.records.map(record => record.fields.Name);
        const divName = document.getElementById('title');
        divName.innerHTML = name;


      }   