import styles from "./styles.module.css";
import photo from "../../assets/AD_Logo.jpg";

function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_info}>
        <div className={styles.title}>
          <span className={styles.clr_red}>ABOUT </span>ANA DEJANOVIĆ
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <img src={photo}></img>
    </div>
  );
}

export default About;
