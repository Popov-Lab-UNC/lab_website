import { color } from "framer-motion";

// Research Areas
export const researchAreas = [
  {
    icon: "robot",
    title: "AI-Driven Virtual Screening",
    description: "Developing hybrid methods that blend physics and generative modeling to accelerate virtual screening and prioritization of promising compounds.",
    link: "https://pubmed.ncbi.nlm.nih.gov/37802967/",
    color: "primary",
  },
  {
    icon: "dna",
    title: "DEL Open Science",
    description: "Democratizing DEL technology through our open-source computational platform, enabling any lab to design and analyze DELs.",
    link: "https://github.com/Popov-Lab-UNC/DELi/",
    color: "secondary",
  },
  {
    icon: "capsules",
    title: "Collaborative Campaigns",
    description: "Transforming computational insights into experimental validation through partnerships to accelerate the creation of new therapeutic agents.",
    link: "https://cicbdd.web.unc.edu/",
    color: "tertiary",
  },
  {
    icon: "atom",
    title: "Computational Biophysics",
    description: "Decoding protein motion to characterize allosteric and cryptic binding sites, guiding the rational design of molecules that exploit dynamic biological states.",
    link: "https://pubmed.ncbi.nlm.nih.gov/31283187/",
    color: "quaternary",
  },
];

// Team Members
export const teamMembers = [
  {
    name: "Konstantin Popov, PhD",
    role: "Principal Investigator",
    bio: "As head of the BIND Lab at UNC, Dr. Popov's expertise lies within the multidisciplinary crossroads of physics, chemistry, and computation. He is the major driver and strategist for the lab's research direction.",
    image: "/images/kpopov.jpg",
    color: "primary",
    github: "",
    linkedin: "https://www.linkedin.com/in/konstantin-popov-profile",
    googlescholar: "https://scholar.google.com/citations?hl=en&user=hzCErdwAAAAJ"
  },
  {
    name: "James Wellnitz",
    role: "PhD Candidate",
    bio: "A seasoned cheminformatician in both academia and industry, James is pragmatic and analytical, evaluating projects through a lens of scientific merit and real-world applicability. Despite his jaded exterior, he maintains a collaborative spirit and an infectious laugh. He loves frogs, and will let you know so.",
    image: "/images/jwellnitz.jpg",
    color: "secondary",
    github: "https://github.com/jimmyjbling",
    linkedin: "https://www.linkedin.com/in/james-wellnitz-3168b0150",
    googlescholar: "https://scholar.google.com/citations?user=ZhselLIAAAAJ&hl=en"
  },
  {
    name: "Brandon Novy",
    role: "PhD Candidate",
    bio: "An ex-wet-lab-scientist, Brandon combines rigorous scientific acumen with approachable warmth, excelling as both a critical thinker and a collaborator who dives deep into research. He has an unusually large appreciation for WWE (WHOO!) and coffee.",
    image: "/images/novy.jpg",
    color: "secondary",
    github: "https://github.com/Brandon-Cole",
    linkedin: "https://www.linkedin.com/in/brandon-novy-5a4227263/",
    googlescholar: "https://scholar.google.com/citations?user=GM9ju-UAAAAJ&hl=en"
  },
  {
    name: "Shu-Hang (Jason) Lin",
    role: "PhD Student",
    bio: "Jason grew up wanting to become a treasure hunter, and he views working in drug discovery as a decent substitute. He finds great fulfillment in learning across disciplines and hobbies to become a well-rounded researcher and individual.",
    image: "/images/shuhang.jpg",
    color: "secondary",
    github: "https://github.com/jasonlin90125",
    linkedin: "https://www.linkedin.com/in/jasonlin90125/",
    googlescholar: "https://scholar.google.com/citations?user=6nz2p08AAAAJ&hl=en"
  },
  {
    name: "Spencer Thompson",
    role: "Research Assistant",
    bio: "Spencer graduated from UNC in 2023 with a BS in Biochemistry and minors in Biology and Neuroscience. He works full-time at the UNC BRIC Small Animal Imaging Facility and volunteers his efforts at BIND. He is interested in developing novel ligands for targeted radiopharmaceutal imaging and therapy. He also enjoys fishing, going to the gym, and long walks on the beach.",
    image: "/images/thompson.jpg",
    color: "tertiary",
  },
  {
    name: "Adam Gramlich",
    role: "Research Assistant",
    bio: "Adam is a sophomore from Phoenix majoring in Chemistry (Biochemistry track) and Mathematics. He joined the lab in early 2025 to pursue research in drug discovery. Outside the lab, he enjoys Carolina sports, exploring new food spots, and scenic campus walks.",
    image: "/images/agramlic.jpg",
    color: "tertiary",
    linkedin: "https://www.linkedin.com/in/adam-gramlich-040b74217"
  },
  {
    name: "Julia Zhu",
    role: "Research Assistant",
    bio: "Julia is a sophomore majoring in Biochemistry and Mathematics with a minor in Pharmaceutical Sciences. She is interested in applying MD simulations to explore protein-ligand interactions and structure-based drug design. Outside the lab, she enjoys playing volleyball, swimming, and forcing her two (very patient) cats to sit through movie nights, whether they like it or not.",
    image: "/images/jiaz.jpeg",
    color: "tertiary"
  },
  {
    name: "Zengpeng (Alex) Liu",
    role: "Research Assistant",
    bio: "Alex is a freshman majoring in Biology. His research focuses on computational biology and the application of machine learning in drug discovery. He is currently working on molecular docking and protein-ligand interaction modeling, with a focus on membrane protein targets.",
    image: "/images/liualex.jpg",
    color: "tertiary"
  }
];

