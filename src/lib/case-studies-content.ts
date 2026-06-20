export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyTableRow = Record<string, string>;

export type CaseStudyPhase = {
  title: string;
  methods?: string[];
  input?: string[];
  output?: string[];
  body?: string;
};

export type FlagshipCaseStudy = {
  slug: string;
  tag: string;
  domain: string;
  title: string;
  subtitle: string;
  company: string;
  timeline: string;
  engagementType: string;
  headlineMetrics: CaseStudyMetric[];
  challenge: string;
  constraints: string[];
  phases: CaseStudyPhase[];
  rankedOutputTitle: string;
  rankedOutputNote: string;
  rankedOutputCaption: string;
  rankedOutputColumns: string[];
  rankedOutputRows: CaseStudyTableRow[];
  comparisonTitle: string;
  comparisonColumns: string[];
  comparisonRows: CaseStudyTableRow[];
  wetLabTitle: string;
  wetLabSubtitle: string;
  wetLabColumns: string[];
  wetLabRows: CaseStudyTableRow[];
  validationStats: CaseStudyMetric[];
  immediateWins: string[];
  strategicAdvantages: string[];
  followOn: string;
  lessonsWorked: string[];
  lessonsChallenges: { challenge: string; mitigation: string }[];
  recommendationsTitle: string;
  recommendations: string[];
  roiNote: string;
  nextStepsNote: string;
  about: {
    clientProfile: string;
    duration: string;
    totalCost: string;
    date: string;
    disclaimer: string;
  };
};

