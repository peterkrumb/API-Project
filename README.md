## API-Project
This project is intended to test students knowledge and ability with APIs. The 2 API's we used in this project were the GiPHY API located at https://developers.giphy.com/ and a basketball stats API which can be found at https://www.balldontlie.io/#introduction.

## Index.html
Index.html lays out the format for the web page. Our webpage uses materialize as our source for bootstrapping. Our custom and stylish button was no bootstrapped but styled through the use of style.css. The text area allows the users to input a city of their choosing and should that city have an NBA basketball team their team name will be displayed along with a short gif encapsulating the spirit of their team. Also, LA has 2 basketball teams which frankly seems like an unfair advantage and golden state while not a city is a fairly well known and moderately successful basketball team who hardcore fans will be sure not to miss.

## Style.css
Style.css makes our button among the most stylish buttons possible with current technologies. Simply the button eclipses all other buttons in terms of gravitas and raw eyeball palatability for our test users.

## Script.js
Script.js has several functions all governed by the value in textarea1 (located in index.html). When the name of a city with a basketball team's name is grabbed from our basketball API and the first search result for the city on GiPHY is embedded below.