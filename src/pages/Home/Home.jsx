import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home_container}>
      <div className={styles.greeting}>Hi!</div>
      <div className={styles.intro}>
        I am <span className={styles.clr_red}>Ana</span>. Freshly gratuated{" "}
        <span className={styles.clr_yellow}>Front-end Developer</span>.
      </div>
      <div className={styles.work}>
        Check out my{" "}
        <button className={styles.btn} onClick={() => navigate("/work")}>
          work
        </button>
        .
      </div>
      <div className={styles.contact}>
        And feel free to <span className={styles.clr_yellow}>contact</span> me.
      </div>
    </div>
  );
}

export default Home;
