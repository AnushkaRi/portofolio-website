import styles from "./styles.module.css";

function Work() {
  return (
    <div className={styles.work_container}>
      <div className={styles.radio}>
        <p className={styles.img_description}>Radio Surfer Rosa</p>
      </div>
      <div className={styles.pig_dice}>
        <p className={styles.img_description}>Pig Dice Game</p>
      </div>
      <div className={styles.world_clock}>
        <p className={styles.img_description}>World Clock App</p>
      </div>
      <div className={styles.todo}>
        <p className={styles.img_description}>To-Do List App</p>
      </div>
      <div className={styles.blackjack}>
        <p className={styles.img_description}>Blackjack Game</p>
      </div>
      <div className={styles.chat}>
        <p className={styles.img_description}>Chat App</p>
      </div>
      <div className={styles.weather}>
        <p className={styles.img_description}>Weather App</p>
      </div>
    </div>
  );
}

export default Work;
