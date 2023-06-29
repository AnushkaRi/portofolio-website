import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

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
        <div className={styles.icons_container}>
          <div className={styles.icon}>
            <a
              href="https://github.com/AnushkaRi"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={40} color="#eeb213" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.linkedin.com/in/ana-dejanovic/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={40} color="#eeb213" />
            </a>
          </div>
          <div
            className={styles.icon}
            onClick={() =>
              (window.location = "mailto:ana.dejanovich@gmail.com")
            }
          >
            <AiOutlineMail size={40} />
          </div>
        </div>
      </div>
      <img src={photo}></img>
    </div>
  );
}

export default About;
