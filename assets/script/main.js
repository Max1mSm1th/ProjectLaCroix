// // import {NapsterRequest} from "./napster.js";
// NapsterRequest = require("./napster.js")
 
var artistName;
var previewSong;
 
function search(e) {
  var input ="";
 
  if(event.key === 'Enter') {
    var artist= e.value;
    var queryURL = `https://api.genius.com/search?q=${artist}&access_token=cFZv8YyIQLCciFlaZn2Q0nQL-8szl5ES5jHqFo2kyfrheVEmDKen-PBxWgQ0dRVI`;
   $( ".animation").addClass( "displayBlock" );

    $.ajax({
      url: queryURL,
      method: "GET",
 
    }).then(function(response) {
      var lyrics= response.response['hits'][0]['result']['url'];
      artistName = response.response['hits'][0]['result']['primary_artist']['name'];
      //console.log(response);
      //console.log(artistName);
      //console.log(lyrics);
      //$("#iframe").attr("src", lyrics);
      //return artistName;
      artistName = artistName.toLowerCase();
      artistName = artistName1(artistName);
      console.log(artistName);
      setTimeout(loader, 2000);
      ajaxCall1(artistName);
    });
  }
};
 
function ajaxCall1(artistName){
  //console.log("ajaxCall1");
  var napster = "http://api.napster.com/v2.2/search/verbose?query=" + artistName
  console.log(napster);
  // napster = "https://api.napster.com/v2.2/artists/" + artistName;
  //console.log("artist Name:  " + artistName);
  $.ajax({
    url: napster,
    method: "GET",
    headers: {
      apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
    },
  }).then(function(response) {
    console.log(response);
    //var artistID = response.artists[0].id;
    var artistId = response.search.data.tracks[0].artistId;
    console.log(artistId);
    ajaxCall2(artistId);
  });
}
 
function ajaxCall2(artistId){
  //console.log("ajaxCall2");
  var napster = "https://api.napster.com/v2.2/artists/" + artistId + "/tracks/top";
 
  $.ajax({
    url: napster,
    method: "GET",
    headers: {
      apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
    },
  }).then(function(response) {
    //capture img and song via response
    console.log(response.tracks[1].previewURL);
    var previewSong = response.tracks[4].previewURL;
    $("#songPreview").append("<source src=" + response.tracks[1].previewURL + "/>");
    console.log(response);
    //append img and song to html
    // var image = "http://api.napster.com/v2.2/search/verbose?query=" + artistName + "type=image"
    // console.log("image: " + image);
    // console.log(imag)

    //$("#img").append("<img src=" + image + "/>");
  });
 
}


function loader(){
  $(".animation").removeClass("displayBlock");   
}

$(function() {
  var body = $('body');
  var backgrounds = ['url(https://i.ytimg.com/vi/mqpwDJpI3Rc/maxresdefault.jpg)', 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/The_Beatles_in_America.JPG/1200px-The_Beatles_in_America.JPG)', 'url(http://celebrityinsider.org/wp-content/uploads/2018/08/travis-scott.jpeg)', 'url(http://stc.below.co.kr/wp-content/uploads/2017/11/IMG_49231.jpg)', 'url(https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/12/Screen-Shot-2015-12-12-at-12.31.36-PM.png)', 'url(https://www.letras.com.br/arquivos/bg/wallpapers/6/5407,527.jpg)', 'url(https://i2.wp.com/truetoo.co/wp-content/uploads/2015/11/before-dre-day-a-conversation-with-anderson-paak-and-knxwledge5.jpg?fit=1203%2C803)', 'url(https://i.ticketweb.com/i/00/07/33/42/79_Original.jpg?v=16)'];
var current = 0;

  function nextBackground() {
    body.css(
    'background',
      backgrounds[current = ++current % backgrounds.length]
  );

  setTimeout(nextBackground, 5000);
  }

  setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
    
 });
 
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

//split, splice and slice
//console.log(artistName1("Jackie Gaherity")) 

function artistName1(string){
   var newString = string.split(' ').join('+');
   return newString
 }