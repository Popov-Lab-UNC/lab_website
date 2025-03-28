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
    bio: "As head of the BIND lab, Dr. Popov's expertise lies within the multidisciplinary crossroads of physics, chemistry, and computation. With a quiet and kind demeanor guided by principles, he is the major driver and strategist for the lab's research. He is known for his dedication and enthusiasm, whether for nurturing students or sharing breakthroughs with colleagues.",
    image: "/images/kpopov.jpg",
    color: "primary",
    github: "",
    linkedin: "https://www.linkedin.com/in/konstantin-popov-profile",
  },
  {
    name: "James Wellnitz",
    role: "PhD Candidate",
    bio: "A seasoned cheminformatician in both academia and industry, James is pragmatic and analytical, evaluating projects through a lens of scientific merit and real-world applicability. Despite his jaded exterior, he maintains a collaborative spirit and an infectious laugh. He loves frogs, and will let you know so.",
    image: "/images/jwellnitz.jpg",
    color: "secondary",
    github: "https://github.com/jimmyjbling",
    linkedin: "https://www.linkedin.com/in/james-wellnitz-3168b0150"
  },
  {
    name: "Brandon Novy",
    role: "PhD Candidate",
    bio: "A wet-lab-scientist-turned-computationalist, Brandon combines rigorous scientific acumen with approachable warmth, excelling as both a critical thinker who dives deep into research and a generous mentor who prioritizes others' growth. He thrives in collaborative spaces, balancing his sociability with thoughtful independence, ensuring his colleagues feel supported and inspired.",
    image: "/images/novy.jpg",
    color: "secondary",
    github: "https://github.com/Brandon-Cole",
    linkedin: "https://www.linkedin.com/in/brandon-novy-5a4227263/"
  },
  {
    name: "Shu-Hang (Jason) Lin",
    role: "PhD Student",
    bio: "Jason grew up wanting to become a treasure hunter, and he views working in drug discovery as a decent substitute. He finds great fulfillment in learning across disciplines and hobbies to become a well-rounded individual. He loves food and wants to make money so that he can travel the world and eat.",
    image: "/images/shuhang.jpg",
    color: "secondary",
    github: "https://github.com/jasonlin90125",
    linkedin: "https://www.linkedin.com/in/jasonlin90125/"
  },
];

// Publications
export const publications = [
  {
    title: "Open-Source DNA-Encoded Library Package for Design, Decoding and Analysis: DELi",
    authors: "Wellnitz J, Novy B, Maxfield T, Zhilinskaya I, Lin SH, Axtman M, Leisner T, Norris-Drouin JL, Hardy BP, Pearce KH, Popov KI.",
    journal: "BioRxiv",
    year: "2025",
    tags: ["Tool Development", "Collaborative Drug Discovery"],
    color: "primary",
    link: "https://www.biorxiv.org/content/10.1101/2025.02.25.640184v1",
    doi: "10.1101/2025.02.25.640184v1",
    isPreprint: true,
  },
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

{/*
    {
    title: "An Improved Metric and Benchmark for Assessing the Performance of Virtual Screening Models",
    authors: "Brocidiacono M, Popov KI, Tropsha A.",
    journal: "ArXiv",
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
*/}

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
