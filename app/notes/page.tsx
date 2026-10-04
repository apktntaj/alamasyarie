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
          <p className="eyebrow">Notes</p>
          <h1 className="title">Short notes from ongoing study.</h1>
          <p className="subtitle">
            In-progress observations from learning computer science, building software, and following ideas
            before they are fully formed.
          </p>
        </div>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-card">
              <h3>
                <Link href={`/notes/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.date ? (
                <div className="metadata">
                  <span>Tanggal</span>
                  <span>{post.date}</span>
                </div>
              ) : null}
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
