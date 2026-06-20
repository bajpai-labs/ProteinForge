import { CONTACT_EMAIL, LEGAL_COMPANY_CIN, PRODUCT_NAME, SITE_ORIGIN } from "./site";

/* ── Types ────────────────────────────────────────────────── */

export type DefinitionItem = { term: string; definition: string };
export type KeyFact = { label: string; value: string };
export type FaqItem = { question: string; answer: string };

/* ── FAQs (machine-readable + FAQPage schema) ─────────────── */

export const PROTEIN_FORGE_FAQS: FaqItem[] = [
  {
    question: "What is ProteinForge?",
    answer: `${PRODUCT_NAME} is an AI-powered antibody and protein design platform by Bajpai Labs. It uses protein language models, AlphaFold-Multimer structure prediction, and developability scoring to deliver ranked antibody and protein sequences from a target brief in 2 to 4 weeks.`,
  },
  {
    question: "How does ProteinForge accelerate antibody discovery?",
    answer: `${PRODUCT_NAME} replaces lengthy phage display and hybridoma campaigns with in-silico library generation and ranking. Starting from a target antigen structure or sequence, it enumerates millions of antibody or protein variants, predicts binding affinity and neutralization probability, filters for developability, and delivers a ranked list of 50 to 500 expression-ready sequences. This reduces timelines from 4 to 8 months down to 2 to 4 weeks.`,
  },
  {
    question: "What is the cost of a ProteinForge engagement?",
    answer: `${PRODUCT_NAME} engagements typically range from $200,000 to $650,000 per program depending on scope. Antibody discovery programs start at $250,000. De novo protein design ranges from $200,000 to $450,000. Affinity maturation campaigns range from $180,000 to $350,000. Developability optimization and bispecific engineering ranges from $300,000 to $650,000.`,
  },
  {
    question: "What types of biologics does ProteinForge support?",
    answer: `${PRODUCT_NAME} supports four biologics modalities: antibody discovery against viral, oncology, and autoimmune targets; de novo protein and enzyme engineering; affinity maturation of existing leads; and developability optimization including aggregation, immunogenicity, viscosity, and manufacturability scoring for CHO and E. coli expression.`,
  },
  {
    question: "What is closed-loop protein engineering?",
    answer: `Closed-loop protein engineering is an iterative active-learning approach where AI models are retrained using wet-lab binding, expression, and stability data after each design cycle. Each cycle narrows the variant space and improves affinity and developability predictions. ${PRODUCT_NAME} implements this methodology, producing tighter rankings with each round compared to one-pass computational design.`,
  },
  {
    question: "What deliverables does ProteinForge provide?",
    answer: `${PRODUCT_NAME} deliverables include a ranked list of top 50 to 500 antibody or protein sequences with predicted binding affinity, developability scores, and structural models; CHO-compatible or E. coli codon-optimized FASTA files; a full technical report documenting the pipeline methodology; and a validation playbook with recommended expression, binding, and functional assays.`,
  },
  {
    question: "How accurate are ProteinForge predictions?",
    answer: `Across closed engagements, top-ranked antibodies have shown 65 to 80 percent expression success and 48 to 55 percent KD prediction within 2× of observed values. Neutralization hit rates for viral targets reach 8 to 12 percent in the top 25 expressed clones, substantially above typical phage display campaigns, because ${PRODUCT_NAME} calibrates scoring against proprietary wet-lab validation outcomes.`,
  },
  {
    question: "Who operates ProteinForge?",
    answer: `${PRODUCT_NAME} is operated by Bajpai Labs (legal entity: Bajpai and Co. Research Private Limited, CIN: ${LEGAL_COMPANY_CIN}), a boutique AI and quantum consulting firm headquartered in Dubai, UAE with operations in Uttar Pradesh, India. Contact: ${CONTACT_EMAIL}.`,
  },
  {
    question: "What AI methods does ProteinForge use?",
    answer: `${PRODUCT_NAME} uses protein language models including ESM-2 and ESMFold, AlphaFold-Multimer for antibody-antigen interface prediction, inverse folding models for CDR design, molecular dynamics for interface stability, multi-objective developability scoring across aggregation, immunogenicity, and viscosity, and closed-loop active learning retrained on client wet-lab feedback.`,
  },
  {
    question: "What is antibody developability?",
    answer: `Antibody developability refers to the manufacturability and stability properties of a biologic candidate, including expression yield, aggregation propensity, thermal stability, viscosity at high concentration, and immunogenicity risk. ${PRODUCT_NAME} scores developability alongside binding affinity so teams prioritize sequences that will succeed in CHO expression and formulation, not just bind strongly in silico.`,
  },
];

