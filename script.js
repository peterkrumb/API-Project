$("#select-player").on("click", function(event) {
    event.preventDefault();
    var playerName = $("#player-input").val();
    var settings = {
    "url": "https://balldontlie.io/api/v1/players?search=" + playerName,
    "method": "GET",
    "timeout": 0,
  };
    
    $.ajax(settings).done(function (response) {
    console.log(response.data[0].first_name);
  });

});


  
  