var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather app based on React</p>
        <p>Here are some of the tools I used</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Forcast API</a> - I used open
              Weather Forcast API to search for weather data by city name.
          </li>
        </ul>
      </div>
    );
  }
});
module.exports = About;
