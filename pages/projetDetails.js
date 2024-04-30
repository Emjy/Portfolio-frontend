import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";


// Styles
import styles from "../styles/ProjetDetails.module.css";

// Cmponents
import OpenMenu from "../components/OpenMenu";
import BackP5 from "../components/HomePage/Background";
import Title from '../components/Title';

export default function projetDetails() {

    const router = useRouter();
    const { id } = router.query; // Extraction de l'ID

    const [project, setProject] = useState({});

    // Fetch des projets 
    useEffect(() => {
        fetch(`https://portfolio-backend-zeta-sandy.vercel.app/projets/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    setProject(data.projet)
                }
            });
    }, [id]);

    const screens = project.screens?.map((item, index) => {
        return (
            <div className={styles.screenContainer} key={index}>
                <img src={item.image} className={styles.screenImage} alt={`Screen ${index}`} />
            </div>
        );
    });

    return (
        <>
            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>

                <Title title={project.projectName} />

                <div className={styles.logoContainer}>
                    <img src={project.logo} className={styles.logo} />
                </div>
                <div className={styles.story}>
                    {project.story}
                </div>
                <div className={styles.container}>
                
                    <div className={styles.screens}>
                        {screens}
                    </div>
                </div>

            </div>
        </>
    );
}
