import styles from "./styles.module.css";

function Work() {
  return (
    <div className={styles.work_container}>
      <div className={styles.radio}></div>
      <div className={styles.pig_dice}></div>
      <div className={styles.world_clock}></div>
      <div className={styles.todo}></div>
      <div className={styles.blackjack}></div>
      <div className={styles.chat}></div>
      <div className={styles.weather}></div>
    </div>
  );
}

export default Work;
