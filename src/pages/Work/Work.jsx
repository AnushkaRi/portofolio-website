import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import Radio from "../../assets/Radio.png";
import PigDice from "../../assets/PigDice.png";
import WorldClock from "../../assets/WorldClock.png";
import ToDo from "../../assets/toDo.png";
import Blackjack from "../../assets/Blackjack.png";
import Chat from "../../assets/Chat.png";
import Weather from "../../assets/weather.png";

function Work() {
  const navigate = useNavigate();

  return (
    <div className={styles.work_container}>
      <div className={styles.radio} onClick={() => navigate("/work/radio")}>
        <img className={styles.img} src={Radio} />
        <p className={styles.title}>Radio Surfer Rosa</p>
      </div>
      <div className={styles.pig_dice}>
        <img className={styles.img} src={PigDice} />
        <p className={styles.title}>Pig Dice Game</p>
      </div>
      <div className={styles.world_clock}>
        <img className={styles.img} src={WorldClock} />
        <p className={styles.title}>World Clock App</p>
      </div>
      <div className={styles.todo}>
        <img className={styles.img} src={ToDo} />
        <p className={styles.title}>To-Do List App</p>
      </div>
      <div className={styles.blackjack}>
        <img className={styles.img} src={Blackjack} />
        <p className={styles.title}>Blackjack Game</p>
      </div>
      <div className={styles.chat}>
        <img className={styles.img} src={Chat} />
        <p className={styles.title}>Chat App</p>
      </div>
      <div className={styles.weather}>
        <img className={styles.img} src={Weather} />
        <p className={styles.title}>Weather App</p>
      </div>
    </div>
  );
}

export default Work;

{
  /* <div className={styles.work_container}>
      <div className={styles.radio}>
        <p className={styles.title}>Radio Surfer Rosa</p>
      </div>
      <div className={styles.pig_dice}>
        <p className={styles.title}>Pig Dice Game</p>
      </div>
      <div className={styles.world_clock}>
        <p className={styles.title}>World Clock App</p>
      </div>
      <div className={styles.todo}>
        <p className={styles.title}>To-Do List App</p>
      </div>
      <div className={styles.blackjack}>
        <p className={styles.title}>Blackjack Game</p>
      </div>
      <div className={styles.chat}>
        <p className={styles.title}>Chat App</p>
      </div>
      <div className={styles.weather}>
        <p className={styles.title}>Weather App</p>
      </div>
    </div> */
}
