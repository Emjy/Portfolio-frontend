'use client';

import dynamic from 'next/dynamic';

const Background = dynamic(
  () => import('./HomePage/Background'),
  { ssr: false, loading: () => null }
);

export default function ParticleBackground({ subtle = false }) {
  return <Background subtle={subtle} />;
}
