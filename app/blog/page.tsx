import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: 'Blog | Alamasyarie',
};

export default function BlogPage() {
  const posts = getAllPosts('blog');

  return (
    <main>
      <SiteHeader />
      <section className="container">
        <div className="card">
          <h1 className="title">Blog</h1>
          <p className="subtitle">Kumpulan tulisan panjang saya tentang teknologi, ide, dan pengalaman.</p>
        </div>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-card">
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="metadata">
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
