import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alam Asy'arie",
  description: 'Personal site dengan home, blog, dan notes menggunakan Next.js dan Markdown.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
