import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  type: 'blog' | 'notes';
}

export interface PostData extends PostMeta {
  content: string;
}

export function getPostSlugs(type: 'blog' | 'notes') {
  const dir = path.join(postsDirectory, type);
  return fs.existsSync(dir) ? fs.readdirSync(dir).filter((name) => name.endsWith('.md')) : [];
}

export function getPostBySlug(type: 'blog' | 'notes', slug: string): PostData {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, type, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title || realSlug,
    date: data.date || '1970-01-01',
    excerpt: data.excerpt || '',
    slug: realSlug,
    type,
    content,
  };
}

export function getAllPosts(type: 'blog' | 'notes') {
  return getPostSlugs(type)
    .map((slug) => getPostBySlug(type, slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
