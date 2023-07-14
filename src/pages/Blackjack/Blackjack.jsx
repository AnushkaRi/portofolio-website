import PageTemplate from "../../components/Header/PageTemplate/PageTemplate";
import BlackJackPhoto from "../../assets/Blackjack/Blackjack.png";

function Blackjack() {
  return (
    <div>
      <PageTemplate
        title="BLACKJACK GAME"
        imgUrl_1={BlackJackPhoto}
        text="Famous BlackJack Game with Seinfeld characters."
        tech="HTML, CSS and Vanilla JS"
        link="https://github.com/AnushkaRi/blackjack-game"
      />
    </div>
  );
}

export default Blackjack;
