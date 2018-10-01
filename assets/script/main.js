// // import {NapsterRequest} from "./napster.js";
// NapsterRequest = require("./napster.js")
 
var artistName;
var previewSong;
 
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
      artistName = response.response['hits'][0]['result']['primary_artist']['name'];
      //console.log(response);
      //console.log(artistName);
      //console.log(lyrics);
      //return artistName;
      artistName = artistName.toLowerCase();
      ajaxCall1(artistName);
    });
  }
};
 
function ajaxCall1(artistName){
  //console.log("ajaxCall1");
  var napster = "https://api.napster.com/v2.2/artists/" + artistName;
  //console.log("artist Name:  " + artistName);
  $.ajax({
    url: napster,
    method: "GET",
    headers: {
      apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
    },
  }).then(function(response) {
    //console.log("artist name goes to napster to get artist ID");
    var artistID = response.artists[0].id;
    //console.log("artist ID: " + artistID);
    ajaxCall2(artistID);
  });
}
 
function ajaxCall2(artistID){
  //console.log("ajaxCall2");
  var napster = "https://api.napster.com/v2.2/artists/" + artistID + "/tracks/top";
 
  $.ajax({
    url: napster,
    method: "GET",
    headers: {
      apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
    },
  }).then(function(response) {
    //capture img and song via response
    console.log(response.tracks[4].previewURL);
    var previewSong = response.tracks[4].previewURL;
    $("#songPreview").append("<source src=" + response.tracks[4].previewURL + "/>");
 
    //append img and song to html
    var image = "http://direct.napster.com/imageserver/v2/artists/" + artistID + "/images/633x422.jpg";
    console.log(image);
    $("#img").append("<img src=" + image + "/>");
  });
 
}
 
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
 
 