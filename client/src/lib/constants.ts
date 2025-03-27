// Research Areas
export const researchAreas = [
  {
    icon: "robot",
    title: "AI-Driven Virtual Screening",
    description: "Development of artificial intelligence methods for accelerated virtual screening (VS) to efficiently identify potential drug candidates from large compound libraries.",
    link: "https://pubmed.ncbi.nlm.nih.gov/37802967/",
    linkText: "Read our paper on HIDDEN GEM",
    color: "primary",
  },
  {
    icon: "dna",
    title: "DEL Technology",
    description: "Novel computational approaches for the design and analysis of DNA-encoded libraries to enhance the discovery of novel chemical compounds.",
    link: "https://github.com/Popov-Lab-UNC/DELi/",
    linkText: "For more information, see DELI",
    color: "secondary",
  },
  {
    icon: "capsules",
    title: "Drug Discovery Campaigns",
    description: "Collaborative hit discovery and optimization projects combining computational predictions with experimental validation to develop effective therapeutic candidates.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39388272/",
    linkText: "Like our work with the Pearce Lab in CICBDD",
    color: "accent",
  },
  {
    icon: "atom",
    title: "Computational Biophysics",
    description: "Identification and characterization of allosteric and cryptic binding sites using computational methods to understand protein dynamics and drug binding mechanisms.",
    color: "success",
  },
];

// Team Members
export const teamMembers = [
  {
    name: "Konstantin Popov, PhD",
    role: "Principal Investigator",
    bio: "Associate Professor, Department of Biochemistry & Biophysics at UNC Chapel Hill.",
    image: "/images/kpopov.jpg",
    color: "primary",
    github: "",
    linkedin: "https://www.linkedin.com/in/konstantin-popov-profile",
  },
  {
    name: "James Wellnitz",
    role: "PhD Student",
    bio: "Focused on computational drug discovery methods and virtual screening.",
    image: "/images/jwellnitz.jpg",
    color: "secondary",
    github: "https://github.com/jimmyjbling",
    linkedin: "https://www.linkedin.com/in/james-wellnitz-3168b0150"
  },
  {
    name: "Brandon Novy",
    role: "PhD Student",
    bio: "Specializes in computational drug discovery and molecular modeling.",
    image: "/images/novy.jpg",
    color: "secondary",
    github: "https://github.com/Brandon-Cole",
    linkedin: "https://www.linkedin.com/in/brandon-novy-5a4227263/"
  },
  {
    name: "Shu-Hang (Jason) Lin",
    role: "PhD Student",
    bio: "Jason graduated from the University of Michigan with a B.S. in Chemical Engineering in 2023. He is interested in designing algorithms that can propose novel and promising molecules for drug discovery.",
    image: "/images/shuhang.jpg",
    color: "secondary",
    github: "https://github.com/jasonlin90125",
    linkedin: "https://www.linkedin.com/in/jasonlin90125/"
  },
];

// Publications
export const publications = [
  {
    title: "Development of a Second-Generation, In Vivo Chemical Probe for PIKfyve",
    authors: "Min SM, Bashore FM, Smith JL, Havener TM, Howell S, Li H, Couñago RM, Popov KI, Axtman AD.",
    journal: "Journal of Medicinal Chemistry",
    year: "2025",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    color: "primary",
    link: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.4c02531",
    doi: "10.1021/acs.jmedchem.4c02531",
  },
  {
    title: "Identification of a cell-active chikungunya virus nsP2 protease inhibitor using a covalent fragment-based screening approach",
    authors: "Merten EM, Sears JD, Leisner TM, Hardy PB, Ghoshal A, Hossain MA, Asressu KH, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: "2024",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    color: "secondary",
    link: "https://www.pnas.org/doi/10.1073/pnas.2409166121",
    doi: "10.1073/pnas.2409166121",
  },
  {
    title: "Structure Activity of β-Amidomethyl Vinyl Sulfones as Covalent Inhibitors of Chikungunya nsP2 Cysteine Protease with Antialphavirus Activity",
    authors: "Ghoshal A, Asressu KH, Hossain MA, Brown PJ, Nandakumar M, Vala A, et al.",
    journal: "Journal of Medicinal Chemistry",
    year: "2024",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    color: "accent",
    link: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.4c01346",
    doi: "10.1021/acs.jmedchem.4c01346",
  },
  {
    title: "An Improved Metric and Benchmark for Assessing the Performance of Virtual Screening Models",
    authors: "Brocidiacono M, Popov KI, Tropsha A.",
    journal: "ArXiv [Preprint]",
    year: "2024",
    tags: ["Virtual Screening", "Tool Development"],
    color: "warning",
    link: "https://arxiv.org/html/2403.10478v1",
    doi: "2403.10478v1",
    isPreprint: true
  },
  {
    title: "STOPLIGHT: A Hit Scoring Calculator",
    authors: "Wellnitz J, Martin H, Hossain MA, Rath M, Fox C, Popov KI, Willson TM, et al.",
    journal: "Journal of Chemical Information and Modeling",
    year: "2024",
    tags: ["Virtual Screening", "Tool Development"],
    color: "success",
    link: "https://pubs.acs.org/doi/10.1021/acs.jcim.4c00412",
    doi: "10.1021/acs.jcim.4c00412",
  },
  {
    title: "Synthesis of 5-Benzylamino and 5-Alkylamino-Substituted Pyrimido[4,5-c]quinoline Derivatives as CSNK2A Inhibitors with Antiviral Activity",
    authors: "Asressu KH, Smith JL, Dickmander RJ, Moorman NJ, Wellnitz J, Popov KI, Axtman AD, Willson TM.",
    journal: "Pharmaceuticals",
    year: "2024",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    color: "primary",
    link: "https://www.mdpi.com/1424-8247/17/3/306",
    doi: "10.3390/ph17030306",
  },
  {
    title: "HIt Discovery using docking ENriched by GEnerative Modeling (HIDDEN GEM): A novel computational workflow for accelerated virtual screening of ultra-large chemical libraries",
    authors: "Popov KI, Wellnitz J, Maxfield T, Tropsha A.",
    journal: "Molecular Informatics",
    year: "2023",
    tags: ["Virtual Screening", "Tool Development"],
    color: "secondary",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/minf.202300207",
    doi: "10.1002/minf.202300207",
  },
];

