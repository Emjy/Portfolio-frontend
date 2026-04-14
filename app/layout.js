import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Emilien G. — Développeur Web & Mobile',
  description: 'Portfolio — React, Next.js, Go, Swift.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
