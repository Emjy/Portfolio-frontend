import { projects } from '../../data/projects';
import styles from '../../styles/Projets.module.css';
import bgStyles from '../../styles/PageBg.module.css';
import ParticleBackground from '../../components/ParticleBackground';
import CardVisual from '../../components/CardVisual';

export const metadata = { title: 'Projets — Emilien G.' };

const GRADIENTS = [
  'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
  'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
  'linear-gradient(135deg, #6366f1 0%, #10b981 100%)',
  'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
];

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

        <div className={styles.grid}>
          {projects.map((project, i) => {
            const card = (
              <article className={styles.card}>
                <CardVisual
                  images={project.images ?? []}
                  gradient={GRADIENTS[i % GRADIENTS.length]}
                >
                  <div className={styles.overlay}>
                    <p className={styles.overlayDesc}>{project.description}</p>
                    {project.link && (
                      <span className={styles.overlayLink}>Voir le projet ↗</span>
                    )}
                  </div>
                </CardVisual>

                <div className={styles.info}>
                  <div className={styles.infoTop}>
                    <span className={styles.year}>{project.year}</span>
                    {project.collabs && project.collabs.length > 0 && (
                      <span className={styles.collabs}>
                        + {project.collabs.length} collab{project.collabs.length > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                  <h2 className={styles.name}>{project.projectName}</h2>
                  <div className={styles.tags}>
                    {project.tech.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            );

            return project.link ? (
              <a
                key={project.slug}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                {card}
              </a>
            ) : (
              <div key={project.slug}>{card}</div>
            );
          })}
        </div>
      </main>
    </>
  );
}
