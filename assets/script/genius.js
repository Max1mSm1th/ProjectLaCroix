var artistName = "";


function search(e) {

  var input ="";

  if(event.key === 'Enter') {

    var artist= e.value;
var queryURL = `https://api.genius.com/search?q=${artist}&access_token=cFZv8YyIQLCciFlaZn2Q0nQL-8szl5ES5jHqFo2kyfrheVEmDKen-PBxWgQ0dRVI`;

$.ajax({
  url: queryURL,
  method: "GET",

}).then(function(response) {
  var lyrics= response.response['hits'][0]['result']['url'];
  var artistName = response.response['hits'][0]['result']['primary_artist']['name'];
  console.log(response);
  console.log(artistName);
  console.log(lyrics);
});
}
};


// attempting to display in iframe
// function var1() {
// document.getElementById('test').innerHTML ='lyrics';
// }
// window.onload = var1();


// //Different request
// var queryURL = "https://api.genius.com/artists/16775?access_token=YCm2sHVhLP7PQ1szB3B4LLJqsksJEA3NqwuY_lIw12BoNGUVjkLem6M7yCSBHHeC"

// $.ajax({
//   url: queryURL,
//   method: "GET",
// Authorization: "Bearer YCm2sHVhLP7PQ1szB3B4LLJqsksJEA3NqwuY_lIw12BoNGUVjkLem6M7yCSBHHeC"
// }).then(function(response) {
// //console.log(response);
// });
