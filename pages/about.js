import React from 'react'

// Styles
import styles from '../styles/About.module.css';

// Components
import OpenMenu from '../components/OpenMenu';
import BackP5 from '../components/HomePage/Background';

// Material UI 
import LinearProgress from '@mui/material/LinearProgress';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';


export default function about() {


    // Fonctio nde download du CV
    const handleDownloadCV = () => {
        window.open('/CV_EG.pdf', '_blank');
    }

    // Data 
    const capacitiesData = [
        { name: 'React.js', pct: 75 },
        { name: 'React Native.js', pct: 75 },
        { name: 'HTML/CSS', pct: 80, },
        { name: 'Next.js', pct: 100, },
        { name: 'Express.js', pct: 90, },
        { name: 'Swift', pct: 90, },
        { name: 'SwiftUI', pct: 75, },
        { name: 'RPG/CL', pct: 100, },
        { name: 'SQL', pct: 90, },
        { name: 'NoSQL', pct: 75, },
        { name: 'Adelia', pct: 100, },
    ]

    // Mapping des compétences 
    const capacities = capacitiesData.map((item, index) => {
        return (
            <div className={styles.capacities}>
                {item.name}
                <LinearProgress
                    variant="determinate"
                    value={item.pct}
                    style={{ height: '3px', width: '120px', borderRadius: '20px', backgroundColor: 'lightgrey', opacity: 1 }}
                    sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#DE8F6E' }, }}
                />
            </div>

        )
    })

    return (

        <>

            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>

                <OpenMenu />

                <div className={styles.description}>

                    <div className={styles.title}>
                        {'A propos'}
                        <div className={styles.downloadCV} onClick={() => handleDownloadCV()}>
                            {'mon cv'}
                            <div className={styles.fleche}>
                                <ArrowDownwardRoundedIcon />

                            </div>
                        </div>
                    </div>

                    <div className={styles.bars}>
                        {capacities}
                    </div>

                    <div className={styles.separateur}>
                        {' '}
                    </div>

                    <div className={styles.detail}>

                        <div style={{fontSize:'40px'}} >
                            Hello World ! Je m'appelle Emilien Giraud.
                        </div>

                        <br /> <br />
                        Je suis développeur passionné avec 6 ans d'expérience dans le domaine,
                        dont la dernière année dédiée spécifiquement au développement web et mobile.  <br /> <br />

                        Mon parcours dans le monde du développement a été guidé par une curiosité insatiable
                        et un désir constant d'innover. J'aime particulièremenr le processus de création,
                        depuis la conceptualisation jusqu'au peaufinage au pixel près, pour produire
                        des sites web et des applications mobiles non seulement fonctionnels
                        mais aussi esthétiquement plaisants. Mon attention aux détails et ma capacité
                        à résoudre les problèmes de manière créative sont deux de mes plus grandes forces.  <br /> <br />
                        L'une de mes passions particulières est le "creative coding",
                        une pratique qui me permet de fusionner l'art et la programmation
                        pour créer des expériences visuelles uniques. Cela ne se limite pas à rendre les
                        interfaces utilisateur attrayantes ; cela inclut également l'exploration de nouvelles
                        manières d'interagir avec les utilisateurs et de présenter l'information
                        de manière innovante. Je suis toujours à l'affût des dernières technologies
                        et tendances dans le domaine du développement web et mobile, ce qui me permet de
                        rester à jour et d'intégrer de nouvelles idées dans mes projets.
                        Travailler en équipe sur des projets complexes m'anime particulièrement,
                        car cela offre une opportunité d'apprendre des autres,
                        de partager des connaissances et de surmonter ensemble des défis. <br /> <br />
                        Je vous invite à parcourir mon portfolio pour découvrir certains de mes travaux.
                        N'hésitez pas à me contacter si mon profil correspond à ce que vous recherchez
                        pour votre équipe ou si vous avez une opportunité qui pourrait correspondre à mes
                        compétences et à mes passions. J'attends avec impatience l'opportunité de contribuer
                        à des projets passionnants et de continuer à évoluer dans ce domaine dynamique et en
                        constante évolution.

                    </div>

                </div>

                <div className={styles.avatar}>
                    <img src='emilien.jpeg' />
                </div>

            </div>



        </>

    )
}
