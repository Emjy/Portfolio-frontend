import React from 'react'
import { useRouter } from 'next/router';

// Style
import styles from '../styles/MenuList.module.css';

// Material UI
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Components


export default function MenuList() {

    const router = useRouter();

    const menuData = [
        { number: '01', name: 'Accueil', router: '/' },
        { number: '02', name: 'Projets', router: '/projets' },
        { number: '03', name: 'A propos', router: '/about' },
        // { number: '04', name: 'Contact', router: '/' }
    ]

    const menu = menuData.map((menu, index) => {
        return (
            <div
                key={index}
                className={styles.menuItem}
                onClick={() => router.push(menu.router)}
                style={{ animationDelay: `${index * 0.05}s` }}
            >
                <div className={styles.menuNumber}>
                    {menu.number}
                </div>
                <div className={styles.menuName}>
                    {menu.name}
                </div>
            </div>
        );
    })


    return (
        <>

            <div className={styles.closeIcon}>
                <CloseRoundedIcon className={styles.icon} onClick={() => router.push('./')} />
            </div>

            <div className={styles.menu}>
                {menu}
            </div>

        </>
    )
}
