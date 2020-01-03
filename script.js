$("#select-player").on("click", function(event) {
  event.preventDefault();
  var playerName = $("#player-input").val();
  var settings = {
  "url": "https://balldontlie.io/api/v1/players?search=" + playerName,
  "method": "GET",
  "timeout": 0,};

  //first ajax call
  $.ajax(settings).done(function (response) {
  console.log(response.data[0]);
  var playerID = (response.data[0].id);
  console.log(playerID);

  var settings2 = {
    "url": "https://balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=" + playerID,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(settings2).done(function (response2) {
    console.log(response2);

  

  //var playerFirst = $("<h1>").text(response.data[0].first_name);
  //var playerLast = $("<h1>").text(response.data[0].last_name);
  
    //$("#player-vitals").append(playerFirst, playerLast);
});
  });

  
  

});