/* ── Definitions (DefinedTermSet schema) ──────────────────── */

export const HOME_DEFINITIONS: DefinitionItem[] = [
  {
    term: PRODUCT_NAME,
    definition: `${PRODUCT_NAME} is an AI-powered antibody and protein design platform by Bajpai Labs that delivers ranked biologics sequences from a target antigen in 2 to 4 weeks using protein language models, AlphaFold-Multimer, developability scoring, and closed-loop active learning.`,
  },
  {
    term: "Antibody discovery",
    definition:
      "Antibody discovery is the process of identifying immunoglobulin sequences that bind a target antigen with high affinity and desired functional properties. ProteinForge performs computational antibody discovery by enumerating CDR variants, predicting binding and neutralization, and ranking candidates by developability before mammalian expression.",
  },
  {
    term: "Affinity maturation",
    definition:
      "Affinity maturation is the iterative optimization of an antibody or protein to increase binding affinity, often through targeted CDR mutations or interface redesign. ProteinForge runs in-silico maturation campaigns that explore millions of point mutations and loop variants, delivering sub-nM candidates in 2 to 3 weeks.",
  },
  {
    term: "Developability",
    definition:
      "Developability encompasses the biophysical and manufacturability properties of a biologic candidate, including aggregation propensity, expression yield, thermal stability, viscosity, and immunogenicity. ProteinForge applies multi-objective developability scoring alongside binding affinity to rank sequences ready for CHO or E. coli production.",
  },
  {
    term: "Bispecific antibody",
    definition:
      "A bispecific antibody is an engineered biologic that binds two distinct antigens or epitopes simultaneously, enabling mechanisms such as T-cell engagement or dual pathway blockade. ProteinForge designs bispecific formats including T-cell engagers by optimizing both binding arms, linker geometry, and developability in a single ranked deliverable.",
  },
  {
    term: "Protein language model",
    definition:
      "Protein language models such as ESM-2 are deep learning models trained on millions of protein sequences to predict structure, function, and mutational effects. ProteinForge uses protein language models for CDR design seeding, stability prediction, and variant ranking across antibody and enzyme engineering campaigns.",
  },
];

/* ── Key facts (ItemList schema) ──────────────────────────── */

export const HOME_KEY_FACTS: KeyFact[] = [
  { label: "Platform name", value: PRODUCT_NAME },
  { label: "Parent company", value: "Bajpai Labs (Bajpai & Co. Research Private Limited)" },
  { label: "Legal entity CIN", value: LEGAL_COMPANY_CIN },
  { label: "Contact", value: CONTACT_EMAIL },
  { label: "Headquarters", value: "Dubai, UAE and Uttar Pradesh, India" },
  { label: "Typical delivery timeline", value: "2 to 4 weeks from antigen brief to ranked sequence list" },
  { label: "Cost reduction vs. phage display", value: "70 to 85 percent reduction in discovery campaign costs" },
  { label: "Speed advantage", value: "4 to 6 times faster time-to-lead versus traditional antibody discovery" },
  { label: "Expression success rate", value: "65 to 80 percent expression success for top-ranked antibody candidates" },
  { label: "Platform URL", value: SITE_ORIGIN },
  { label: "Biologics modalities", value: "Antibody discovery, protein design, affinity maturation, developability" },
  {
    label: "AI methods",
    value:
      "Protein language models, AlphaFold-Multimer, inverse folding, molecular dynamics, developability scoring, closed-loop active learning",
  },
];