// Publications
export const publications = [
  {
    title: "Open-Source DNA-Encoded Library Package for Design, Decoding and Analysis: DELi",
    authors: "Wellnitz J, Novy B, Maxfield T, Zhilinskaya I, Lin SH, Axtman M, Leisner T, Norris-Drouin JL, Hardy BP, Pearce KH, Popov KI.",
    journal: "BioRxiv",
    year: "2025",
    tags: ["DEL Technology", "Tool Development"],
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
    link: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.4c02531",
    doi: "10.1021/acs.jmedchem.4c02531",
  },
  {
    title: "Identification of a cell-active chikungunya virus nsP2 protease inhibitor using a covalent fragment-based screening approach",
    authors: "Merten EM, Sears JD, Leisner TM, Hardy PB, Ghoshal A, Hossain MA, Asressu KH, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: "2024",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    link: "https://www.pnas.org/doi/10.1073/pnas.2409166121",
    doi: "10.1073/pnas.2409166121",
  },
  {
    title: "HIt Discovery using docking ENriched by GEnerative Modeling (HIDDEN GEM): A novel computational workflow for accelerated virtual screening of ultra-large chemical libraries",
    authors: "Popov KI, Wellnitz J, Maxfield T, Tropsha A.",
    journal: "Molecular Informatics",
    year: "2023",
    tags: ["Tool Development", "Virtual Screening"],
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
    title: "Structure Activity of β-Amidomethyl Vinyl Sulfones as Covalent Inhibitors of Chikungunya nsP2 Cysteine Protease with Antialphavirus Activity",
    authors: "Ghoshal A, Asressu KH, Hossain MA, Brown PJ, Nandakumar M, Vala A, et al.",
    journal: "Journal of Medicinal Chemistry",
    year: "2024",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    link: "https://pubs.acs.org/doi/10.1021/acs.jmedchem.4c01346",
    doi: "10.1021/acs.jmedchem.4c01346",
  },
  {
    title: "Synthesis of 5-Benzylamino and 5-Alkylamino-Substituted Pyrimido[4,5-c]quinoline Derivatives as CSNK2A Inhibitors with Antiviral Activity",
    authors: "Asressu KH, Smith JL, Dickmander RJ, Moorman NJ, Wellnitz J, Popov KI, Axtman AD, Willson TM.",
    journal: "Pharmaceuticals",
    year: "2024",
    tags: ["Virtual Screening", "Collaborative Drug Discovery"],
    link: "https://www.mdpi.com/1424-8247/17/3/306",
    doi: "10.3390/ph17030306",
  },
*/}

// Contact Info
export const contactInfo = {
  address: "3219 Marsico Hall, 125 Mason Farm Road\nChapel Hill, NC 27599",
  email: {
    general: "thebindlab@office.unc.edu",
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