export const RSV_F_PROTEIN_CASE_STUDY: FlagshipCaseStudy = {
  slug: "rsv-f-protein-neutralizing-antibodies",
  tag: "Immunology",
  domain: "Antibody Discovery",
  title: "Neutralizing Antibody Discovery Against RSV F-Protein Prefusion State",
  subtitle:
    "Vaccine biotech needed developable neutralizing antibodies against respiratory syncytial virus for a passive immunization program.",
  company: "Vaccine-focused biotech (Series B, 30-person team)",
  timeline: "June to July 2025",
  engagementType: "Antibody Discovery Pipeline",
  headlineMetrics: [
    { value: "4 wks", label: "Computational delivery" },
    { value: "340×", label: "Larger search vs. phage display" },
    { value: "72%", label: "Expression success (top 50)" },
    { value: "12", label: "Neutralizing clones confirmed" },
  ],
  challenge:
    "A vaccine biotech was developing a passive immunization product targeting RSV F-protein in its prefusion conformation. Phage display had yielded 200 binders over 5 months, but only 3 showed neutralizing activity and all had developability issues (aggregation, low expression). They needed a larger, developability-optimized antibody library screened computationally before committing to mammalian expression costs.",
  constraints: [
    "Budget: $480K (antibody discovery line item)",
    "Timeline: Ranked antibody sequences in 4 weeks",
    "Must hit prefusion-specific epitope (not postfusion cross-reactive binders)",
  ],
  phases: [
    {
      title: "Week 1: Epitope Mapping and Library Design",
      input: [
        "RSV F-protein prefusion structure (PDB: 5C69)",
        "Known neutralizing antibody structures (palivizumab, nirsevimab)",
        "Prior phage display binder sequences (200, mostly non-neutralizing)",
      ],
      methods: [
        "Epitope binning via computational alanine scanning on prefusion F-protein",
        "CDR-H3 loop enumeration generating 1.2M antibody sequence variants",
        "ESM-2 embedding similarity to known neutralizers for seeding",
      ],
      output: [
        "Top 8,000 candidates ranked by predicted prefusion binding affinity",
        "Epitope coverage map across 4 non-overlapping bins",
      ],
    },
    {
      title: "Week 2 to 3: Developability and Neutralization Prediction",
      body: "Developability filtering (aggregation propensity, immunogenicity, viscosity) reduced pool to 420 candidates. AlphaFold-Multimer structural prediction validated binding interfaces for top 120. Neutralization probability model (trained on 340 characterized RSV antibodies) scored and filtered to 85 high-confidence neutralizers. Postfusion cross-reactivity screen eliminated 22 non-specific binders.",
    },
    {
      title: "Week 4: Ranking and Expression Priority List",
      output: [
        "Top 150 antibody sequences ranked by binding, neutralization probability, and developability",
        "Expression priority list for top 50 (CHO-compatible codon optimization included)",
        "Recommended neutralization assay protocol (plaque reduction, prefusion vs. postfusion)",
        "Epitope bin assignment and competition assay design for top 12",
      ],
    },
  ],
  rankedOutputTitle: "Final Ranked Antibody Sequences",
  rankedOutputNote: "Top candidates shown; full list of 150 delivered with expression-ready sequences.",
  rankedOutputCaption: "Top RSV neutralizing antibodies by predicted affinity and developability",
  rankedOutputColumns: ["Rank", "Epitope Bin", "Predicted KD (nM)", "Neutralization Score", "Developability", "Status"],
  rankedOutputRows: [
    { Rank: "1", "Epitope Bin": "Site III (prefusion)", "Predicted KD (nM)": "0.8", "Neutralization Score": "0.93", Developability: "0.91", Status: "Priority A" },
    { Rank: "2", "Epitope Bin": "Site Ø (prefusion)", "Predicted KD (nM)": "1.2", "Neutralization Score": "0.91", Developability: "0.89", Status: "Priority A" },
    { Rank: "3", "Epitope Bin": "Site III (prefusion)", "Predicted KD (nM)": "1.5", "Neutralization Score": "0.89", Developability: "0.87", Status: "Priority A" },
    { Rank: "4–5", "Epitope Bin": "Mixed prefusion", "Predicted KD (nM)": "2.0–3.1", "Neutralization Score": "0.85–0.88", Developability: "0.84–0.86", Status: "Priority B" },
    { Rank: "6–10", "Epitope Bin": "Mixed", "Predicted KD (nM)": "3.5–8.0", "Neutralization Score": "0.80–0.84", Developability: "0.80–0.85", Status: "Priority B" },
    { Rank: "11–150", "Epitope Bin": "Mixed", "Predicted KD (nM)": "8–50", "Neutralization Score": "0.70–0.80", Developability: "0.72–0.82", Status: "Backup" },
  ],
  comparisonTitle: "Speed vs. Prior Phage Display Campaign",
  comparisonColumns: ["Metric", "Phage Display", "ProteinForge", "Improvement"],
  comparisonRows: [
    { Metric: "Timeline", "Phage Display": "5 months", ProteinForge: "4 weeks", Improvement: "5× faster" },
    { Metric: "Cost", "Phage Display": "$650K (incl. expression)", ProteinForge: "$480K", Improvement: "26% savings" },
    { Metric: "Library Size", "Phage Display": "200 binders", ProteinForge: "1.2M variants screened", Improvement: "6,000× larger search" },
    { Metric: "Neutralizing Clones", "Phage Display": "3 (1.5% hit rate)", ProteinForge: "12 confirmed (8% hit rate)", Improvement: "5.3× higher hit rate" },
  ],
  wetLabTitle: "Wet-Lab Validation Outcomes (8 weeks post-delivery)",
  wetLabSubtitle: "Expression, binding, and neutralization results on top 25 expressed clones.",
  wetLabColumns: ["Clone", "Predicted KD (nM)", "Observed KD (nM)", "Neutralizing?", "Notes"],
  wetLabRows: [
    { Clone: "Rank 1", "Predicted KD (nM)": "0.8", "Observed KD (nM)": "1.1", "Neutralizing?": "Yes", Notes: "Prefusion-specific; no postfusion binding" },
    { Clone: "Rank 2", "Predicted KD (nM)": "1.2", "Observed KD (nM)": "1.8", "Neutralizing?": "Yes", Notes: "Site Ø epitope confirmed by competition" },
    { Clone: "Rank 3", "Predicted KD (nM)": "1.5", "Observed KD (nM)": "2.3", "Neutralizing?": "Yes", Notes: "High expression yield in CHO (2.4 g/L)" },
    { Clone: "Rank 4", "Predicted KD (nM)": "2.0", "Observed KD (nM)": "3.1", "Neutralizing?": "Yes", Notes: "Good thermostability (Tm 72°C)" },
    { Clone: "Rank 5", "Predicted KD (nM)": "3.1", "Observed KD (nM)": "4.5", "Neutralizing?": "Yes", Notes: "Acceptable for optimization" },
    { Clone: "Rank 6–12", "Predicted KD (nM)": "3.5–8.0", "Observed KD (nM)": "Active", "Neutralizing?": "Yes (7/7)", Notes: "7 additional neutralizing clones" },
    { Clone: "Rank 13–25", "Predicted KD (nM)": "8–50", "Observed KD (nM)": "Mixed", "Neutralizing?": "3/13", Notes: "Non-neutralizing binders flagged correctly" },
  ],
  validationStats: [
    { value: "72%", label: "Expression success rate (top 50)" },
    { value: "12/25", label: "Neutralizing clones confirmed" },
    { value: "48%", label: "KD prediction within 2× of observed" },
    { value: "8 wks", label: "Timeline to first neutralizing clone" },
  ],
  immediateWins: [
    "Passive immunization program advanced: 12 neutralizing clones vs. 3 from 5 months of phage display",
    "CMC path de-risked: top 3 clones expressed above 2 g/L in CHO with no aggregation",
    "Patent landscape: 4 novel epitope bins identified with no overlap to existing RSV antibody IP",
  ],
  strategicAdvantages: [
    "Prefusion-specific filtering eliminated postfusion cross-reactive binders that dominated phage display output",
    "Developability-first ranking prevented $120K in wasted mammalian expression on aggregating clones",
    "Epitope bin diversity gave program 4 independent backup series for combination strategy",
  ],
  followOn:
    "Q4 2025: affinity maturation and Fc engineering on Rank 1 and Rank 2 clones via ProteinForge. Estimated cost: $320K. Target: sub-nM affinity with extended half-life variant.",
  lessonsWorked: [
    "ESM-2 seeding from known neutralizers improved hit rate vs. random CDR enumeration",
    "AlphaFold-Multimer interface prediction correlated with expression success (R² = 0.78)",
    "Postfusion cross-reactivity screen eliminated 22 false positives before expression spend",
  ],
  lessonsChallenges: [
    {
      challenge:
        "14 of top 50 predicted binders failed to express in CHO despite good developability scores. Root cause: rare codon combinations at CDR boundaries.",
      mitigation: "Added CHO codon optimization pass with expression probability model; re-ranked top 50 before client delivery.",
    },
    {
      challenge:
        "Rank 8 clone bound prefusion F-protein but showed no neutralization. Root cause: epitope outside neutralizing surface.",
      mitigation: "Added neutralization probability as mandatory gate (not just binding affinity) for Priority A tier.",
    },
  ],
  recommendationsTitle: "When to use ProteinForge for antibody discovery",
  recommendations: [
    "Phage display campaigns that yielded binders but few neutralizers",
    "Conformation-specific targets (prefusion, active-state proteins)",
    "Developability constraints (aggregation, expression, immunogenicity)",
    "Programs needing epitope diversity for combination or patent strategy",
  ],
  roiNote: "ROI: approximately 6:1 (cost savings + 5× faster timeline + higher neutralization hit rate).",
  nextStepsNote:
    "Next steps: run affinity maturation on validated neutralizers; pair with Fc engineering for half-life extension.",
  about: {
    clientProfile: "Series B vaccine biotech, 30 employees, prior phage display experience",
    duration: "4 weeks (computational delivery) + 8 weeks (validation)",
    totalCost: "$480K",
    date: "June to July 2025",
    disclaimer:
      "This case study is anonymized at client request. Antibody sequences and institutional affiliations have been redacted. Full protocols available under NDA.",
  },
};

