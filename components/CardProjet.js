import React from 'react'

// Styles 
import styles from '../styles/CardProject.module.css';


export default function CardProjet(props) {
    return (

            <div className={styles.page}>
                {props.projet &&
                    <>

                        <div className={styles.containerImage} style={{ opacity: props.isHovered ? '1' : '0', transition: 'opacity 0.5s ease-in-out' }}>
                            <div className={styles.stack}>
                                {props.projet.stack.join(', ')}
                            </div>
                            <img src={props.projet.photo} className={styles.image} alt="" />
                        </div>
                    </>
                }
            </div>


    )
}