// Process Steps
export const processSteps = [
  {
    phase: "Phase 1",
    title: "Target Identification",
    description: "Using genomics and proteomics to identify disease-relevant biological targets.",
    icon: "bullseye",
    color: "primary",
  },
  {
    phase: "Phase 2",
    title: "Hit Discovery",
    description: "AI-powered screening of compound libraries to find promising starting points.",
    icon: "flask",
    color: "secondary",
  },
  {
    phase: "Phase 3",
    title: "Lead Optimization",
    description: "Refining molecular structures to improve potency, selectivity, and properties.",
    icon: "microscope",
    color: "accent",
  },
  {
    phase: "Phase 4",
    title: "Preclinical Testing",
    description: "Validating safety and efficacy through advanced in vitro and in vivo studies.",
    icon: "vials",
    color: "success",
  },
];

// Advanced Development Stages
export const advancedStages = [
  {
    title: "Clinical Trials",
    description: "Rigorous testing in humans to confirm safety, efficacy, and dosing.",
    icon: "clipboard-check",
    color: "warning",
  },
  {
    title: "Regulatory Approval",
    description: "Navigating regulatory pathways to bring treatments to market.",
    icon: "file-signature",
    color: "primary",
  },
  {
    title: "Commercial Production",
    description: "Scaling manufacturing and distribution to reach patients worldwide.",
    icon: "chart-line",
    color: "secondary",
  },
];

// Contact Info
export const contactInfo = {
  address: "3219 Marsico Hall, 125 Mason Farm Road\nChapel Hill, NC 27599",
  email: {
    general: "kpopov@email.unc.edu",
  },
  affiliation: "UNC Eshelman School of Pharmacy",
};

// Interest Areas for Contact Form
export const interestAreas = [
  { value: "research", label: "Research Collaboration" },
  { value: "phd", label: "PhD Program Interest" },
  { value: "postdoc", label: "Postdoctoral Positions" },
  { value: "undergraduate", label: "Undergraduate Research" },
  { value: "rotation", label: "Rotation Student Interest" },
  { value: "other", label: "Other" },
];

// Social Media Links
export const socialLinks = [
  { platform: "linkedin", url: "https://www.linkedin.com/in/konstantin-popov-profile", icon: "linkedin-in" },
  { platform: "github", url: "https://github.com/Popov-Lab-UNC", icon: "github" },
  { platform: "university", url: "https://pharmacy.unc.edu/directory/kpopov/", icon: "university" },
];

// Navigation Links
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Publications", href: "#publications" },
  { label: "Connect", href: "#contact" },
];

// Footer Links
export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Research Areas", href: "#research" },
    { label: "Our Team", href: "#team" },
    { label: "Publications", href: "#publications" },
    { label: "Connect", href: "#contact" },
  ],
  resources: [
    { label: "Our Lab GitHub", href: "https://github.com/Popov-Lab-UNC", external: true },
    { label: "UNC Eshelman School of Pharmacy", href: "https://pharmacy.unc.edu/", external: true },
    { label: "CICBDD", href: "https://cicbdd.web.unc.edu/", external: true },
    { label: "CBMC PhD Program", href: "https://pharmacy.unc.edu/education/phd/drug-discovery/phd-program/", external: true },
    { label: "BBSP PhD Program", href: "https://bbsp.unc.edu/", external: true },
  ],
  legal: [
    { label: "UNC Privacy Policy", href: "https://www.unc.edu/privacy/", external: true },
    { label: "Accessibility", href: "https://www.unc.edu/about/accessibility/", external: true },
  ],
};
