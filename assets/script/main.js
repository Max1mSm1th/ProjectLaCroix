
    var artist = "hello its me"
      var queryURL = `https://api.genius.com/search?q=${artist}&access_token=cFZv8YyIQLCciFlaZn2Q0nQL-8szl5ES5jHqFo2kyfrheVEmDKen-PBxWgQ0dRVI`;

      $.ajax({
        url: queryURL,
        method: "GET",
  
      }).then(function(response) {
        console.log(response);
      });

document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  console.log("test;");

};

var queryURL = "https://api.genius.com/artists/16775?access_token=YCm2sHVhLP7PQ1szB3B4LLJqsksJEA3NqwuY_lIw12BoNGUVjkLem6M7yCSBHHeC"

   $.ajax({
     url: queryURL,
     method: "GET",
    Authorization: "Bearer YCm2sHVhLP7PQ1szB3B4LLJqsksJEA3NqwuY_lIw12BoNGUVjkLem6M7yCSBHHeC"
   }).then(function(response) {
    //console.log(response);
});

//var napster = "https://api.napster.com/v2.2/artists/top";  /v2.2/artists/{id}/tracks/top
//var napster = "https://api.napster.com/v2.2/artists/sia";
//var napster = "https://api.napster.com//v2.2/artists/" + artistID + "/tracks/top";

var napster = "https://api.napster.com//v2.2/artists/art.58977/tracks/top";
$.ajax({
  url: napster,
  method: "GET",
  headers: {
    apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
  },
}).then(function(response) {
  console.log({response});
});
