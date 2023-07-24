import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import LoginPhoto from "../../assets/Chat/Login.png";
import ChatPhoto from "../../assets/Chat/Chat.png";

function Chat() {
  return (
    <div>
      <PageTemplate
        title="BLACKJACK GAME"
        imgUrl_1={LoginPhoto}
        imgUrl_2={ChatPhoto}
        text_1="For my final project at Front-end Developer Course at Algebra College, I made this straightforward chat application."
        tech="HTML, CSS and Vanilla JS, "
        link="https://github.com/AnushkaRi/chat-app"
      />
    </div>
  );
}

export default Chat;
