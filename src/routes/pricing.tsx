import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageSocialHead({
      title: `Antibody & Protein Design Pricing: Engagement Packages | ${PRODUCT_NAME}`,
      description: `Transparent engagement pricing for AI-powered antibody and protein design. Programs range from $180K to $650K depending on scope. 2 to 4 week delivery.`,
      canonical: `${SITE_ORIGIN}/pricing`,
      ogTitle: `${PRODUCT_NAME} Pricing`,
      ogDescription: `Transparent project packages for AI-powered biologics design. Engagements from $180K per program.`,
    }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Discovery",
    scope: "Single-target antibody discovery, up to 150 ranked sequences",
    price: "$250K",
    timeline: "3–4 weeks",
    features: ["Full AI pipeline run", "Ranked antibody list (top 50–150)", "Binding affinity + developability report", "CHO codon-optimized FASTA files", "Email support"],
  },
  {
    name: "Optimization",
    scope: "Affinity maturation or developability optimization on existing lead",
    price: "$350K",
    timeline: "3–5 weeks",
    features: ["Everything in Discovery", "Up to 500 ranked variants", "AlphaFold-Multimer structural models", "Bispecific format comparison (if applicable)", "Priority support", "Two revision rounds"],
    featured: true,
  },
  {
    name: "Enterprise",
    scope: "Multi-program, bispecific platform, integration with client sequence libraries",
    price: "Custom",
    timeline: "Flexible",
    features: ["Everything in Optimization", "Dedicated project manager", "Custom developability model training", "Quarterly model retraining on your data", "On-site scientist exchange", "Indemnification & SLAs"],
  },
];

const faqs = [
  ["How accurate are your binding predictions?", "Across closed engagements, 48 to 55 percent of top-ranked antibodies show KD within 2× of observed values. Expression success rates for top 50 candidates reach 65 to 80 percent because we calibrate developability scoring against our own wet-lab outcomes."],
  ["What file formats do you accept?", "PDB and mmCIF for antigen structures, FASTA for antibody or protein sequences, and structured CSV for prior assay or expression data. We can also start from an AlphaFold or AlphaFold-Multimer prediction."],
  ["Can you design bispecific antibodies?", "Yes. Our developability tier includes T-cell engager and dual-target bispecific design with CRS risk scoring, format comparison, and CHO expression optimization."],
  ["What's your typical expression success rate?", "Across antibody discovery engagements, 65 to 80 percent of top 50 ranked candidates express in CHO. Specific rates depend on target class, format, and CDR complexity."],
  ["Do you sign IP and confidentiality agreements?", "Always. We sign a mutual NDA before any technical discussion and assign all generated IP to the client by default."],
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Pricing</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Project-based pricing. No surprise invoices.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each tier is a fixed-fee engagement with a defined deliverable. Add-on affinity maturation,
            bispecific engineering, and custom model training are quoted per scope.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl border p-8 " +
                (t.featured
                  ? "border-primary bg-foreground text-background shadow-[var(--shadow-elegant)]"
                  : "border-border bg-background text-foreground shadow-[var(--shadow-soft)]")
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                  Most popular
                </div>
              )}
              <div className="text-sm font-semibold uppercase tracking-wider opacity-80">{t.name}</div>
              <div className="mt-6 text-4xl font-bold tracking-tight">{t.price}</div>
              <div className={"mt-1 text-sm " + (t.featured ? "text-background/70" : "text-muted-foreground")}>
                {t.timeline} delivery
              </div>
              <p className={"mt-4 text-sm " + (t.featured ? "text-background/70" : "text-muted-foreground")}>{t.scope}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={"mt-0.5 h-4 w-4 shrink-0 " + (t.featured ? "text-accent" : "text-secondary")} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold " +
                  (t.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90")
                }
              >
                {t.name === "Enterprise" ? "Contact sales" : "Start project"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Add-ons:</span> Wet-lab validation support, bispecific platform development, custom developability model training, and IP-secure on-prem deployment are quoted separately.
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
          <dl className="mt-10 divide-y divide-border">
            {faqs.map(([q, a]) => (
              <div key={q} className="py-6">
                <dt className="text-base font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
