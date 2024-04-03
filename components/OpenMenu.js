import React from 'react'
import { useRouter } from 'next/router';

// Styles
import styles from '../styles/OpenMenu.module.css';

// Material UI
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


export default function OpenMenu() {

    const router = useRouter();

    return (
        <div className={styles.menuIcon}>
            <MenuRoundedIcon  style={{ fontSize: '2em' }} onClick={() => router.push('./menu')} />
        </div>
    )
}
