const template = document.querySelector('#listOfElement')
const element = template.content.cloneNode(true)  


arrayOfElement.forEach(e => {
  element.querySelector('div').appendChild(Card(e))
});

return element


//history.pushState({page: 'list'}, 'List', '/list') change url