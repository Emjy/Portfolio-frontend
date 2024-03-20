import React, { useState } from 'react'
import Link from 'next/link';


// Cmponents
import CardProjet from '../components/CardProjet';
import OpenMenu from '../components/OpenMenu';
import BackP5 from '../components/HomePage/Background';

// MaterialUI

// Styles
import styles from '../styles/Projets.module.css';
import { imageListClasses } from '@mui/material';


export default function projets() {

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
        { projectName: 'LabUp', stack: ['react.js'], collabs: ['Emilien Giraud', 'Karl Chareyre', 'Nicolas Roulleau', 'Théo Siriex'], year: '2024', photo: 'emilien.jpeg', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'Hackatweet', stack: ['react.js', 'express.js'], collabs: ['Emilien Giraud', 'Nicolas Nguyen'], year: '2024', photo: 'hackatweet.png', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'TicketHack', stack: ['react.js'], collabs: ['Emilien Giraud', 'Karl Chareyre'], year: '2024', photo: 'pika.jpg', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'EtiK', stack: ['swiftUI'], collabs: ['Emilien Giraud'], year: '2023', photo: 'emilien.jpeg', link: 'https://hackatweet-frontend-bice.vercel.app/' },
        { projectName: 'myEcoTribe', stack: ['swiftUI'], collabs: ['Emilien Giraud'], year: '2023', photo: 'emilien.jpeg', link: 'https://hackatweet-frontend-bice.vercel.app/' },
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

                <OpenMenu />

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


            </div>
            <div>
                <CardProjet isHovered={isHovered} projet={projet} />
            </div>


        </>


    );
}

