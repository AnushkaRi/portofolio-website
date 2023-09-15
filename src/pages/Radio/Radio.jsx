import PageTemplate from "../../components/PageTemplate/PageTemplate";
import ToDoPhoto from "../../assets/ToDo/ToDo.png";

function Radio() {
  return (
    <div>
      {" "}
      <PageTemplate
        title="RADIO SURFER ROSA"
        imgUrl_1={ToDoPhoto}
        text_1="The most extensive coding project I've done was a Spotify clone app under the name Radio Surfer Rosa."
        text_2="Consists of an inbuilt music player, music search engine, and Spotify Playlists."
        tech="React, Router, CSS and Spotify Web API"
        link="https://github.com/AnushkaRi/radio-surfer-rosa"
      />
    </div>
  );
}

export default Radio;
