import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="header container">
      <div>
        <p style={{ margin: 0, fontWeight: 700, letterSpacing: '0.04em' }}>Alam Asya'rie</p>
        <p style={{ margin: 0, color: '#91a8cc' }}>Situs personal untuk blog dan notes.</p>
      </div>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/notes">Notes</Link>
      </nav>
    </header>
  );
}
