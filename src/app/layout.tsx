import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'San Martin\'s Bridge | Toledo, Spain',
  description: 'Complete guide to San Martin\'s Bridge: 14th-century pedestrian bridge with spectacular Tagus River views, Gothic architecture and medieval history.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
