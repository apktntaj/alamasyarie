import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: 'Notes | Alamasyarie',
};

export default function NotesPage() {
  const posts = getAllPosts('notes');

  return (
    <main>
      <SiteHeader />
      <section className="container">
        <div className="card">
          <h1 className="title">Notes</h1>
          <p className="subtitle">Catatan singkat dan insight singkat yang saya kumpulkan setiap hari.</p>
        </div>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-card">
              <h3>
                <Link href={`/notes/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="metadata">
                <span>Tanggal</span>
                <span>{post.date}</span>
              </div>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
