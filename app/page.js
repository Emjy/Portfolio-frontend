import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import HeroContent from '../components/HeroContent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.bg}>
        <ParticleBackground />
      </div>

      <main className={styles.page}>
        <HeroContent />
        <Footer />
      </main>
    </>
  );
}
