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
  var playerCity = (response.data[0].first_name + response.data[0].last_name);
  console.log(playerCity);
  console.log(playerID);
  

  var settings2 = {
    "url": "https://balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=" + playerID,
    "method": "GET",
    "timeout": 0,
  };
  $.ajax(settings2).done(function (response2) {
    console.log(response2);
    $(".GP").text(response2.data[0].games_played)
    $(".MIN").text(response2.data[0].min)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)
    $(".GP").text(response2.data[0].games_played)

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rQLAu0nfEnZbuhYVAVBwo4O6Rv3Ydn1c&q="+playerCity+"&limit=1&offset=0&rating=G&lang=en"

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
