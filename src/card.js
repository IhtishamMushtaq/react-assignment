import React from "react";
import styles from "./card.module.css";
const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        {data.name} ({data.nickname})
      </h1>
      <div className={styles.imageContainer}>
        <img className={styles.heroImage} src={data.img} alt="heroImage" />
        <p className={styles.contents}>Birthday : {data.birthday}</p>
        <p className={styles.contents}>Birthday : {data.status}</p>
        <p className={styles.contents}>Portrayed : {data.portrayed}</p>
      </div>
    </div>
  );
};
export default Card;
