$("#select-player").on("click", function(event) {
    event.preventDefault();
    var playerName = $("#player-input").val();
    var settings = {
    "url": "https://balldontlie.io/api/v1/players?search=" + playerName,
    "method": "GET",
    "timeout": 0,
  };
    //first ajax call
    $.ajax(settings).done(function (response) {
    console.log(response.data[0]);
    var playerFirst = $("<h1>").text(response.data[0].first_name);
    var playerLast = $("<h1>").text(response.data[0].last_name);
    
      $("#player-vitals").append(playerFirst, playerLast);
  });

});


  
  