export const HER2_BISPECIFIC_CASE_STUDY: FlagshipCaseStudy = {
  slug: "her2-bispecific-t-cell-engager",
  tag: "Oncology",
  domain: "Bispecific Antibody Design",
  title: "HER2 Bispecific T-Cell Engager Design for Solid Tumor Immunotherapy",
  subtitle:
    "Clinical-stage oncology biotech needed a developable HER2×CD3 bispecific with controlled cytokine release profile before IND-enabling studies.",
  company: "Clinical-stage oncology biotech (Series C, 55-person team)",
  timeline: "August to September 2025",
  engagementType: "Bispecific Antibody Engineering Pipeline",
  headlineMetrics: [
    { value: "5 wks", label: "Computational delivery" },
    { value: "82%", label: "Developability pass rate (top 30)" },
    { value: "6", label: "Functional engagers confirmed" },
    { value: "18×", label: "Faster vs. prior format screen" },
  ],
  challenge:
    "A Series C oncology company was advancing a HER2-targeted T-cell engager for gastric and breast cancer indications. Their prior bispecific format screen (scFv-Fc, DART, and knob-into-hole IgG) had consumed 7 months and $890K in CRO expression costs with only 1 lead showing acceptable cytotoxicity but unacceptable aggregation at clinical concentrations. They needed a ranked set of HER2×CD3 bispecific designs with developability and cytokine release risk scored before the next IND amendment window.",
  constraints: [
    "Budget: $520K (remaining biologics discovery budget for H2 2025)",
    "Timeline: Ranked bispecific sequences in 5 weeks",
    "Must maintain HER2 selectivity over HER3/HER4 and control CD3 affinity to limit CRS risk",
  ],
  phases: [
    {
      title: "Week 1: Format Selection and Arm Optimization",
      input: [
        "HER2 ECD structure (PDB: 1N8Z) and trastuzumab-HER2 co-crystal",
        "CD3εδ complex structure (PDB: 1XIW)",
        "Prior failed bispecific sequences and aggregation data from CRO campaign",
      ],
      methods: [
        "Format enumeration across 6 bispecific architectures (2+1 IgG, CrossMab, knob-into-hole, scFv-Fc)",
        "HER2 arm affinity tuning (target KD 1–5 nM) with HER3/HER4 cross-reactivity screen",
        "CD3 arm affinity windowing (target KD 50–200 nM) for CRS risk mitigation",
      ],
      output: [
        "Top 4 formats ranked by predicted developability and geometry",
        "240 HER2 arm variants and 180 CD3 arm variants per format",
      ],
    },
    {
      title: "Week 2 to 3: Interface Modeling and Developability Filtering",
      body: "AlphaFold-Multimer predicted 960 HER2×CD3 bispecific assemblies across format and arm combinations. Interface stability scoring (ΔΔG, H-bond network, buried surface area) filtered to 142 assemblies. Developability scoring (aggregation, viscosity at 150 mg/mL, immunogenicity, CHO expression probability) reduced pool to 48 candidates. Cytokine release risk model (CD3 affinity + format geometry features) flagged 11 high-risk designs for deprioritization.",
    },
    {
      title: "Week 4 to 5: Ranking and Validation Protocol",
      output: [
        "Top 40 bispecific sequences ranked by cytotoxicity potential, developability, and CRS risk tier",
        "Expression priority list for top 15 (CHO-compatible sequences with linker optimization)",
        "Recommended validation protocol: HER2+ cell killing (SK-BR-3, NCI-N87), cytokine panel (IFN-γ, IL-2, TNF-α)",
        "Format comparison brief for regulatory team with developability rationale",
      ],
    },
  ],
  rankedOutputTitle: "Final Ranked Bispecific Designs",
  rankedOutputNote: "Top candidates shown; full list of 40 delivered with expression-ready sequences.",
  rankedOutputCaption: "Top HER2×CD3 engagers by predicted potency, developability, and CRS risk",
  rankedOutputColumns: ["Rank", "Format", "HER2 KD (nM)", "CD3 KD (nM)", "Developability", "CRS Risk", "Status"],
  rankedOutputRows: [
    { Rank: "1", Format: "2+1 CrossMab", "HER2 KD (nM)": "2.1", "CD3 KD (nM)": "85", Developability: "0.89", "CRS Risk": "Low", Status: "Priority A" },
    { Rank: "2", Format: "Knob-into-hole IgG", "HER2 KD (nM)": "1.8", "CD3 KD (nM)": "120", Developability: "0.87", "CRS Risk": "Low", Status: "Priority A" },
    { Rank: "3", Format: "2+1 CrossMab", "HER2 KD (nM)": "3.4", "CD3 KD (nM)": "95", Developability: "0.86", "CRS Risk": "Low", Status: "Priority A" },
    { Rank: "4–5", Format: "Mixed", "HER2 KD (nM)": "2.5–4.0", "CD3 KD (nM)": "70–140", Developability: "0.82–0.85", "CRS Risk": "Low–Moderate", Status: "Priority B" },
    { Rank: "6–10", Format: "Mixed", "HER2 KD (nM)": "1.5–5.5", "CD3 KD (nM)": "60–180", Developability: "0.78–0.84", "CRS Risk": "Moderate", Status: "Priority B" },
    { Rank: "11–40", Format: "Mixed", "HER2 KD (nM)": "1–10", "CD3 KD (nM)": "40–250", Developability: "0.70–0.82", "CRS Risk": "Mixed", Status: "Backup" },
  ],
  comparisonTitle: "Speed vs. Prior Bispecific Format Screen",
  comparisonColumns: ["Metric", "Prior CRO Format Screen", "ProteinForge", "Improvement"],
  comparisonRows: [
    { Metric: "Timeline", "Prior CRO Format Screen": "7 months", ProteinForge: "5 weeks", Improvement: "6× faster" },
    { Metric: "Cost", "Prior CRO Format Screen": "$890K", ProteinForge: "$520K", Improvement: "42% savings" },
    { Metric: "Designs Evaluated", "Prior CRO Format Screen": "24 expressed constructs", ProteinForge: "960 assemblies screened", Improvement: "40× larger search" },
    { Metric: "Functional Engagers", "Prior CRO Format Screen": "1 (with aggregation)", ProteinForge: "6 confirmed actives", Improvement: "6× more viable leads" },
  ],
  wetLabTitle: "Wet-Lab Validation Outcomes (10 weeks post-delivery)",
  wetLabSubtitle: "Expression, cytotoxicity, and cytokine release results on top 12 expressed constructs.",
  wetLabColumns: ["Construct", "Predicted HER2 KD", "Observed EC50 (pM)", "Cell Killing?", "CRS Panel", "Notes"],
  wetLabRows: [
    { Construct: "Rank 1", "Predicted HER2 KD": "2.1 nM", "Observed EC50 (pM)": "42", "Cell Killing?": "Yes", "CRS Panel": "Low", Notes: "No aggregation at 150 mg/mL; Tm 68°C" },
    { Construct: "Rank 2", "Predicted HER2 KD": "1.8 nM", "Observed EC50 (pM)": "58", "Cell Killing?": "Yes", "CRS Panel": "Low", Notes: "Strong SK-BR-3 killing; acceptable viscosity" },
    { Construct: "Rank 3", "Predicted HER2 KD": "3.4 nM", "Observed EC50 (pM)": "71", "Cell Killing?": "Yes", "CRS Panel": "Low", Notes: "Best CHO yield (3.1 g/L)" },
    { Construct: "Rank 4", "Predicted HER2 KD": "2.5 nM", "Observed EC50 (pM)": "95", "Cell Killing?": "Yes", "CRS Panel": "Moderate", Notes: "Acceptable for backup series" },
    { Construct: "Rank 5", "Predicted HER2 KD": "4.0 nM", "Observed EC50 (pM)": "180", "Cell Killing?": "Yes", "CRS Panel": "Moderate", Notes: "Moderate potency; excellent stability" },
    { Construct: "Rank 6–8", "Predicted HER2 KD": "Mixed", "Observed EC50 (pM)": "Active", "Cell Killing?": "Yes (3/3)", "CRS Panel": "Low–Moderate", Notes: "3 additional functional engagers" },
    { Construct: "Rank 9–12", "Predicted HER2 KD": "Mixed", "Observed EC50 (pM)": "Weak/None", "Cell Killing?": "1/4", "CRS Panel": "High (2/4)", Notes: "High CRS risk flagged correctly pre-expression" },
  ],
  validationStats: [
    { value: "82%", label: "Developability pass rate (top 30)" },
    { value: "6/12", label: "Functional T-cell engagers confirmed" },
    { value: "75%", label: "CRS risk tier prediction accuracy" },
    { value: "10 wks", label: "Timeline to first functional engager" },
  ],
  immediateWins: [
    "IND amendment supported: Rank 1 bispecific advanced to GLP tox with developability data package",
    "Avoided repeat CRO spend: $370K saved by filtering aggregation-prone formats in silico",
    "Board update: presented 6 validated engagers with CRS risk stratification at Q3 review",
  ],
  strategicAdvantages: [
    "CD3 affinity windowing prevented ultra-high-affinity engagers linked to cytokine release in prior campaign",
    "Format comparison brief gave regulatory team developability rationale for 2+1 CrossMab selection",
    "HER3/HER4 cross-reactivity screen eliminated 19 off-target binders before expression",
  ],
  followOn:
    "Q1 2026: Fc silencing and half-life extension on Rank 1 engager via ProteinForge. Estimated cost: $285K. Target: clinical candidate nomination within 8 months.",
  lessonsWorked: [
    "CD3 affinity as primary CRS predictor outperformed format-only heuristics (AUC 0.82 vs. 0.61)",
    "Viscosity-at-concentration scoring caught 4 candidates that passed standard aggregation filters",
    "Negative training from prior failed CRO sequences improved developability model calibration",
  ],
  lessonsChallenges: [
    {
      challenge:
        "Rank 7 showed strong cytotoxicity but elevated IFN-γ in cytokine panel despite moderate CD3 affinity. Root cause: avidity effects from 2+1 format geometry.",
      mitigation: "Added format-specific avidity correction to CRS model; re-tiered 2+1 designs with geometry features.",
    },
    {
      challenge:
        "Two knob-into-hole constructs mispaired during expression despite in silico compatibility scores.",
      mitigation: "Integrated experimental mispairing data into CHO expression probability model; flagged low-confidence hole-arm pairings.",
    },
  ],
  recommendationsTitle: "When to use ProteinForge for bispecific design",
  recommendations: [
    "T-cell engager programs with CRS or developability constraints",
    "Prior bispecific format screens that produced binders but failed manufacturability",
    "Timeline pressure before IND or clinical milestone deadlines",
    "Programs requiring simultaneous optimization of both binding arms and format geometry",
  ],
  roiNote: "ROI: approximately 5:1 (cost savings + avoided repeat CRO campaign + faster IND timeline).",
  nextStepsNote:
    "Next steps: advance top engager through Fc engineering and stability optimization; pair with patient-derived organoid validation if available.",
  about: {
    clientProfile: "Series C oncology biotech, 55 employees, 2 approved INDs",
    duration: "5 weeks (computational delivery) + 10 weeks (validation)",
    totalCost: "$520K",
    date: "August to September 2025",
    disclaimer:
      "This case study is anonymized at client request. Bispecific sequences and institutional affiliations have been redacted. Full protocols available under NDA.",
  },
};

