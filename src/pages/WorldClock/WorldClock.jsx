import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import WorldClockPhoto from "../../assets/WorldClock/WorldClock.png";

function WorldClock() {
  return (
    <div>
      <PageTemplate
        title="WORLD CLOCK"
        imgUrl_1={WorldClockPhoto}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat."
        tech="HTML, CSS and Vanilla JS, "
        link="https://github.com/AnushkaRi/world-clock"
      />
    </div>
  );
}

export default WorldClock;
