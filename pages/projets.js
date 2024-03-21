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
        { projectName: 'LabUp', stack: ['react.js'], collabs: ['Emilien Giraud', 'Karl Chareyre', 'Nicolas Roulleau', 'Théo Siriex'], year: '2024', photo: 'labup.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'PokeSounds', stack: ['reactNative.js'], collabs: ['Emilien Giraud'], year: '2024', photo: 'pokesound.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'HackaTweet', stack: ['react.js', 'express.js'], collabs: ['Emilien Giraud', 'Nicolas Nguyen'], year: '2024', photo: 'hackatweet.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'TicketHack', stack: ['react.js'], collabs: ['Emilien Giraud', 'Karl Chareyre'], year: '2024', photo: 'tickethack.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'EtiK', stack: ['swiftUI'], collabs: ['Emilien Giraud'], year: '2023', photo: 'etik0.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'myEcoTribe', stack: ['swiftUI'], collabs: ['Emilien Giraud'], year: '2023', photo: 'myecotribe.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
    ]

    // mapping des data projets
    const projects = projectList.map((item, index) => {
        console.log(item)

        return (
            <div key={index}>
                <div className={styles.year}>
                    {item.year}
                </div>

                <Link href={item.link} target="_blank">
                    <div className={styles.projectName}
                        onMouseEnter={() => handleHover(item)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        {item.projectName}
                    </div>
                </Link>

                <div className={styles.projectCollabs}>
                    {item.collabs.join(', ')}
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

                <div className={styles.rightContainer}> 
                    {projet && <img src={projet.photo} className={styles.photo} alt="" style={{ opacity: isHovered ? '1' : '0', transition: 'opacity 0.5s ease-in-out'}} />}
 
                </div>

            </div>



        </>


    );
}

