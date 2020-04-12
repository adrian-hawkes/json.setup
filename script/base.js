
// put url source of json data here (example of previous one included here for ease of reference)

var requestURL = "http://api.nobelprize.org/v1/prize.json";

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

// if you want to use a function onload

request.onload = function() {
//   console.log(request.response);
//   for(let i=0; i<request.response.prizes.length; i++){
//     for(let j=0; j<request.response.prizes[i].laureates.length; j++){
//   $("#info").append(`<h4> ${request.response.prizes[i].year} </h4><p> ${request.response.prizes[i].category} - ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}: ${request.response.prizes[i].laureates[j].motivation}</p>`);
// }
// }
}

// example of function which allows you to extract data and send it to the <p id="info">

function fullList(){
  $("#info").html("");
  for(let i=0; i<request.response.prizes.length; i++){
    for(let j=0; j<request.response.prizes[i].laureates.length; j++){
  $("#info").append(`<h4> ${request.response.prizes[i].year} </h4><p> ${request.response.prizes[i].category} - ${request.response.prizes[i].laureates[j].firstname} ${request.response.prizes[i].laureates[j].surname}: ${request.response.prizes[i].laureates[j].motivation}</p>`);
}
}
}



