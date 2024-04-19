import React from 'react'

// Styles
import styles from "../styles/Title.module.css";

export default function Title(props) {
    return (
        <>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.separateur}> </div>
        </>

    )
}
