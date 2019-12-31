$(".enter").on("click", function (event) {
    event.preventDefault();
    var player = $("#textarea1").val().trim();
    
    console.log("https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%22snippet%22%2C%22maxResults%22%3A1%2C%22q%22%3A%22Steph%20Curry%20Highlights%22%7D");
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log("Got reponse:" + response);
//     });
});