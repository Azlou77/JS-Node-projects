// Import dotenv
import 'dotenv/config'
import Airtable from 'airtable';

function getValue() {
    // Selecting the input element and get its value
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
}

var base = new Airtable({token: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

base('Weapons').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        // Display stringified record
        console.log(JSON.stringify(record.fields));
        


    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
    
        });

}, function done(err) {
    if (err) { console.error(err); return; }
});