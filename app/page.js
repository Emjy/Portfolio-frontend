import Link from 'next/link';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.bg}>
        <ParticleBackground />
      </div>

      <main className={styles.page}>
        <div className={styles.hero}>
          <p className={styles.greeting}>salut, je suis</p>

          <h1 className={styles.name}>
            {'< EMILIEN G. />'}
            <span className={styles.cursor} />
          </h1>

          <p className={styles.role}>développeur web & mobile</p>

          <div className={styles.cta}>
            <Link href="/projets" className={styles.btnPrimary}>
              mes projets →
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              me contacter
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
