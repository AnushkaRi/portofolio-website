import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.header_container}>
      <div className={styles.header_title}>
        <span className={styles.clr_red}>ANA</span>&nbsp;
        <span className={styles.clr_yellow}>DEJANOVIĆ</span>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn} onClick={() => navigate("/")}>
          Home
        </button>
        <button className={styles.btn} onClick={() => navigate("/work")}>
          Work
        </button>
        <button className={styles.btn} onClick={() => navigate("/about")}>
          About
        </button>
      </div>
    </div>
  );
}

export default Header;
