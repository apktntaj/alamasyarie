import Link from 'next/link';
import SiteHeader from './components/SiteHeader';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="container">
        <div className="card">
          <h1 className="title">Halo, saya Alam Asya'rie</h1>
          <p className="subtitle">
            Ini adalah situs pribadi saya dengan halaman Home, Blog, dan Notes. Blog berisi tulisan panjang,
            sementara Notes berisi catatan singkat dan TIL.
          </p>
        </div>
        <div className="grid" style={{ marginTop: '2rem' }}>
          <article className="card">
            <h2>Blog</h2>
            <p>Tulisan panjang tentang berbagai topik, opini, dan pengalaman.</p>
            <Link href="/blog">Buka blog →</Link>
          </article>
          <article className="card">
            <h2>Notes</h2>
            <p>Catatan singkat, insight, dan TIL terbaru saya.</p>
            <Link href="/notes">Buka notes →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
