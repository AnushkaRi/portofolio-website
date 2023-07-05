import { AiFillGithub } from "react-icons/ai";

import styles from "./styles.module.css";

function PageTemplate(title, imgUrl, img_title, text, link) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.image_wrapper}>
        <img className={styles.img} src={imgUrl} alt="" />
        <p className={styles.img_title}>{img_title}</p>
        <img className={styles.img} src={imgUrl} alt="" />
        <p className={styles.img_title}>{img_title}</p>
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.text}>{text}</div>
        <div className={styles.link}>
          <AiFillGithub /> {link}
        </div>
      </div>
    </div>
  );
}

export default PageTemplate;
