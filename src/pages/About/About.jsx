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
          <p>
            I am Ana, Rijeka-based junior Front-end Developer with an affinity
            for design & user experience.
          </p>{" "}
          <p>
            Prior to transitioning into web development I was working as an
            engineer mostly in civil and naval engineering sector.
          </p>{" "}
          <p>
            I spend my free time doing illustrations, nurturing my urban garden
            and hiking with my daughter and dog. I like utopain books, SF movies
            & enjoy taking analogue photographs. And recently I discovered a
            passion for programming languages.
          </p>{" "}
          <p>
            As a developer, I value simple content structure, clean design
            patterns combined with thoughtful animations & transitions to
            maximize user experience.
          </p>
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
