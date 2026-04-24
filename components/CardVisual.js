'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/CardVisual.module.css';

export default function CardVisual({ images = [], gradient, children }) {
  const [current, setCurrent] = useState(0);
  const hasImages = images.length > 0;

  useEffect(() => {
    if (!hasImages || images.length < 2) return;
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [hasImages, images.length]);

  return (
    <div className={styles.wrap}>
      {hasImages ? (
        <AnimatePresence mode="crossfade">
          <motion.div
            key={current}
            className={styles.layer}
            style={{ backgroundImage: `url(${images[current]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      ) : (
        <div className={styles.layer} style={{ background: gradient }} />
      )}

      {hasImages && images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            />
          ))}
        </div>
      )}

      {children}
    </div>
  );
}
