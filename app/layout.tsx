import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alam Asy’arie",
  description: 'Learning computer science by building software and writing in public.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
