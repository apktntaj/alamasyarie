import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import { currentFocus } from '../lib/site';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="container page-stack">
        <div className="card">
          <p className="eyebrow">Alam Asy’arie</p>
          <h1 className="title">Learning computer science by building software.</h1>
          <p className="subtitle">
            I study the foundations of computing, build tools for real problems, and write about what I learn
            along the way.
          </p>
        </div>

        <section className="card" aria-labelledby="currently-heading">
          <h2 id="currently-heading">Currently</h2>
          <ul className="current-list">
            {currentFocus.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
        </section>

        <aside className="working-note" aria-labelledby="working-premise-heading">
          <p className="eyebrow">A working premise</p>
          <p id="working-premise-heading">
            Programming is not primarily about writing code. It is about finding a useful representation of a
            problem, then defining transformations over that representation.
          </p>
        </aside>

        <div className="grid feature-grid">
          <article className="card">
            <p className="eyebrow">Building</p>
            <h2>Pesisir</h2>
            <p>
              Software for PPJK, Indonesian customs, and freight-forwarding work—built from recurring
              operational problems around shipments and logistics documents.
            </p>
            <Link href="/projects">Read about Pesisir →</Link>
          </article>
          <article className="card">
            <p className="eyebrow">Studying</p>
            <h2>Computer science foundations</h2>
            <p>
              A self-directed course of study shaped by Teach Yourself CS and books on program design,
              abstraction, systems, and programming models.
            </p>
            <Link href="/learning">See what I am studying →</Link>
          </article>
          <article className="card">
            <p className="eyebrow">Writing</p>
            <h2>Notes from the work</h2>
            <p>
              Public notes on computer science, software design, functional programming, systems, AI
              engineering, and building Pesisir.
            </p>
            <Link href="/blog">Read the writing →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
