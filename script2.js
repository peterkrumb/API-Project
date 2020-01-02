$.ajax
({
  type: "GET",
  url: "https://api.mysportsfeeds.com/v2.1/pull/nba/2019-2020-regular/player_stats_totals.json",
  dataType: 'json',
  async: false,
  headers: {
    "Authorization": "Basic " + btoa("2dee32d7-5f8d-4bae-9272-ed5518" + ":" + "MYSPORTSFEEDS")
  },
  data: '{ "comment" }',
  success: function (){
    alert('Thanks for your comment!'); 
  }
});