import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import WorldClockPhoto from "../../assets/WorldClock/WorldClock.png";

function WorldClock() {
  return (
    <div>
      <PageTemplate
        title="WORLD CLOCK"
        imgUrl_1={WorldClockPhoto}
        text_1="While learning JavaScript, I found that making a World Clock is a good coding exercise."
        text_2="But showing cities' current time sounded dull, so I spice it up a bit and made a World Clock of the world’s highest mountains by continents."
        tech="HTML, CSS and Vanilla JS"
        link="https://github.com/AnushkaRi/world-clock"
      />
    </div>
  );
}

export default WorldClock;
