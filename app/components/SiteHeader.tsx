import Link from 'next/link';

const navigation = [
  { href: '/', number: '00', label: 'Mulai' },
  { href: '/projects', number: '01', label: 'Pesisir' },
  { href: '/learning', number: '02', label: 'Belajar' },
  { href: '/blog', number: '03', label: 'Tulisan' },
  { href: '/about', number: '04', label: 'Tentang' },
];

export default function SiteHeader() {
  return (
    <header className="header container">
      <div>
        <p className="site-name">Alam Asy’arie</p>
        <p className="site-tagline">catatan dari meja belajar dan meja kerja</p>
      </div>
      <nav className="nav" aria-label="Main navigation">
        <ol className="nav-list">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span className="nav-number" aria-hidden="true">{item.number}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
