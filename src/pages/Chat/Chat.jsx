import PageTemplate from "../../components/PageTemplate/PageTemplate";
import LoginPhoto from "../../assets/Chat/Login.png";
import ChatPhoto from "../../assets/Chat/Chat.png";

function Chat() {
  return (
    <div>
      <PageTemplate
        title="BLACKJACK GAME"
        imgUrl_1={LoginPhoto}
        imgUrl_2={ChatPhoto}
        text_1="My final project in Front-end Developer Course at Algebra College was to make a chat application with React."
        text_2="You can register with your desired username and chat with other folks under the neon lights."
        tech="React, Redux, Router and Scaledrone"
        link="https://github.com/AnushkaRi/chat-app"
      />
    </div>
  );
}

export default Chat;
