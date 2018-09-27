
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  console.log("test;");
};

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
