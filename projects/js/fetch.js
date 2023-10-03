const tokenBearer = process.env.AIRTABLE_BEARER_TOKEN;
const baseId = process.env.AIRTABLE_BASE_ID;
const tableId = process.env.AIRTABLE_TABLE_ID;
const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;
// Settings headers
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + tokenBearer);

// Async function to list records from table Weapons with API Airtable
async function listRecords() {
    let response = await fetch(url, {
        method: "GET",
        headers: myHeaders,
    });
    if (response.ok) {
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let records = jsonResponse.records;
        console.log(records);
        return records;
    }
    throw new Error("Request failed!");
}