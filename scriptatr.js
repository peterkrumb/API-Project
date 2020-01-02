// $(".enter").on("click", function (event) {
//     event.preventDefault();
//     var player = $("#textarea1").val().trim();
    
//     console.log("https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%22snippet%22%2C%22maxResults%22%3A1%2C%22q%22%3A%22Steph%20Curry%20Highlights%22%7D");
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log("Got reponse:" + response);
//     });
// });

// $(".enter").on("click", function () {
//     event.preventDefault();
// authenticate().then(loadClient)
// execute()
// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.search.list({
//       "part": "snippet",
//       "maxResults": 1,
//       "q": "Steph Curry Highlights"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
//   });
// });

// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("AIzaSyCOnD4dHdP6XdWBdbY6e3JAvWN84bJG7T4");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtube.search.list({
//       "part": "snippet",
//       "maxResults": 1,
//       "q": "Steph Curry Highlights"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "168910596445-sd2jatdfri0kr63pkuqtaqshjtrm33k5.apps.googleusercontent.com"});
//   });

$(".enter").on("click", function (event) {
      event.preventDefault();
      var player = $("#textarea1").val().trim();
      
      console.log(player);
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rQLAu0nfEnZbuhYVAVBwo4O6Rv3Ydn1c&q="+player+"&limit=1&offset=0&rating=G&lang=en"

      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function (response) {
          console.log(response.data[0].url);
          console.log(response);
        //   $(".video").text(response.data[0].url);
          $("iframe").attr("src", response.data[0].embed_url);
          $("#giphylink2").attr("href", response.data[0].url);
      });
  });