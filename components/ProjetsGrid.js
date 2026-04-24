'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CardVisual from './CardVisual';
import styles from '../styles/Projets.module.css';

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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ProjetsGrid({ projects }) {
  return (
    <motion.div
      className={styles.grid}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, i) => {
        const inner = (
          <motion.article
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {/* Zone image full-bleed */}
            <div className={styles.visual}>
              <CardVisual
                images={project.images ?? []}
                gradient={GRADIENTS[i % GRADIENTS.length]}
              />
              {/* Overlay description au hover */}
              <div className={styles.overlay}>
                <p className={styles.overlayDesc}>{project.description}</p>
                <span className={styles.overlayLink}>voir le projet →</span>
              </div>
            </div>

            {/* Titre + méta sur fond neutre */}
            <div className={styles.infoBar}>
              <div className={styles.infoMeta}>
                <span className={styles.year}>{project.year}</span>
                {project.collabs?.length > 0 && (
                  <span className={styles.collabs}>
                    +{project.collabs.length} collab{project.collabs.length > 1 ? 's' : ''}
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
          </motion.article>
        );

        return (
          <Link
            key={project.slug}
            href={`/projets/${project.slug}`}
            className={styles.cardLink}
          >
            {inner}
          </Link>
        );
      })}
    </motion.div>
  );
}
