import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Cmponents
import OpenMenu from "../components/OpenMenu";
import BackP5 from "../components/HomePage/Background";
import ProjetCard from "../components/ProjetCard";
import Title from "../components/Title";

// MaterialUI

// Styles
import styles from "../styles/Projets.module.css";
import { imageListClasses } from "@mui/material";

export default function projets() {
  const router = useRouter();
  console.log(router.pathname);

  // States
  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState(null);
  const [projet, setProjet] = useState(null);
  const [projectList, setProjectList] = useState([]);

  // Fonction de hover images
  const handleHover = (projet) => {
    if (projet) {
      setTimeout(() => {
        setIsHovered(true);
        setProjet(projet);
      }, 300);
    } else {
      setIsHovered(false);
      // Attendre la fin de la transition pour retirer l'image
      setTimeout(() => {
        if (!isHovered) setProjet(null);
      }, 300);
    }
  };
 
  // Fetch des projets 
  useEffect(() => {
    fetch(`https://portfolio-backend-zeta-sandy.vercel.app/projets`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setProjectList(data.projets)
        }
      });
  }, []);  

  // mapping des data projets

  const projects = projectList.map((item, index) => {

    return (
        <ProjetCard projet={item} key={index} />
    );
  });

  // Retour <jsx>
  return (
    <>
      <div className={styles.background}>
        <BackP5 />
      </div>

      <div className={styles.page}>
        <OpenMenu chemin={router.pathname} />

        <Title title={'Projets'} />

        <div className={styles.liste}>
            {projects}
        </div>
 
      </div>
    </>
  );
}
