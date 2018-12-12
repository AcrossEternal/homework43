var acs;

// use XHR to retrieve it, setting the responseType as json, and report any errors
// that occur in the XHR operation. If the respnse is successful, set products to equal
// request.response, then run the initialize() function
var request = new XMLHttpRequest();


request.open('GET', 'acs.json');
request.responseType = 'json';

request.onload = function() {
  if(acs.status === 200) {
    acs = request.response;
    initialize();
  } else {
    console.log('Network request for acs.json failed with response ' + request.status + ': ' + request.statusText)
  }
};

request.send();

function initialize{
    console.log(acs);
}