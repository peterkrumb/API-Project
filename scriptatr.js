$("#enter").on("click", function (event) {
    event.preventdefault();
    var player = $("#textarea1").val().trim();
    
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=7e894ee5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("Got reponse:" + response);
    });
});