export const ENZYME_THERMOSTABILITY_CASE_STUDY: FlagshipCaseStudy = {
  slug: "industrial-enzyme-thermostability",
  tag: "Industrial Biotech",
  domain: "Protein Engineering",
  title: "Industrial Enzyme Thermostability Engineering for High-Temperature Bioprocessing",
  subtitle:
    "Industrial biotech needed a cellulase variant stable above 75°C for a next-generation biofuel pretreatment line.",
  company: "Industrial biotech division (Fortune 500 subsidiary, 12-person R&D team)",
  timeline: "April to May 2025",
  engagementType: "Protein Design and Developability Pipeline",
  headlineMetrics: [
    { value: "3 wks", label: "Computational delivery" },
    { value: "+22°C", label: "ΔTm on lead variant" },
    { value: "78%", label: "Activity retained at 75°C" },
    { value: "8/10", label: "Expressing variants (E. coli)" },
  ],
  challenge:
    "An industrial biotech team was optimizing a fungal cellulase cocktail for lignocellulosic biofuel production. The wild-type endoglucanase lost 90% activity above 65°C, limiting pretreatment throughput on their pilot line. Directed evolution over 14 months had produced variants with +8°C Tm improvement but plateaued. They needed computationally designed variants targeting +15 to 20°C Tm gain while maintaining catalytic activity at pH 4.8, before a $12M pilot scale-up decision.",
  constraints: [
    "Budget: $295K (protein engineering line item)",
    "Timeline: Ranked enzyme variants in 3 weeks",
    "Must express in E. coli (no fungal expression system change)",
    "Activity at 75°C must exceed 70% of wild-type activity at optimal temperature",
  ],
  phases: [
    {
      title: "Week 1: Stability Mapping and Mutation Library Design",
      input: [
        "Wild-type endoglucanase structure (AlphaFold model, validated against homolog PDB: 4AAJ)",
        "Directed evolution trajectory (47 variants with Tm and activity data)",
        "Active site conservation analysis and catalytic triad mapping",
      ],
      methods: [
        "ESM-2 mutational scanning across 380 surface and core positions",
        "Rosetta ddG stability prediction for 840,000 single and double mutants",
        "Active site exclusion zone (8Å radius) to protect catalytic residues",
      ],
      output: [
        "Top 6,200 variants ranked by predicted ΔTm",
        "Activity retention probability scores for catalytic site-proximal mutations",
      ],
    },
    {
      title: "Week 2: Combinatorial Design and Activity Filtering",
      body: "Epistatic combination of top 40 stabilizing mutations generated 12,000 multi-point variants. Molecular dynamics at 400K for 100ns on top 200 candidates validated structural integrity. pH-dependent charge analysis filtered variants with pI shifts that would affect activity at pH 4.8. Solubility and E. coli expression probability scoring reduced pool to 65 candidates with predicted Tm gains of +12 to +26°C.",
    },
    {
      title: "Week 3: Ranking and Expression Priority List",
      output: [
        "Top 35 enzyme variants ranked by predicted Tm, activity retention, and E. coli expression score",
        "Expression priority list for top 10 (E. coli codon-optimized sequences)",
        "Recommended validation protocol: thermal shift assay (DSF), activity at 25/55/65/75°C, pilot reactor test",
        "Mutation map showing additive vs. epistatic stabilizing combinations",
      ],
    },
  ],
  rankedOutputTitle: "Final Ranked Enzyme Variants",
  rankedOutputNote: "Top candidates shown; full list of 35 delivered with expression-ready sequences.",
  rankedOutputCaption: "Top thermostabilized cellulase variants by predicted Tm and activity retention",
  rankedOutputColumns: ["Rank", "Mutations", "Predicted ΔTm (°C)", "Activity Score", "Expression", "Status"],
  rankedOutputRows: [
    { Rank: "1", Mutations: "S142P + A198V + L241I", "Predicted ΔTm (°C)": "+22", "Activity Score": "0.91", Expression: "0.88", Status: "Priority A" },
    { Rank: "2", Mutations: "S142P + T89K + L241I", "Predicted ΔTm (°C)": "+20", "Activity Score": "0.89", Expression: "0.85", Status: "Priority A" },
    { Rank: "3", Mutations: "A198V + D156N + L241I + V203A", "Predicted ΔTm (°C)": "+24", "Activity Score": "0.84", Expression: "0.82", Status: "Priority A" },
    { Rank: "4–5", Mutations: "Mixed (3–4 mutations)", "Predicted ΔTm (°C)": "+18 to +21", "Activity Score": "0.82–0.88", Expression: "0.78–0.86", Status: "Priority B" },
    { Rank: "6–10", Mutations: "Mixed (2–5 mutations)", "Predicted ΔTm (°C)": "+14 to +19", "Activity Score": "0.78–0.85", Expression: "0.72–0.84", Status: "Priority B" },
    { Rank: "11–35", Mutations: "Mixed", "Predicted ΔTm (°C)": "+10 to +16", "Activity Score": "0.70–0.82", Expression: "0.65–0.80", Status: "Backup" },
  ],
  comparisonTitle: "Speed vs. Prior Directed Evolution Campaign",
  comparisonColumns: ["Metric", "Directed Evolution", "ProteinForge", "Improvement"],
  comparisonRows: [
    { Metric: "Timeline", "Directed Evolution": "14 months", ProteinForge: "3 weeks", Improvement: "18× faster" },
    { Metric: "Cost", "Directed Evolution": "$680K (incl. screening)", ProteinForge: "$295K", Improvement: "57% savings" },
    { Metric: "Variants Evaluated", "Directed Evolution": "47 (physical)", ProteinForge: "840K+ (in silico)", Improvement: "18,000× larger search" },
    { Metric: "Best ΔTm Achieved", "Directed Evolution": "+8°C", ProteinForge: "+22°C (validated)", Improvement: "2.75× greater improvement" },
  ],
  wetLabTitle: "Wet-Lab Validation Outcomes (6 weeks post-delivery)",
  wetLabSubtitle: "Expression, thermal stability, and activity results on top 10 expressed variants.",
  wetLabColumns: ["Variant", "Predicted ΔTm", "Observed Tm (°C)", "Activity at 75°C", "Expressing?", "Notes"],
  wetLabRows: [
    { Variant: "Rank 1", "Predicted ΔTm": "+22°C", "Observed Tm (°C)": "87", "Activity at 75°C": "78%", "Expressing?": "Yes", Notes: "Best overall; pilot reactor validated" },
    { Variant: "Rank 2", "Predicted ΔTm": "+20°C", "Observed Tm (°C)": "85", "Activity at 75°C": "81%", "Expressing?": "Yes", Notes: "Highest activity retention at 75°C" },
    { Variant: "Rank 3", "Predicted ΔTm": "+24°C", "Observed Tm (°C)": "89", "Activity at 75°C": "72%", "Expressing?": "Yes", Notes: "Highest Tm; slight activity trade-off" },
    { Variant: "Rank 4", "Predicted ΔTm": "+19°C", "Observed Tm (°C)": "84", "Activity at 75°C": "76%", "Expressing?": "Yes", Notes: "Good balance of stability and activity" },
    { Variant: "Rank 5", "Predicted ΔTm": "+18°C", "Observed Tm (°C)": "83", "Activity at 75°C": "74%", "Expressing?": "Yes", Notes: "Acceptable for backup series" },
    { Variant: "Rank 6–8", "Predicted ΔTm": "+14 to +17°C", "Observed Tm (°C)": "80–82", "Activity at 75°C": "70–75%", "Expressing?": "Yes (3/3)", Notes: "3 additional validated variants" },
    { Variant: "Rank 9–10", "Predicted ΔTm": "+12 to +15°C", "Observed Tm (°C)": "Mixed", "Activity at 75°C": "Low", "Expressing?": "1/2", Notes: "Activity loss at active site proximity" },
  ],
  validationStats: [
    { value: "8/10", label: "E. coli expression success (top 10)" },
    { value: "+22°C", label: "Best validated ΔTm improvement" },
    { value: "78%", label: "Activity retained at 75°C (Rank 1)" },
    { value: "6 wks", label: "Timeline to pilot-validated variant" },
  ],
  immediateWins: [
    "Pilot scale-up approved: Rank 1 variant validated on 500L reactor; $12M scale-up decision de-risked",
    "Process throughput increased 35% at elevated pretreatment temperature",
    "Patent filing: 3 novel stabilizing mutation combinations with no prior art overlap",
  ],
  strategicAdvantages: [
    "Epistatic mutation combinations identified computationally that directed evolution missed over 14 months",
    "Active site exclusion zone preserved catalytic activity while allowing surface stabilization",
    "E. coli expression pre-filter prevented 6 variants that would have failed production constraints",
  ],
  followOn:
    "Q3 2025: cocktail optimization combining Rank 1 endoglucanase with complementary cellobiohydrolase via ProteinForge. Estimated cost: $240K. Target: full cellulase cocktail stable above 75°C.",
  lessonsWorked: [
    "ESM-2 + Rosetta ddG ensemble outperformed either method alone for ΔTm prediction (R² = 0.76 vs. 0.58/0.64)",
    "400K MD simulations caught 8 variants with predicted stability gains but unfolding trajectories",
    "Prior directed evolution data as training signal improved activity retention scoring accuracy",
  ],
  lessonsChallenges: [
    {
      challenge:
        "Rank 3 achieved highest Tm (+24°C) but 72% activity at 75°C vs. 78% for Rank 1. Root cause: core mutation near substrate binding groove.",
      mitigation: "Tightened active site exclusion to 10Å for multi-point variants; added activity retention as co-primary rank key.",
    },
    {
      challenge:
        "Two variants with strong in vitro stability showed reduced performance in pilot reactor due to shear sensitivity.",
      mitigation: "Added surface charge and glycosylation site analysis to developability filter for industrial deployment context.",
    },
  ],
  recommendationsTitle: "When to use ProteinForge for enzyme engineering",
  recommendations: [
    "Directed evolution campaigns that have plateaued on stability or activity",
    "Industrial enzymes requiring simultaneous thermostability and activity optimization",
    "Expression system constraints (E. coli, yeast) that limit wet-lab screening throughput",
    "Scale-up decisions requiring validated variants before capital commitment",
  ],
  roiNote: "ROI: approximately 8:1 (pilot scale-up value + avoided repeat evolution + 18× faster timeline).",
  nextStepsNote:
    "Next steps: optimize full enzyme cocktail for industrial bioprocessing; iterate with pilot reactor feedback for closed-loop improvement.",
  about: {
    clientProfile: "Fortune 500 industrial biotech subsidiary, 12-person R&D team",
    duration: "3 weeks (computational delivery) + 6 weeks (validation)",
    totalCost: "$295K",
    date: "April to May 2025",
    disclaimer:
      "This case study is anonymized at client request. Enzyme sequences and institutional affiliations have been redacted. Full protocols available under NDA.",
  },
};

export const FLAGSHIP_CASE_STUDIES: FlagshipCaseStudy[] = [
  RSV_F_PROTEIN_CASE_STUDY,
  HER2_BISPECIFIC_CASE_STUDY,
  ENZYME_THERMOSTABILITY_CASE_STUDY,
];

export function getCaseStudyBySlug(slug: string): FlagshipCaseStudy | undefined {
  return FLAGSHIP_CASE_STUDIES.find((study) => study.slug === slug);
}

export const CASE_STUDY_AGGREGATE_METRICS = [
  ["70–85%", "Average cost reduction"],
  ["4–6×", "Average time savings"],
  ["72%", "Expression success (top 50)"],
  ["100%", "On-time delivery rate"],
] as const;
