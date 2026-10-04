import SiteHeader from '../components/SiteHeader';
import { learningCurriculum } from '../../lib/site';

export const metadata = {
  title: "Learning | Alam Asy'arie",
  description: 'Computer science topics Alam Asy’arie is studying.',
};

export default function LearningPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container page-stack">
        <div className="card">
          <p className="eyebrow">Learning</p>
          <h1 className="title">Studying the foundations</h1>
          <p className="subtitle">
            I came to programming relatively late. Instead of only collecting frameworks, I am working through
            the foundations of computer science while building software.
          </p>
        </div>

        <ul className="study-list" aria-label="Current course of study">
          {learningCurriculum.map((book) => (
            <li key={book.title} className="post-card">
              <h2>{book.shortTitle ?? book.title}</h2>
              {book.shortTitle ? <p className="study-title">{book.title}</p> : null}
              <p>{book.description}</p>
            </li>
          ))}
        </ul>

        <div className="card">
          <h2>Questions I keep returning to</h2>
          <p>
            How can a useful representation make a problem clearer? What assumptions are hidden in a model?
            How can data definitions guide program structure and make invalid states harder to represent?
          </p>
          <p>
            These are working ideas, not rules. I am trying to understand abstraction, functional programming,
            programming languages, computer systems, software design, and AI engineering by applying them to
            real problems.
          </p>
        </div>
      </section>
    </main>
  );
}
