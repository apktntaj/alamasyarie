import SiteHeader from '../../components/SiteHeader';
import MarkdownContent from '../../components/MarkdownContent';
import { getPostBySlug, getPostSlugs, PostData } from '../../../lib/posts';

interface NotePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getPostSlugs('notes').map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }));
}

export default function NotePage({ params }: NotePageProps) {
  const post: PostData = getPostBySlug('notes', params.slug);

  return (
    <main>
      <SiteHeader />
      <section className="container">
        <div className="card">
          <h1 className="title">{post.title}</h1>
          {post.date ? (
            <div className="metadata">
              <strong>Tanggal</strong>
              <span>{post.date}</span>
            </div>
          ) : null}
          <MarkdownContent markdown={post.content} />
        </div>
      </section>
    </main>
  );
}
