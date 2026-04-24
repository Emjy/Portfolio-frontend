import { projects } from '../../data/projects';
import styles from '../../styles/Projets.module.css';
import bgStyles from '../../styles/PageBg.module.css';
import ParticleBackground from '../../components/ParticleBackground';
import ProjetsGrid from '../../components/ProjetsGrid';

export const metadata = { title: 'Projets — Emilien G.' };

export default function Projets() {
  return (
    <>
      <div className={bgStyles.bg}>
        <ParticleBackground subtle />
      </div>
      <main className={styles.page}>
        <header className={styles.header}>
          <span className={styles.slash}>//</span>
          projets
        </header>
        <ProjetsGrid projects={projects} />
      </main>
    </>
  );
}
