import React from "react";
import { useRouter } from "next/router";

// Styles
import styles from "../styles/About.module.css";

// Components
import OpenMenu from "../components/OpenMenu";
import BackP5 from "../components/HomePage/Background";

// Material UI
import LinearProgress from "@mui/material/LinearProgress";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

export default function about() {
  const router = useRouter();

  // Fonctio nde download du CV
  const handleDownloadCV = () => {
    window.open("/CV_EG.pdf", "_blank");
  };

  // Data
  const capacitiesData = [
    { name: "React.js", pct: 75, stack: "front" },
    { name: "ReactNative.js", pct: 75, stack: "front" },
    { name: "HTML/CSS", pct: 80, stack: "front" },
    { name: "Next.js", pct: 100, stack: "front" },
    { name: "Express.js", pct: 90, stack: "back" },
    { name: "Swift", pct: 90, stack: "back" },
    { name: "SwiftUI", pct: 75, stack: "back" },
    { name: "RPG/CL", pct: 100, stack: "back" },
    { name: "SQL", pct: 90, stack: "back" },
    { name: "NoSQL", pct: 75, stack: "back" },
    { name: "Adelia", pct: 100, stack: "back" },
    { name: "Rdi", pct: 100, stack: "outil" },
    { name: "VSCode", pct: 100, stack: "outil" },
    { name: "Git", pct: 100, stack: "outil" },
    { name: "Xcode", pct: 100, stack: "outil" },
    { name: "Figma", pct: 100, stack: "outil" },
    { name: "MongoDB", pct: 100, stack: "outil" },
    { name: "Vercel", pct: 100, stack: "outil" },
  ];

  // Séparation des technologies par stack
  const frontEndTechnologies = capacitiesData.filter(
    (item) => item.stack === "front"
  );
  const backEndTechnologies = capacitiesData.filter(
    (item) => item.stack === "back"
  );
  const toolTechnologies = capacitiesData.filter(
    (item) => item.stack === "outil"
  );

  // Fonction pour générer le markup des technologies par catégorie
  const generateMarkupForStack = (technologies) => {
    return technologies.map((item) => {
      return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>#{item.name}</div>
      );
    });
  };

  // Génération du markup pour chaque stack
  const frontEndMarkup = generateMarkupForStack(frontEndTechnologies);
  const backEndMarkup = generateMarkupForStack(backEndTechnologies);
  const toolMarkup = generateMarkupForStack(toolTechnologies);

  return (
    <>
      <div className={styles.background}>
        <BackP5 />
      </div>

      <div className={styles.page}>
        <OpenMenu chemin={router.pathname} />
        <div className={styles.entete}>
          {"À propos"}
        </div>

        <div className={styles.separateur}>   </div>


        <div className={styles.description}>

          <div className={styles.category}>
            <div className={styles.capacities}>{frontEndMarkup}</div>

            <div className={styles.capacities}>{backEndMarkup}</div>

            <div className={styles.capacities}>{toolMarkup}</div>
          </div>

          <div className={styles.detail}>
          
            <div style={{ fontSize: "2rem" }}>
              Hello World ! Je m'appelle Emilien Giraud.
            </div>
            <div className={styles.downloadCV} onClick={() => handleDownloadCV()}>
            {"mon cv"}
            <div className={styles.fleche}>
              <ArrowDownwardRoundedIcon />
            </div>
          </div>

            <div className={styles.avatar}>
              <img src="emilien.jpeg" />
            </div>
            
            <br /> <br />
            Je suis développeur passionné avec 6 ans d'expérience dans le
            domaine, dont la dernière année dédiée spécifiquement au
            développement web et mobile. <br /> <br />
            Mon parcours dans le monde du développement a été guidé par une
            curiosité insatiable et un désir constant d'innover. J'aime
            particulièremenr le processus de création, depuis la
            conceptualisation jusqu'au peaufinage au pixel près, pour produire
            des sites web et des applications mobiles non seulement fonctionnels
            mais aussi esthétiquement plaisants. Mon attention aux détails et ma
            capacité à résoudre les problèmes de manière créative sont deux de
            mes plus grandes forces. <br /> <br />
            L'une de mes passions particulières est le "creative coding", une
            pratique qui me permet de fusionner l'art et la programmation pour
            créer des expériences visuelles uniques. Cela ne se limite pas à
            rendre les interfaces utilisateur attrayantes ; cela inclut
            également l'exploration de nouvelles manières d'interagir avec les
            utilisateurs et de présenter l'information de manière innovante. Je
            suis toujours à l'affût des dernières technologies et tendances dans
            le domaine du développement web et mobile, ce qui me permet de
            rester à jour et d'intégrer de nouvelles idées dans mes projets.
            Travailler en équipe sur des projets complexes m'anime
            particulièrement, car cela offre une opportunité d'apprendre des
            autres, de partager des connaissances et de surmonter ensemble des
            défis. <br /> <br />
            Je vous invite à parcourir mon portfolio pour découvrir certains de
            mes travaux. N'hésitez pas à me contacter si mon profil correspond à
            ce que vous recherchez pour votre équipe ou si vous avez une
            opportunité qui pourrait correspondre à mes compétences et à mes
            passions. J'attends avec impatience l'opportunité de contribuer à
            des projets passionnants et de continuer à évoluer dans ce domaine
            dynamique et en constante évolution.
          </div>
        </div>
      </div>
    </>
  );
}
