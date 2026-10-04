import SiteHeader from '../../components/SiteHeader';
import MarkdownContent from '../../components/MarkdownContent';
import { getPostBySlug, getPostSlugs, PostData } from '../../../lib/posts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getPostSlugs('blog').map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post: PostData = getPostBySlug('blog', params.slug);

  return (
    <main>
      <SiteHeader />
      <section className="container">
        <div className="card">
          <h1 className="title">{post.title}</h1>
          {post.date ? (
            <div className="metadata">
              <span>{post.date}</span>
            </div>
          ) : null}
          <MarkdownContent markdown={post.content} />
        </div>
      </section>
    </main>
  );
}
