import { createFileRoute, Link } from "@tanstack/react-router";
import { Beaker, FlaskConical, Target, ArrowRight, CheckCircle2, Cpu, Database, Microscope, Brain } from "lucide-react";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSocialHead({
      title: `Antibody & Protein Design Services: Discovery, Maturation, Developability | ${PRODUCT_NAME}`,
      description: `Four AI-powered biologics pipelines: antibody discovery, protein design, affinity maturation, and developability optimization. Delivered in 2 to 4 weeks.`,
      canonical: `${SITE_ORIGIN}/services`,
      ogTitle: `${PRODUCT_NAME} Biologics Services`,
      ogDescription: `Four computational pipelines from antigen brief to ranked antibody and protein sequences. Engagements from $180K.`,
    }),
  component: ServicesPage,
});

const services = [
  {
    icon: Beaker,
    title: "Antibody Discovery",
    problem: "Discovering neutralizing or therapeutic antibodies against viral, oncology, or autoimmune targets with strong developability.",
    steps: [
      "Epitope mapping and antigen structure analysis (PDB or AlphaFold)",
      "CDR-H3 enumeration generating million-variant antibody libraries",
      "AlphaFold-Multimer binding prediction and neutralization probability scoring",
      "Deliver top 50–500 antibodies ranked by affinity, function, and developability",
    ],
    output: "Ranked antibody sequences (FASTA), epitope bin assignments, CHO codon-optimized expression files",
    timeline: "3–4 weeks",
    price: "Engagements typically $250K–$550K per program",
  },
  {
    icon: Brain,
    title: "Protein Design",
    problem: "Engineering enzymes, binders, or scaffolds with improved stability, activity, or expression in production systems.",
    steps: [
      "Structure analysis and functional site mapping (AlphaFold or experimental PDB)",
      "ESM-2 mutational scanning and inverse folding for variant generation",
      "Thermostability and activity retention prediction via MD simulation",
      "Rank top 20–100 variants by stability, activity, and expression probability",
    ],
    output: "Ranked protein variants (FASTA), mutation map, E. coli or yeast codon-optimized sequences",
    timeline: "2–3 weeks",
    price: "Engagements typically $200K–$450K per program",
  },
  {
    icon: Target,
    title: "Affinity Maturation",
    problem: "Optimizing an existing antibody or protein lead to sub-nM affinity while preserving developability.",
    steps: [
      "Interface analysis of parent antibody-protein complex",
      "Targeted CDR or interface mutation campaigns (100K+ variants)",
      "Multi-objective ranking by predicted KD improvement and developability retention",
      "Deliver top 20–50 matured candidates with affinity and stability predictions",
    ],
    output: "Ranked matured sequences, predicted KD improvements, developability comparison vs. parent",
    timeline: "2–3 weeks",
    price: "Engagements typically $180K–$350K per program",
  },
  {
    icon: FlaskConical,
    title: "Developability Optimization",
    problem: "Fixing aggregation, viscosity, immunogenicity, or expression issues in clinical-stage biologics and bispecifics.",
    steps: [
      "Developability diagnostic on parent sequence (aggregation, viscosity, immunogenicity)",
      "Computational remediation via surface engineering, Fc modification, or format redesign",
      "Bispecific geometry and CRS risk scoring for T-cell engagers",
      "Deliver top 10–30 optimized candidates with full developability dossier",
    ],
    output: "Optimized sequences, developability scorecard, bispecific format comparison (if applicable)",
    timeline: "3–5 weeks",
    price: "Engagements typically $300K–$650K per program",
  },
];

const methods = [
  { icon: Brain, title: "Protein language models", body: "ESM-2, ESMFold, and inverse folding for CDR design and stability prediction." },
  { icon: Database, title: "AlphaFold-Multimer", body: "Antibody-antigen and bispecific interface prediction trained on proprietary validation sets." },
  { icon: Microscope, title: "Molecular dynamics", body: "GROMACS / OpenMM simulations for interface stability and thermostability refinement." },
  { icon: Cpu, title: "Developability scoring", body: "Aggregation, immunogenicity, viscosity, and CHO expression probability models." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Services</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Four biologics pipelines. Built for pharma timelines.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every engagement returns ranked antibody or protein sequences plus the technical documentation
            your team needs to take work straight into CHO expression and validation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 py-20">
        {services.map((s, i) => (
          <article key={s.title} className="grid gap-8 rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] md:grid-cols-[1fr_1.4fr] md:p-10">
            <div>
              <div className="font-mono text-xs text-muted-foreground">Service 0{i + 1}</div>
              <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.problem}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Timeline</dt><dd className="font-semibold text-foreground">{s.timeline}</dd></div>
                <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Starting price</dt><dd className="font-semibold text-foreground">{s.price}</dd></div>
              </dl>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Process</div>
              <ol className="mt-3 space-y-3">
                {s.steps.map((step, idx) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground">
                    <span className="font-mono text-xs text-primary">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Deliverable</div>
                <div className="mt-1 text-sm text-foreground">{s.output}</div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Methodology</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The science behind the pipeline.</h2>
              <p className="mt-4 max-w-md text-background/70">
                We compose published, peer-reviewed methods with proprietary biologics scoring trained on our own
                wet-lab validation data.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <div key={m.title} className="rounded-xl border border-background/10 bg-background/5 p-5">
                  <m.icon className="h-5 w-5 text-accent" />
                  <div className="mt-3 font-semibold">{m.title}</div>
                  <p className="mt-1 text-sm text-background/70">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Custom & Enterprise Projects</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Bispecific platform development, multi-antigen campaigns, integration with internal sequence databases,
            and bespoke ML model training on proprietary antibody corpora.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Bispecific platform design", "Integration with client sequence libraries", "Real-time scientist collaboration", "Custom developability model training"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />{f}</li>
            ))}
          </ul>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Contact sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
