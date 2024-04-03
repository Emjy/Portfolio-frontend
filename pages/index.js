import React from 'react';
import { useRouter } from 'next/router';

// Style
import styles from '../styles/Home.module.css';

// Composants internes
import BackP5 from '../components/HomePage/Background';
import Footer from '../components/Footer';
import OpenMenu from '../components/OpenMenu';

// MaterialUI
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function Index() {

  const router = useRouter();

  return (
    <>

      <div className={styles.background}>
        <BackP5 />
      </div>

      <div className={styles.page}>

        <OpenMenu />

        <div>

        </div>

        <div className={styles.text}>

          <div className={styles.presentation}>
            {'salut, je suis '}
            <div className={styles.name}>
              {'< EMILIEN />'}
            </div>
          </div>

          <div className={styles.subText}>
            {'DÉVELOPPEUR WEB & MOBILE'}
            <div className={styles.links} onClick={() => router.push('./menu')}>
              <ArrowForwardRoundedIcon />
            </div>

          </div>



        </div>


        <Footer />

      </div>


    </>
  )
}
