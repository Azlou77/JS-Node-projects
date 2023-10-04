// Import dotenv
require('dotenv').config()

const bearer_token = process.env.BEARER_TOKEN;
const base_id = process.env.BASE_ID;
const table_name = process.env.TABLE_NAME;

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + bearer_token);


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("https://api.airtable.com/v0/" + base_id + "/" + table_name , requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  