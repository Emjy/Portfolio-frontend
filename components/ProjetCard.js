import React from "react";

// Styles
import styles from "../styles/ProjetsCard.module.css";

export default function ProjetCard(props) {
  return (
    <div className={styles.container}>
     

      <div className={styles.infos}>
        <div className={styles.year}>
          {props.projet.year}
          <div className={styles.collabs}>
            {props.projet.collabs.join(", ")}
          </div>
        </div>

        <div className={styles.projectName}>{props.projet.projectName}</div>
        <div className={styles.description}>{props.projet.desc}</div>

      </div>

      <div className={styles.photoContainer}>
        <img src={props.projet.photo} className={styles.photo} />
      </div>
    </div>
  );
}
