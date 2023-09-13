const list = document.querySelector('list');
const text = "<span> you have selected ";
const listArray = [];

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Loop over the checkboxes and add event listeners 
for ( const checkbox of checkboxes ) {
  checkbox.addEventListener('change', (e) => {
    // Add the item to the listArray if it is checked, otherwise remove it
    if ( e.target.checked ) {
      listArray.push(e.target.value);
    } else {
      listArray.splice(listArray.indexOf(e.target.value), 1);
    }
    // Update the list
    updateList();
  });
}