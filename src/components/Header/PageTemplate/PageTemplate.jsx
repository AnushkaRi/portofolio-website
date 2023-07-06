/* eslint-disable react/prop-types */
import { AiFillGithub } from "react-icons/ai";

import styles from "./styles.module.css";

const PageTemplate = ({ title, imgUrl_1, imgUrl_2, text, tech, link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_wrapper}>
        <div className={styles.title}>{title}</div>
        <img className={styles.img} src={imgUrl_1} />
        <img className={styles.img} src={imgUrl_2} />
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.text}>{text}</div>
        <div className={styles.tech}>Technologies: {tech}</div>
        <div className={styles.link}>
          <a href={link} target="_blank" rel="noreferrer">
            Click to see the code on <AiFillGithub size={30} />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
