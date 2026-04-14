'use client';

import React, { useEffect, useRef } from 'react';

/**
 * @param {Object}  props
 * @param {boolean} [props.subtle=false]  — version allégée pour les pages intérieures
 */
const ParticleSketch = ({ subtle = false }) => {
  const containerRef = useRef();

  useEffect(() => {
    const p5 = require('p5');

    const sketch = (p) => {
      // Position + vitesse de la souris pour détecter le mouvement
      let mouse = { x: -9999, y: -9999, vx: 0, vy: 0 };

      /* ─── Particule ─────────────────────────────── */
      class Particle {
        constructor() {
          this.reset();
          this.x = p.random(p.width);
          this.y = p.random(p.height);
        }

        reset() {
          this.x   = p.random(p.width);
          this.y   = p.random(p.height);
          this.r   = p.random(1.5, subtle ? 3 : 4);
          this.vx  = p.random(-0.3, 0.3);
          this.vy  = p.random(-0.3, 0.3);
          this.bvx = this.vx;
          this.bvy = this.vy;
        }

        draw() {
          p.noStroke();
          p.fill(subtle
            ? 'rgba(99, 102, 241, 0.55)'
            : 'rgba(99, 102, 241, 0.9)');
          p.circle(this.x, this.y, this.r);
        }

        move() {
          const dx   = this.x - mouse.x;
          const dy   = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const R = subtle ? 70 : 150;

          // Vitesse de déplacement de la souris (magnitude)
          const mouseSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
          // Seuil : au-delà, la souris "relâche" les particules
          const releaseThreshold = subtle ? 6 : 8;
          const capturing = mouseSpeed < releaseThreshold;

          // Zone d'attraction : juste au-delà du cercle
          const nearR = R * 1.4;

          if (capturing && dist > 0) {
            if (dist < R) {
              // Dans le cercle : mouvement libre, légère répulsion du bord
              const margin = R * 0.12;
              if (dist > R - margin) {
                const push = ((dist - (R - margin)) / margin) * 0.6;
                this.vx -= (dx / dist) * push;
                this.vy -= (dy / dist) * push;
              }
              this.vx = this.vx * 0.96 + this.bvx * 0.04;
              this.vy = this.vy * 0.96 + this.bvy * 0.04;
            } else if (dist < nearR) {
              // Anneau proche : attraction douce vers l'intérieur
              const pull = ((nearR - dist) / (nearR - R)) * 0.4;
              this.vx -= (dx / dist) * pull;
              this.vy -= (dy / dist) * pull;
              this.vx = this.vx * 0.94 + this.bvx * 0.06;
              this.vy = this.vy * 0.94 + this.bvy * 0.06;
            } else {
              // Loin : dérive normale, pas d'attraction
              this.vx = this.vx * 0.92 + this.bvx * 0.08;
              this.vy = this.vy * 0.92 + this.bvy * 0.08;
            }
          } else {
            // Souris rapide : dérive normale partout
            this.vx = this.vx * 0.92 + this.bvx * 0.08;
            this.vy = this.vy * 0.92 + this.bvy * 0.08;
          }

          const maxSpeed = 4;
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > maxSpeed) { this.vx *= maxSpeed / speed; this.vy *= maxSpeed / speed; }

          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > p.width)  this.bvx *= -1;
          if (this.y < 0 || this.y > p.height) this.bvy *= -1;
          this.x = p.constrain(this.x, 0, p.width);
          this.y = p.constrain(this.y, 0, p.height);
        }

        connectParticles(others) {
          // Distance de constellation plus grande pour des traits bien visibles
          const MAX_DIST = subtle ? 80 : 140;
          for (const o of others) {
            const d = p.dist(this.x, this.y, o.x, o.y);
            if (d < MAX_DIST) {
              const alpha = (1 - d / MAX_DIST) * (subtle ? 0.25 : 0.45);
              p.stroke(`rgba(99,102,241,${alpha.toFixed(3)})`);
              p.strokeWeight(subtle ? 0.6 : 0.8);
              p.line(this.x, this.y, o.x, o.y);
            }
          }
        }

        connectMouse() {
          const mouseSpeed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
          if (mouseSpeed > (subtle ? 6 : 8)) return; // pas de lien si la souris bouge vite
          const d = p.dist(this.x, this.y, mouse.x, mouse.y);
          const R = subtle ? 100 : 160;
          if (d < R) {
            const alpha = (1 - d / R) * 0.4;
            p.stroke(`rgba(99,102,241,${alpha.toFixed(3)})`);
            p.strokeWeight(0.7);
            p.line(this.x, this.y, mouse.x, mouse.y);
          }
        }
      }

      /* ─── Setup ─────────────────────────────────── */
      let particles = [];

      p.setup = () => {
        const cnv = p.createCanvas(window.innerWidth, window.innerHeight);
        cnv.parent(containerRef.current);
        p.pixelDensity(1);
        p.frameRate(40);

        // Moins de particules → effet constellation plus lisible
        const count = subtle
          ? Math.floor(p.width / 14)
          : Math.floor(p.width / 9);
        for (let i = 0; i < count; i++) particles.push(new Particle());
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };

      /* ─── Draw ──────────────────────────────────── */
      p.draw = () => {
        p.background('#f5f4ef');

        for (let i = 0; i < particles.length; i++) {
          particles[i].connectParticles(particles.slice(i + 1));
          particles[i].connectMouse();
          particles[i].draw();
          particles[i].move();
        }

        // Décroissance naturelle de la vitesse souris (inertie)
        mouse.vx *= 0.8;
        mouse.vy *= 0.8;
      };

      /* ─── Souris ─────────────────────────────────── */
      p.mouseMoved = () => {
        mouse.vx = p.mouseX - mouse.x;
        mouse.vy = p.mouseY - mouse.y;
        mouse.x  = p.mouseX;
        mouse.y  = p.mouseY;
      };
      p.mouseDragged = () => {
        mouse.vx = p.mouseX - mouse.x;
        mouse.vy = p.mouseY - mouse.y;
        mouse.x  = p.mouseX;
        mouse.y  = p.mouseY;
      };
    };

    const myp5 = new p5(sketch);
    return () => myp5.remove();
  }, [subtle]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ParticleSketch;
