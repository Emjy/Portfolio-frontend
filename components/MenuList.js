import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { changeNavigation } from "../reducers/navigation";

// Style
import styles from '../styles/MenuList.module.css';

// Material UI
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// Components


export default function MenuList() {

    const router = useRouter('./');
    const path = useSelector((state) => state.navigation.value);

    const dispatch = useDispatch();
    
    const navigate = (path) => {
        dispatch(changeNavigation(path));
        router.push(path)
    };

    const [chemin, setChemin] = useState('./');

    const menuData = [
        { number: '01', name: 'Accueil', router: '/' },
        { number: '02', name: 'Projets', router: '/projets' },
        { number: '03', name: 'À-propos', router: '/about' },
        { number: '04', name: 'Contact', router: '/contact' }
    ]

    const menu = menuData.map((menu, index) => {
        return (
            <div
                key={index}
                className={styles.menuItem}
                onClick={() => navigate(menu.router)}
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
                <CloseRoundedIcon className={styles.icon} onClick={() => router.push(path)} />
            </div>

            <div className={styles.menu}>
                {menu}
            </div>

        </>
    )
}
