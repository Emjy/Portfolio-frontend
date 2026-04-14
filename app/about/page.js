import styles from '../../styles/About.module.css';
import bgStyles from '../../styles/PageBg.module.css';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import CloudWrapper from '../../components/CloudWrapper';
import ParticleBackground from '../../components/ParticleBackground';

export const metadata = { title: 'À propos — Emilien G.' };

const skills = {
  Frontend: ['React', 'React Native', 'Next.js', 'HTML / CSS'],
  Backend:  ['Go', 'Python', 'Node.js', 'Swift / SwiftUI', 'RPG / CL', 'SQL', 'PostgreSQL'],
  Outils:   ['AWS ECS', 'Git', 'Figma', 'VSCode', 'Xcode', 'Docker', 'Vercel'],
};

const iconSlugs = [
  'react', 'nextdotjs', 'html5', 'css3',
  'swift', 'express', 'mongodb', 'postgresql',
  'git', 'github', 'figma', 'vercel', 'xcode', 'vscode',
];

export default function About() {
  return (
    <>
      <div className={bgStyles.bg}>
        <ParticleBackground subtle />
      </div>
    <main className={styles.page} style={{ position: 'relative', zIndex: 1 }}>
      <header className={styles.header}>
        <span className={styles.slash}>//</span>
        à propos
      </header>

      {/* ─── Bio ───────────────────────────── */}
      <section className={styles.bio}>
        <div className={styles.bioText}>
          <h2 className={styles.bioTitle}>Hello World !</h2>

          <p>
            J'ai commencé à coder il y a <strong>plus de 10 ans</strong>, en
            tant que développeur <em>IBMi / AS400</em> dans le secteur bancaire —
            RPG, CL, SQL, des systèmes critiques où la rigueur n'est pas
            optionnelle. Plusieurs années chez OCSI Group puis à la Banque Misr
            m'ont forgé une culture du code solide, orientée fiabilité et
            maintenabilité.
          </p>
          <p>
            En 2023, j'ai choisi de me reconvertir vers le web et le mobile.
            Formation iOS avec <em>Swift / SwiftUI</em> à l'Apple Foundation
            Program, puis bootcamp fullstack JavaScript à <em>La Capsule</em> —
            une reconversion voulue, pas subie.
          </p>
          <p>
            Depuis, je construis des produits web en tant que développeur et en
            freelance. Chez <strong>GottaPhish</strong>, je pilote la refonte
            frontend en <em>React / Next.js</em>, intègre des fonctionnalités LLM,
            conçois des APIs <em>GraphQL</em> et maintiens le backend <em>Go</em>.
            En mission, j'accompagne des clients sur de la refonte UI, de la
            gamification et de l'intégration d'APIs — React, TypeScript,
            React Native.
          </p>
          <p>
            10 ans de dev au compteur, 3 ans sur le web. Le background
            bancaire en moins, la rigueur est restée.
          </p>

          <a href="/CV_EG.pdf" target="_blank" className={styles.cvBtn}>
            mon cv
            <ArrowDownwardRoundedIcon style={{ fontSize: '1rem' }} />
          </a>
        </div>

        <div className={styles.bioSide}>
          <div className={styles.avatar}>
            <img src="/emilien.jpeg" alt="Emilien Giraud" />
          </div>
          <div className={styles.cloud}>
            <CloudWrapper iconSlugs={iconSlugs} />
          </div>
        </div>
      </section>

      {/* ─── Skills ────────────────────────── */}
      <section className={styles.skills}>
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className={styles.skillCol}>
            <h3 className={styles.skillCat}>{cat}</h3>
            <ul className={styles.skillList}>
              {items.map(s => (
                <li key={s} className={styles.skillItem}>#{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
    </>
  );
}
