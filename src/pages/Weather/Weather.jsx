import PageTemplate from "../../components/PageTemplate/PageTemplate";
import WeatherDesktop from "../../assets/Weather/Weather_Desktop.png";

function Weather() {
  return (
    <div>
      <PageTemplate
        title="WEATHER APP"
        imgUrl_1={WeatherDesktop}
        text_1="The Weather app is a simple and responsive application where you can view the current weather for a city of your choice."
        text_2="Choose how to set your city search, with the help of autocomplete functionality or you can just click the &#34;Get Your Location&#34; button for getting your current location."
        tech="React, CSS, OpenWeather API and RapidAPI - Geo DB Cities"
        link="https://github.com/AnushkaRi/weather-app"
      />
    </div>
  );
}

export default Weather;
