import PageTemplate from "../../components/PageTemplate/PageTemplate";
import BlackJackPhoto from "../../assets/Blackjack/Blackjack.png";

function Blackjack() {
  return (
    <div>
      <PageTemplate
        title="BLACKJACK GAME"
        imgUrl_1={BlackJackPhoto}
        text_1="Play the Blackajck Game with Seinfeld characters."
        text_2="Rules are almost similar to the original Blackjack Game, except Ace is always worth 11. Enjoy the game!"
        tech="HTML, CSS and Vanilla JS"
        link="https://github.com/AnushkaRi/blackjack-game"
      />
    </div>
  );
}

export default Blackjack;
