'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/CardVisual.module.css';

export default function CardVisual({ images = [], gradient, children }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [fading, setFading]   = useState(false);

  const hasImages = images.length > 0;

  useEffect(() => {
    if (!hasImages || images.length < 2) return;
    const id = setInterval(() => {
      setPrev(current);
      setFading(true);
      setCurrent(c => (c + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [current, hasImages, images.length]);

  // Fin de la transition : on efface le calque "prev"
  const handleTransitionEnd = () => {
    setPrev(null);
    setFading(false);
  };

  return (
    <div className={styles.wrap}>
      {/* Calque de base : gradient ou première image */}
      <div
        className={styles.layer}
        style={{ background: hasImages ? `url(${images[current]}) center/cover no-repeat` : gradient }}
      />

      {/* Calque précédent qui s'efface (fade out) */}
      {hasImages && prev !== null && (
        <div
          className={`${styles.layer} ${fading ? styles.fadeOut : ''}`}
          style={{ background: `url(${images[prev]}) center/cover no-repeat` }}
          onTransitionEnd={handleTransitionEnd}
        />
      )}

      {/* Indicateurs de position */}
      {hasImages && images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <span key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} />
          ))}
        </div>
      )}

      {children}
    </div>
  );
}
