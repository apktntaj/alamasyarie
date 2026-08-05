import { marked } from 'marked';

interface MarkdownContentProps {
  markdown: string;
}

export default function MarkdownContent({ markdown }: MarkdownContentProps) {
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}
