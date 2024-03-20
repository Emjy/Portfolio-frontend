import React from 'react'
import Link from 'next/link';


// Style
import styles from '../styles/Footer.module.css';

// Material UI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function Footer() {
  return (
      <div className={styles.contactIcons}>
          <Link href="https://www.linkedin.com/in/emilien-giraud-8042b98b/">
              <LinkedInIcon className={styles.icon} />
          </Link>
          <Link href="mailto:emiliengir@gmail.com?subject=Bonjour">
              <MailRoundedIcon className={styles.icon} />
          </Link>
          <Link href="tel:0760330259">
              <PhoneIphoneRoundedIcon className={styles.icon} />
          </Link>
          <Link href="https://github.com/Emjy">
              <GitHubIcon className={styles.icon} />
          </Link>
      </div>
  )
}
