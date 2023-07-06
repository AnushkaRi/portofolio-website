import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import BlackJackPhoto from "../../assets/Blackjack/Blackjack.png";

function Blackjack() {
  return (
    <div>
      <PageTemplate
        title="BLACKJACK GAME"
        imgUrl_1={BlackJackPhoto}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        tech="HTML, CSS and Vanilla JS, "
        link="https://github.com/AnushkaRi/blackjack-game"
      />
    </div>
  );
}

export default Blackjack;
