'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const links = [
  { href: '/projets',  label: 'projets'   },
  { href: '/about',    label: 'à propos'  },
  { href: '/contact',  label: 'contact'   },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
        {'< EG />'}
      </Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile burger */}
      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className={styles.overlay}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.overlayLink} ${pathname === href ? styles.overlayActive : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
