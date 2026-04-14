'use client';

import dynamic from 'next/dynamic';

const IconCloud = dynamic(
  () => import('./IconCloud'),
  { ssr: false, loading: () => null }
);

export default function CloudWrapper({ iconSlugs }) {
  return <IconCloud iconSlugs={iconSlugs} />;
}
