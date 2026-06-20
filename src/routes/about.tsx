import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, Layers, Target, Zap } from "lucide-react";
import { PageSection } from "@/components/page-section";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SiteLayout } from "@/components/site-layout";
import { BAJPAI_LABS_URL, PRODUCT_BYLINE, PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSocialHead({
      title: `About ProteinForge: Bajpai Labs Antibody & Protein Design Platform`,
      description: `What ${PRODUCT_NAME} is, why it exists, and the mission behind Bajpai Labs' AI-powered antibody and protein engineering platform. Research-driven, production-accountable biologics delivery.`,
      canonical: `${SITE_ORIGIN}/about`,
      ogTitle: `About ${PRODUCT_NAME} by Bajpai Labs`,
      ogDescription: `${PRODUCT_NAME} exists to rank antibodies and proteins before expensive mammalian expression. Research-driven, production-accountable biologics design from Bajpai Labs.`,
    }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Rank before you express",
    body: "Surface the 50 to 500 antibodies worth expressing in CHO, not thousands of binders that fail developability. Every pipeline run is scoped to a decision your team actually needs to make.",
  },
  {
    icon: Layers,
    title: "Developability by design",
    body: "Binding affinity is necessary but not sufficient. Aggregation, expression yield, viscosity, and immunogenicity are scored alongside affinity in every ranked deliverable.",
  },
  {
    icon: Zap,
    title: "Biologics timelines",
    body: "Typical engagements deliver in 2–4 weeks with full technical documentation. Built for programs that cannot wait six months for phage display.",
  },
  {
    icon: Beaker,
    title: "Expression-ready output",
    body: "Every engagement returns ranked sequences with CHO or E. coli codon optimization, structural models, and the validation playbook your scientists need to move into the lab.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/40 section-tone-vellum">
        <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-40" aria-hidden />
        <SectionBackdrop variant="hero-field" className="z-[2]" />
        <div className="section-inner relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              About · {PRODUCT_BYLINE}
            </div>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--charcoal)] sm:text-5xl">
              Biologics design built for{" "}
              <span className="gold-gradient">decisions</span>, not dashboards.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {PRODUCT_NAME} is Bajpai Labs&apos; antibody and protein design platform:
              an AI pipeline that ranks your best biologics before any expensive mammalian
              expression begins.
            </p>
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="Our aim"
        title="Get biologics teams to the right experiments faster."
        description={`${PRODUCT_NAME} exists because most antibody discovery programs waste time and capital expressing clones that never had a realistic path to developability or function. We replace brute-force phage display with ranked, expression-ready sequence lists.`}
        tone="parchment"
        backdrop="approach-arcs"
        folioTop
      >
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="glass-elevated flex gap-4 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-[var(--vellum)]">
                <p.icon className="h-5 w-5 text-[var(--gold)]" />
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="font-semibold text-foreground">{p.title}</div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Mission"
        title="Bridge research and commercial biologics discovery."
        tone="charcoal-deep"
        backdrop="lab-graph"
        folioTop
        align="center"
      >
        <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-[var(--vellum)] sm:text-3xl">
          &ldquo;Enable biologics teams to innovate faster and smarter, by expressing only the
          antibodies and proteins that computational design says are worth the bench.&rdquo;
        </blockquote>
      </PageSection>

      <PageSection
        eyebrow="What we believe"
        title="The principles behind every pipeline run."
        tone="vellum"
        backdrop="catalog-lattice"
        folioTop
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {[
            [
              "Developability over affinity alone",
              "A sub-nM binder that aggregates at clinical concentration is not a drug candidate.",
            ],
            [
              "Production accountability",
              "Ranked sequences with full technical documentation. Not benchmark leaderboard claims.",
            ],
            [
              "Research-driven methods",
              "Published protein engineering techniques composed with proprietary scoring from Bajpai Labs.",
            ],
            [
              "Senior-led engagement",
              "Direct access to the architects who designed the pipeline, from scoping through delivery.",
            ],
          ].map(([title, body]) => (
            <li key={title} className="glass-elevated p-6">
              <div className="font-semibold text-[var(--charcoal)]">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        eyebrow="Part of Bajpai Labs"
        title="A product from a research-driven AI lab."
        description={`${PRODUCT_NAME} is one of Bajpai Labs' specialized platforms, alongside HelixForge for small molecule discovery and flagship products in enterprise AI and hybrid computing. The same research depth and production accountability that drives the parent lab drives every ProteinForge engagement.`}
        tone="parchment-2"
        backdrop="fabric-mesh"
        folioTop
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={BAJPAI_LABS_URL}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-foreground hover:border-[var(--gold)]/40"
          >
            Visit bajpailabs.com <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow hover:opacity-90"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
