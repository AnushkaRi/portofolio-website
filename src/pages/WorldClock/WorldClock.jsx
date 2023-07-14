import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import WorldClockPhoto from "../../assets/WorldClock/WorldClock.png";

function WorldClock() {
  return (
    <div>
      <PageTemplate
        title="WORLD CLOCK"
        imgUrl_1={WorldClockPhoto}
        text="While learning JavaScript, I found that making a World Clock is a good exercise. But showing some cities current time sounded dull, so I spice it up a bit and made World Clock of world’s highest mountains by continents. Maybe some hiker-developer will need it."
        tech="HTML, CSS and Vanilla JS"
        link="https://github.com/AnushkaRi/world-clock"
      />
    </div>
  );
}

export default WorldClock;
