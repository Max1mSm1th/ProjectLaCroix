// https://api.spotify.com/v1

// /v1/artists/{id}
// /v1/artists/{id}/top-tracks
//34b6f34212c44af5befda2997f53a0bc

$.ajax({
    url: "https://api.spotify.com/v1/albums/",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });