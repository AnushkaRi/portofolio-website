import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import WeatherDesktop from "../../assets/Weather/Weather_Desktop.png";

function Weather() {
  return (
    <div>
      <PageTemplate
        title="WEATHER APP"
        imgUrl_1={WeatherDesktop}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat."
        tech="HTML, CSS and Vanilla JS, "
        link="https://github.com/AnushkaRi/weather-app"
      />
    </div>
  );
}

export default Weather;
