import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.css";
import Radio from "../../assets/Grid/Radio.png";
import WorldClock from "../../assets/Grid/WorldClock.png";
import ToDo from "../../assets/Grid/toDo.png";
import Blackjack from "../../assets/Grid/Blackjack.png";
import Chat from "../../assets/Grid/Chat.png";
import Weather from "../../assets/Grid/weather.png";

function Work() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.work_container}>
        <div className={styles.radio} onClick={() => navigate("/radio")}>
          <img className={styles.img} src={Radio} />
          <p className={styles.title}>Radio Surfer Rosa</p>
        </div>
        <div
          className={styles.world_clock}
          onClick={() => navigate("/worldclock")}
        >
          <img className={styles.img} src={WorldClock} />
          <p className={styles.title}>World Clock App</p>
        </div>
        <div className={styles.todo} onClick={() => navigate("/todo")}>
          <img className={styles.img} src={ToDo} />
          <p className={styles.title}>To-Do List App</p>
        </div>
        <div
          className={styles.blackjack}
          onClick={() => navigate("/blackjack")}
        >
          <img className={styles.img} src={Blackjack} />
          <p className={styles.title}>Blackjack Game</p>
        </div>
        <div className={styles.chat} onClick={() => navigate("/chat")}>
          <img className={styles.img} src={Chat} />
          <p className={styles.title}>Chat App</p>
        </div>
        <div className={styles.weather} onClick={() => navigate("/weather")}>
          <img className={styles.img} src={Weather} />
          <p className={styles.title}>Weather App</p>
        </div>
      </div>
      <Outlet />
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
