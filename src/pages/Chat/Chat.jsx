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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        tech="HTML, CSS and Vanilla JS, "
        link="https://github.com/AnushkaRi/chat-app"
      />
    </div>
  );
}

export default Chat;
