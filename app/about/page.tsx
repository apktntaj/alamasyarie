import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: "About | Alam Asy'arie",
  description: 'About Alam Asy’arie.',
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container page-stack">
        <div className="card">
          <p className="eyebrow">About</p>
          <h1 className="title">Alam Asy’arie</h1>
          <p className="subtitle">
            A self-taught programmer in Indonesia, studying computer science from the foundations while
            building software for real work.
          </p>
        </div>

        <article className="card">
          <p>
            I began programming later than many people do. My long-term aim is to become capable enough to work
            professionally as a software engineer, ideally remotely. For now, the focus is learning: understanding
            the ideas beneath the tools and using them to build better software.
          </p>
          <p>
            I am particularly interested in software design, data modeling, abstraction, functional programming,
            programming languages, computer systems, and AI engineering. Elixir is a current focus, while
            TypeScript remains important in the software I build.
          </p>
          <p>
            This site is a public record of that process: what I am studying, what I am building, and the notes
            that result from trying to understand both.
          </p>
        </article>
      </section>
    </main>
  );
}
