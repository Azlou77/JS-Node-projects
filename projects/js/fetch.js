// Async function to list records from table Weapons with API Airtable
async function listRecords() {
    try {
      const response = await fetch('https://www.example.com');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }