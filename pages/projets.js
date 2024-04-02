import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';



// Cmponents
import OpenMenu from '../components/OpenMenu';
import BackP5 from '../components/HomePage/Background';

// MaterialUI

// Styles
import styles from '../styles/Projets.module.css';
import { imageListClasses } from '@mui/material';


export default function projets() {

    const router = useRouter();
    console.log(router.pathname)

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
            projectName: 'Portfolio François Giraud', stack: ['react.js'], collabs: ['Emilien Giraud'], year: '2024', photo: 'artPapa.png', link: '',
            desc: 'Réalisation du portfolio complet avec gestion et administration autonome des upload de fichiers',
            projet: 'Projet de portfolio pour François Giraud'
        },

        {
            projectName: 'LabUp', stack: ['react.js'], collabs: ['Emilien Giraud', 'Karl Chareyre', 'Nicolas Roulleau', 'Théo Siriex'], year: '2024', photo: 'labup.png', link: '',
            desc: 'LabUp est une plateforme de création de pattern de creative coding permettant de générer des supports de communications simples et uniques pour les jeunes artistes.',
            projet: 'Projet de fin d\'études, La Capsule'
        },
        {
            projectName: 'PokeSounds', stack: ['reactNative.js'], collabs: ['Emilien Giraud'], year: '2024', photo: 'pokesound.png', link: '',
            desc: 'PokeSounds est une application mobile permettant de jouer les sons les plus mythiques de la série de manga Pokemon',
            projet: 'Peojet personnel mettant à profit les connaissances en développement mobile'
        },
        {
            projectName: 'HackaTweet', stack: ['react.js', 'express.js'], collabs: ['Emilien Giraud', 'Nicolas Nguyen'], year: '2024', photo: 'hackatweet.png', link: '',
            desc: 'Hackatweet est une plateforme Twitter-like',
            projet: 'Hackathon, La capsule'
        },
        {
            projectName: 'TicketHack', stack: ['react.js'], collabs: ['Emilien Giraud', 'Karl Chareyre'], year: '2024', photo: 'tickethack.png', link: '',
            desc: 'TicketHack est une plateforme de réservation de train en ligne',
            projet: 'Hackathon, La Capsule'
        },
        {
            projectName: 'EtiK', stack: ['swiftUI'], collabs: ['Emilien Giraud'], year: '2023', photo: 'etik0.png', link: '',
            desc: 'Etik est une application mobile permettant de mettre en relation les jeunes créateurs de mode éthique et les consommateurs soucieux de la provenance de leurs produits',
            projet: 'Projet de fin d\'étude, Apple Foundation Program Extended'
        },
        {
            projectName: 'myEcoTribe', stack: ['swiftUI'], collabs: ['Emilien Giraud'], year: '2023', photo: 'myecotribe.png', link: '',
            desc: 'myEcotribe est une application mobile sociale permettant de réaliser et d\'apprendre les principaux écogestes pour un monde plus durable ',
            projet: 'Projet de fin d\'étude, Apple Foundation Program'
        },
    ]

    // mapping des data projets
    const projects = projectList.map((item, index) => {
        console.log(item)

        return (
            <div key={index}>
                <div className={styles.year}>
                    {item.year}
                    <div className={styles.projectCollabs}>
                        {item.collabs.join(', ')}
                    </div>
                </div>

                {/* <Link href={item.link} target="_blank"> */}
                <div className={styles.projectName}
                    onMouseEnter={() => handleHover(item)}
                    onMouseLeave={() => handleHover(null)}
                >
                    {item.projectName}
                </div>
                {/* </Link> */}


                <div className={styles.label}>
                    {item.projet}
                </div>

            </div>
        )

    })

    // Retour <jsx>
    return (
        <>

            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>

                <OpenMenu chemin={router.pathname} />

                <div className={styles.liste}>

                    <div className={styles.title}>
                        {'Projets'}
                    </div>

                    <div className={styles.separateur}>
                        {' '}
                    </div>

                    <div className={styles.listeProjets}>
                        {projects}
                    </div>

                </div>
                {projet &&
                    <div className={styles.rightContainer} style={{ opacity: isHovered ? '1' : '0', transition: 'opacity 0.5s ease-in-out' }}>

                        <img src={projet.photo} className={styles.photo} alt="" />
                        <div style={{width : '40vw', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                            {projet.desc}
                        </div>

                    </div>
                }

            </div>



        </>


    );
}

