'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function HeroContent() {
  return (
    <motion.div
      className={styles.hero}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p className={styles.greeting} variants={item}>
        salut, je suis
      </motion.p>

      <motion.h1 className={styles.name} variants={item}>
        {'< EMILIEN G. />'}
        <span className={styles.cursor} />
      </motion.h1>

      <motion.p className={styles.role} variants={item}>
        développeur web & mobile
      </motion.p>

      <motion.div className={styles.cta} variants={item}>
        <Link href="/projets" className={styles.btnPrimary}>
          mes projets →
        </Link>
        <Link href="/contact" className={styles.btnOutline}>
          me contacter
        </Link>
      </motion.div>
    </motion.div>
  );
}
