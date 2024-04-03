import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Cmponents
import OpenMenu from "../components/OpenMenu";
import BackP5 from "../components/HomePage/Background";
import ProjetCard from "../components/ProjetCard";

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

  // Datas
  const projectList = [
    {
      projectName: "MyGallery",
      stack: ["react.js"],
      collabs: ["Emilien Giraud"],
      year: "2024",
      photo: "/Projets/Papa/logo.png",
      link: "",
      desc: "Réalisation d'un site gallerie d'artiste pour François Giraud avec gestion et administration autonome des upload de fichiers",
      projet: "Projet de portfolio pour François Giraud",
    },

    {
      projectName: "LabUp",
      stack: ["react.js"],
      collabs: [
        "Emilien Giraud",
        "Karl Chareyre",
        "Nicolas Roulleau",
        "Théo Siriex",
      ],
      year: "2024",
      photo: "Projets/LabUp/logo.gif",
      link: "",
      desc: "LabUp est une plateforme de création de pattern de creative coding permettant de générer des supports de communications simples et uniques pour les jeunes artistes.",
      projet: "Projet de fin d'études, La Capsule",
    },
    {
      projectName: "PokeSounds",
      stack: ["reactNative.js"],
      collabs: ["Emilien Giraud"],
      year: "2024",
      photo: "Projets/Pokesound/logo.png",
      link: "",
      desc: "PokeSounds est une application mobile permettant de jouer les sons les plus mythiques de la série de manga Pokemon",
      projet:
        "Peojet personnel mettant à profit les connaissances en développement mobile",
    },
    {
      projectName: "HackaTweet",
      stack: ["react.js", "express.js"],
      collabs: ["Emilien Giraud", "Nicolas Nguyen"],
      year: "2024",
      photo: "Projets/Hackatweet/logo.jpeg",
      link: "",
      desc: "Hackatweet est une plateforme Twitter-like",
      projet: "Hackathon, La capsule",
    },
    {
      projectName: "TicketHack",
      stack: ["react.js"],
      collabs: ["Emilien Giraud", "Karl Chareyre"],
      year: "2024",
      photo: "Projets/TicketHack/logo.jpeg",
      link: "",
      desc: "TicketHack est une plateforme de réservation de train en ligne",
      projet: "Hackathon, La Capsule",
    },
    {
      projectName: "EtiK",
      stack: ["swiftUI"],
      collabs: ["Emilien Giraud"],
      year: "2023",
      photo: "Projets/Etik/logo.jpg",
      link: "",
      desc: "Etik est une application mobile permettant de mettre en relation les jeunes créateurs de mode éthique et les consommateurs soucieux de la provenance de leurs produits",
      projet: "Projet de fin d'étude, Apple Foundation Program Extended",
    },
    {
      projectName: "MyEcoTribe",
      stack: ["swiftUI"],
      collabs: ["Emilien Giraud"],
      year: "2023",
      photo: "Projets/EcoTribe/logo.jpeg",
      link: "",
      desc: "myEcotribe est une application mobile sociale permettant de réaliser et d'apprendre les principaux écogestes pour un monde plus durable ",
      projet: "Projet de fin d'étude, Apple Foundation Program",
    },
  ];

  // mapping des data projets

  const projects = projectList.map((item, index) => {

    return (
      <div key={index}>
        <ProjetCard projet={item} />
      </div>
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

        <div className={styles.title}>{"Projets"}</div>

        <div className={styles.separateur}> </div>

        <div className={styles.liste}>
            {projects}
        </div>
 
      </div>
    </>
  );
}
