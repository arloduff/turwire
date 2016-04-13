# Turwire #

Frontend React API for displaying results from the [Hotwire Rental Car Shopping API](http://developer.hotwire.com/docs/read/Rental_Car_Shopping_API)

## Installation  ##

Install the dependencies:

    npm install

Build the project:

    npm run compile

Start the server:

    npm start

Point your browser at `localhost:9000` to load the application. Alternatively, you can edit the `start` script in `package.json` to specify a different port. Just change the `-p` option which is passed to `http-server`.

## Considerations ##

Because Hotwire's API suggests that the client validate locations prior to making the request, I have chosen to limit the possible criteria by giving the user the choice of selecting a U.S. state or entering geographical latitude and longitude for a destination. An alternative approach would be to make another request prior to fetching data from Hotwire's API to populate the React-Select data with results from a service that provides placenames, such as the [Geonames API](http://www.geonames.org/export/web-services.html).

## Overiew of the Code ##

This project uses a React frontend written in ES6 to communicate with the Hotwire API. A list of some third-party plugins I have used is:

 * React-select
 * React-datepicker
 * jQuery
 * Moment.js
 * X2Js

React was chosen because of the ease it provides in quickly building reusable components, the code organization which comes along with that, and its straightforwardness in designing single-page apps. I have felt that React-select and React-datepicker lent themselves to providing the smoothest interfaces for displaying select and datepicker elements within React. Moment.js was chosen because of the ease of use it provides in determining differences in times (which is needed in validating pickup and dropoff times before sending requests to the API). I could have used jQuery to traverse the XML data which is returned by the API, but because such a large amount of data is returned, I felt it better to convert that data into a JSON object with X2Js.

For the development environment, additional technologies used are:

 * Grunt
 * Babel
 * SASS
 * http-server

For this project, I have taken the approach of requiring local modules and bundling them together as one minified file which is provided to the user. I have chosen this method because of the safety over relying on an external CDN, which may sometimes go down unexpectedly, as well as for the code readability which comes with having to require modules before using them, rather than simply referring to them in the global namespace. Of course, when requiring external libraries such as these in a large project, this can easily bloat the minified file, in which case using a CDN may be preferable.

To this end, I have used Grunt to handle the building of the project, together with Babel to transpile the code from React/ES6 into standard ES5 code which is minified and delivered to the user's computer on page load. http-server is used to deliver the code to the user's computer, and also to get around the CORS limitations of the Hotwire API.

I have used SASS for this project because of the ease of use in nesting CSS rules.
