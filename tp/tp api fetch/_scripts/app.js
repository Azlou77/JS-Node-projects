'use strict';

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?key=19785289899902913&candidates=10%';
const parksUrl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=JKIhi1L1LJkQ3V4d7MVhXF7I70zlnrsuuee0dIPz';
const addressField = document.querySelector('#address');
//Add fields with querySelector
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
//Add fields with Jquery responseMethod
// const $zipField = $('#zip');
const $zipField = document.querySelector('#zip');

const updateUISuccess = function(data) {
  //Parse mean convert string to object/array
  const parsedData = JSON.parse(data);
  console.log(parsedData);
};
const updateUIError = function(error) {
  console.log(error);
};

const responseMethod = function(httpRequest) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
    }
  }
}

const createRequest = function(url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
  httpRequest.open('GET', url);
  httpRequest.send();
};

//Function to check if all fields are filled
const checkCompletion= function() {
  if (addressField.value !== '' &&
      cityField.value !== '' && 
      stateField.value !== ''){
        const requestUrl = smartyUrl + 
          '&street=' + addressField.value + 
          '&city=' + cityField.value + 
          '&state=' + stateField.value;
        createRequest(requestUrl);
      }
  }
  //createRequest(smartyUrl);
createRequest(parksUrl);
addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);

//Path: vanilla.js\tp\tp api fetch\_scripts\app.js
// 'use strict';
// 'use strict';
// 'use strict';
// 'use strict';
// 'use strict';

