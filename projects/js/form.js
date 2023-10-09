// get values from form
document.getElementsByTagName('button').addEventListener('click', getValues);

// Function to get form values
function getValues() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

// Data array
let data = {
    "records": [
        {
            "id": "rec1",
            "fields": {
                "Name": name,
                "Description": description,
                "Category": category,
                "Prices": price
            }
        }
    ]
};


}