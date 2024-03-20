import React from 'react'

// Components
import MenuList from '../components/MenuList'
import BackP5 from '../components/HomePage/Background';


// Styles
import styles from '../styles/Menu.module.css';


export default function menu() {
    return (
        <>
            <div className={styles.background}>
                <BackP5 />
            </div>

            <div className={styles.page}>
                <MenuList />
            </div>

        </>

    )
}
