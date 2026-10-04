import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: "Projects | Alam Asy'arie",
  description: 'Software projects by Alam Asy’arie.',
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="container page-stack">
        <div className="card">
          <p className="eyebrow">Projects</p>
          <h1 className="title">Pesisir</h1>
          <p className="subtitle">
            Software for people working in PPJK, Indonesian customs, and freight-forwarding operations.
          </p>
        </div>

        <article className="card">
          <h2>From operational work to a useful tool</h2>
          <p>
            Pesisir comes from the repetitive, document-heavy work around shipments: checking HS codes and
            import restrictions, processing shipment information, working with BL and other logistics
            documents, tracking ETA and shipment events, and reducing repeated data entry and checking.
          </p>
          <p>
            I am building it as a tool for those real operational problems, and as the place where I try to
            apply what I am learning about software design to messy constraints outside a tutorial.
          </p>
        </article>

        <article className="card">
          <h2>What I am exploring</h2>
          <p>
            Alongside the product work, I am exploring AI-assisted and agentic software for this domain:
            systems that combine models with tools, explicit rules, and domain knowledge rather than treating
            AI as only a chatbot.
          </p>
          <p>
            Privacy and local-first software matter here. Logistics documents can contain sensitive business
            information, so those constraints should shape the software rather than be added afterward.
          </p>
        </article>
      </section>
    </main>
  );
}
