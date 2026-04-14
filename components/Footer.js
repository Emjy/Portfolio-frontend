import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://www.linkedin.com/in/emilien-giraud-8042b98b/" target="_blank" aria-label="LinkedIn">
        <LinkedInIcon className={styles.icon} />
      </Link>
      <Link href="mailto:emiliengir@gmail.com" aria-label="Email">
        <MailRoundedIcon className={styles.icon} />
      </Link>
      <Link href="https://github.com/Emjy" target="_blank" aria-label="GitHub">
        <GitHubIcon className={styles.icon} />
      </Link>
    </footer>
  );
}
