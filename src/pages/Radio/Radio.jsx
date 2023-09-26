import PageTemplate from "../../components/PageTemplate/PageTemplate";
import RadioPhoto from "../../assets/Radio/radio.png";

function Radio() {
  return (
    <div>
      {" "}
      <PageTemplate
        title="RADIO SURFER ROSA"
        imgUrl_1={RadioPhoto}
        text_1="The most extensive coding project I'm doing is a Spotify clone app under the name Radio Surfer Rosa."
        text_2="Consists of an inbuilt music player, music search engine, and Spotify Playlists."
        tech="React, Router, CSS and Spotify Web API"
        link="https://github.com/AnushkaRi/radio-surfer-rosa"
      />
    </div>
  );
}

export default Radio;
