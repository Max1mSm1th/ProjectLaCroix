    var artist = "hello its me"
      var queryURL = `https://api.genius.com/search?q=${artist}&access_token=cFZv8YyIQLCciFlaZn2Q0nQL-8szl5ES5jHqFo2kyfrheVEmDKen-PBxWgQ0dRVI`;

      $.ajax({
        url: queryURL,
        method: "GET",
  
      }).then(function(response) {
        console.log(response);
      });