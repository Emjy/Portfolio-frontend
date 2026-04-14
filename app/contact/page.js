'use client';

import { useState } from 'react';
import styles from '../../styles/Contact.module.css';
import bgStyles from '../../styles/PageBg.module.css';
import ParticleBackground from '../../components/ParticleBackground';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Formulaire incomplet.');
      return;
    }
    try {
      const res = await fetch(
        'https://portfolio-backend-zeta-sandy.vercel.app/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name:      form.name,
            firstName: '',
            society:   '',
            tel:       '',
            mail:      form.email,
            message:   form.message,
          }),
        }
      );
      const data = await res.json();
      if (data.result) {
        setForm({ name: '', email: '', message: '' });
        setStatus('Message envoyé.');
      } else {
        setStatus('Erreur, réessayez.');
      }
    } catch {
      setStatus('Erreur réseau.');
    }
  };

  return (
    <>
      <div className={bgStyles.bg}>
        <ParticleBackground subtle />
      </div>
    <main className={styles.page} style={{ position: 'relative', zIndex: 1 }}>
      <header className={styles.header}>
        <span className={styles.slash}>//</span>
        contact
      </header>

      <div className={styles.content}>
        <h2 className={styles.tagline}>Dites bonjour.</h2>
        <p className={styles.sub}>
          Une question, une opportunité, ou juste envie d'échanger ?
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>nom</span>
              <input
                name="name"
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
                className={styles.input}
                autoComplete="name"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>email</span>
              <input
                name="email"
                type="email"
                placeholder="votre@email.com"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                autoComplete="email"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>message</span>
            <textarea
              name="message"
              placeholder="Votre message..."
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={5}
            />
          </label>

          <div className={styles.submitRow}>
            <button type="submit" className={styles.btn}>
              envoyer →
            </button>
            {status && (
              <span
                className={`${styles.status} ${
                  status.includes('envoyé') ? styles.success : styles.error
                }`}
              >
                {status}
              </span>
            )}
          </div>
        </form>
      </div>
    </main>
    </>
  );
}
