// https://api.spotify.com/v1

// /v1/artists/{id}
// /v1/artists/{id}/top-tracks
//34b6f34212c44af5befda2997f53a0bc

// $.ajax({
//   url: "https://api.spotify.com/v1/albums/",
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

// Example queryURL for Genius API
var queryURL = "https://api.genius.com/artists/16775?access_token=YCm2sHVhLP7PQ1szB3B4LLJqsksJEA3NqwuY_lIw12BoNGUVjkLem6M7yCSBHHeC"

  $.ajax({
    url: queryURL,
    method: "GET",
    Authorization: "Bearer YCm2sHVhLP7PQ1szB3B4LLJqsksJEA3NqwuY_lIw12BoNGUVjkLem6M7yCSBHHeC"
  }).then(function(response) {
    console.log(response);
});

var napster = "https://api.napster.com/v2.2/artists/top";
$.ajax({
  url: napster,
  method: "GET",
  headers: {
    apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
  },

}).then(function(response) {
  console.log({response});
});