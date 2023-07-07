import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home_container}>
      <div className={styles.greeting}>Hi!</div>
      <div className={styles.intro}>
        I am
        <button className={styles.btn} onClick={() => navigate("/about")}>
          Ana
        </button>
        . Freshly gratuated
        <span className={styles.clr_yellow}> Front-end Developer</span>
        <span className={styles.little}>
          <br />
          and <span className={styles.clr_yellow}>illustrator</span> in my free
          time.
        </span>
      </div>
      <div className={styles.work}>
        Check out my
        <button className={styles.btn} onClick={() => navigate("/work")}>
          work
        </button>
        .
      </div>
      <div className={styles.contact}>
        And feel free to{" "}
        <button
          className={styles.btn}
          onClick={() => (window.location = "mailto:ana.dejanovich@gmail.com")}
        >
          contact
        </button>{" "}
        me.
      </div>
    </div>
  );
}

export default Home;
