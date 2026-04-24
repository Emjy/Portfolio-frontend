'use client';

import { useParams, notFound } from 'next/navigation';
import { useRef } from 'react';
import { projects } from '../../../data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from '../../../styles/ProjetDetail.module.css';
import bgStyles from '../../../styles/PageBg.module.css';
import ParticleBackground from '../../../components/ParticleBackground';

const GRADIENTS = [
  'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
  'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
  'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function Img({ src, gradient, className, alt = '' }) {
  if (src) {
    return <img src={src} alt={alt} className={`${styles.img} ${className ?? ''}`} />;
  }
  return <div className={`${styles.placeholder} ${className ?? ''}`} style={{ background: gradient }} />;
}

/* Bloc image + légende */
function ImgBlock({ src, gradient, caption, alt, className, wide }) {
  if (!src) return null;
  return (
    <motion.div
      className={`${styles.imgBlock} ${wide ? styles.imgBlockWide : ''}`}
      variants={fadeUp}
    >
      <Img src={src} gradient={gradient} className={className} alt={alt} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </motion.div>
  );
}

export default function ProjetDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const imgs = project.images  ?? [];
  const caps = project.captions ?? [];
  const idx  = projects.findIndex(p => p.slug === slug);
  const g    = (offset = 0) => GRADIENTS[(idx + offset) % GRADIENTS.length];
  const cap  = (i) => caps[i] || '';

  // Parallax hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0px', '220px']);

  return (
    <>
      <div className={bgStyles.bg}>
        <ParticleBackground subtle />
      </div>

      <div className={styles.page}>

        {/* ─── Hero : 1re image en cover pleine page ── */}
        <motion.div
          ref={heroRef}
          className={styles.hero}
          style={{
            background: imgs[0] ? `url(${imgs[0]}) top center/cover no-repeat` : g(0),
            backgroundPositionY: bgY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.heroOverlay} />
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <Link href="/projets" className={styles.backBtn}>← projets</Link>
            <div className={styles.heroMeta}>
              <span className={styles.heroYear}>{project.year}</span>
              {project.client && <span className={styles.heroClient}>{project.client}</span>}
            </div>
            <h1 className={styles.heroTitle}>{project.projectName}</h1>
            <div className={styles.heroTags}>
              {project.tech.map(t => <span key={t} className={styles.heroTag}>{t}</span>)}
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Corps ──────────────────────────── */}
        <div className={styles.body}>

          {/* Description */}
          <motion.section
            className={styles.descSection}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p className={styles.sectionLabel} variants={fadeUp}>// présentation</motion.p>
            <motion.p className={styles.longDesc} variants={fadeUp}>
              {project.longDescription || project.description}
            </motion.p>
            {project.link && (
              <motion.a
                href={project.link} target="_blank" rel="noopener noreferrer"
                className={styles.visitBtn} variants={fadeUp}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              >
                visiter le site ↗
              </motion.a>
            )}
          </motion.section>

          {/* Image 2 — pleine largeur */}
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: '-80px' }}
          >
            <ImgBlock src={imgs[1]} gradient={g(1)} caption={cap(1)} alt={`${project.projectName} aperçu`} />
          </motion.div>

          {/* Méta : client + collabs + stack */}
          {(project.client || project.collabs?.length > 0) && (
            <motion.section
              className={styles.metaSection}
              variants={stagger} initial="hidden"
              whileInView="show" viewport={{ once: true, margin: '-60px' }}
            >
              {project.client && (
                <motion.div className={styles.metaBlock} variants={fadeUp}>
                  <span className={styles.metaLabel}>// client</span>
                  <span className={styles.metaValue}>{project.client}</span>
                </motion.div>
              )}
              {project.collabs?.length > 0 && (
                <motion.div className={styles.metaBlock} variants={fadeUp}>
                  <span className={styles.metaLabel}>// collaborateurs</span>
                  <div className={styles.collabList}>
                    {project.collabs.map(c => (
                      <a key={c} href={`https://github.com/${c}`} target="_blank" rel="noopener noreferrer" className={styles.collabChip}>
                        <span className={styles.collabAt}>@</span>{c}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
              <motion.div className={styles.metaBlock} variants={fadeUp}>
                <span className={styles.metaLabel}>// stack</span>
                <div className={styles.techList}>
                  {project.tech.map(t => <span key={t} className={styles.techPill}>{t}</span>)}
                </div>
              </motion.div>
            </motion.section>
          )}

          {/* Galerie : images 3 à 6, avec légendes */}
          <motion.div
            className={styles.gallery}
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: '-60px' }}
          >
            {[2, 3, 4, 5].map((imgIdx, i) => (
              <ImgBlock
                key={i}
                src={imgs[imgIdx]}
                gradient={g(i + 2)}
                caption={cap(imgIdx)}
                alt={`${project.projectName} ${i + 1}`}
                wide={i === 0}
              />
            ))}
          </motion.div>

          {/* Image finale pleine largeur */}
          <motion.div
            variants={stagger} initial="hidden"
            whileInView="show" viewport={{ once: true, margin: '-80px' }}
          >
            <ImgBlock src={imgs[6]} gradient={g(3)} caption={cap(6)} alt={`${project.projectName} final`} />
          </motion.div>

          {/* Nav bas */}
          <motion.div
            className={styles.bottomNav}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/projets" className={styles.backBtnBottom}>← tous les projets</Link>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.visitBtnBottom}>
                visiter le site ↗
              </a>
            )}
          </motion.div>

        </div>
      </div>
    </>
  );
}
