'use strict';

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?key=150890721309723606&candidates=10';
const parksUrl = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=JKIhi1L1LJkQ3V4d7MVhXF7I70zlnrsuuee0dIPz';
const addressField = document.querySelector('#address');
//Add fields with querySelector
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
//Add fields with Jquery responseMethod
// const $zipField = $('#zip');
const zipField = document.querySelector('#zip');
const parkThumb = document.querySelector('#specials h2 img');
const parkSection= document.querySelector('#specials');

const smartyUpdateUISuccess = function(data) {
  //Parse mean convert string to object/array
  const parsedData = JSON.parse(data);
  // console.log(parsedData);
  const zip = parsedData[0].components.zipcode;
  const plus4 = parsedData[0].components.plus4_code;
  // console.log(zip + '-' + plus4);
  zipField.value = zip + '-' + plus4;
};

const parkUpdateUISuccess = function(parsedData) {
  console.log(parsedData);
  parkThumb.src = 'https://www.nps.gov/common/commonspot/templates/assets/images/branding/logo.png';
  parkSection.classList.remove('hidden');

};
const smartyUpdateUIError = function(error) {
  console.log(error);
};

const parkUpdateUIError = function(error) {
  console.log(error);
};
// XHR method request
// const responseMethod = function(httpRequest, succeed, fail) {
//   if (httpRequest.readyState === 4) {
//     if (httpRequest.status === 200) {
//      succeed(httpRequest.responseText);
//     } else {
//       fail(httpRequest.status + ': ' + httpRequest.responseText);
//     }
//   }
// }

// const createRequest = function(url, succeed, fail) {
//   const httpRequest = new XMLHttpRequest(url);
//   httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest, succeed, fail));
//   httpRequest.open('GET', url);
//   httpRequest.send();
// };

//Fecth method request
const createRequest = function(url, succeed, fail) {
  fecth (url)
  .then((response) => 
    response.json())
  .then((data) => succeed(data));
};

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
        createRequest(requestUrl, smartyUpdateUISuccess, smartyUpdateUIError);
      }
  }
  //createRequest(smartyUrl);
createRequest(parksUrl, parkUpdateUISuccess, parkUpdateUIError);
addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);


