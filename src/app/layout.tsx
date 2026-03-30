import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ibiza Harbour | Port d\'Eivissa',
  description: 'Complete guide to Ibiza Harbour (Port d\'Eivissa). Hours, directions, photos and reviews.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
