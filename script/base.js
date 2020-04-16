
// put url source of json data here (example of previous one included here for ease of reference)

var requestURL = "http://api.nobelprize.org/v1/prize.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

// if you want to use a function onload - i have included a test to see what format the json request has

request.onload = function() {
  console.log(request.response)
}

