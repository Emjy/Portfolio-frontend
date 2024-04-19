import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";

// Styles
import styles from "../styles/ProjetsCard.module.css";

// MUI
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

export default function ProjetCard(props) {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.year}>
          {props.projet.year}
          {/* <div className={styles.photoContainer} onClick={() => router.push(`/projetDetails?id=${props.projet._id}`)}> */}
            <img src={props.projet.logo} alt={props.projet.projectName} className={styles.photo} />
          {/* </div> */}
        </div>

        {/* Utilisation d'une balise <a> pour la redirection */}
        <a href={props.projet.link} className={styles.projectName}>
          {props.projet.link && <ArrowOutwardRoundedIcon className={styles.linkArrow} />}
          {props.projet.projectName}
        </a>

        <div className={styles.collabs}>
          {props.projet.collabs.join(", ")}
        </div>
        <div className={styles.description}>{props.projet.desc}</div>
      </div>
    </div>
  );
}
