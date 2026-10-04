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
          <p className="eyebrow">Writing</p>
          <h1 className="title">Notes from learning computer science and building software.</h1>
          <p className="subtitle">
            Longer reflections on computer science, software design, programming languages, systems, AI
            engineering, and the work of building Pesisir.
          </p>
        </div>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-card">
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.date ? (
                <div className="metadata">
                  <span>{post.date}</span>
                </div>
              ) : null}
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
        <p className="section-link">
          Looking for shorter, unfinished thoughts? <Link href="/notes">Browse Notes →</Link>
        </p>
      </section>
    </main>
  );
}
