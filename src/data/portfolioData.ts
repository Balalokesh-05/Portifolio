/**
 * Centralized Portfolio Configuration & Data
 * For Bala Lokesh Lutukurthi
 *
 * Broad Early-Career Technology Professional:
 * Software Development | Cybersecurity | AI/ML | Systems | Data
 *
 * All URLs, personal details, project metadata, and external links are maintained here.
 */

// ==========================================
// CONFIGURABLE URLS & CONTACT PLACEHOLDERS
// ==========================================
export const CONFIG = {
  // Resume download link & filename
  RESUME_URL: "/Bala_Lokesh_Lutukurthi_Resume.pdf",
  RESUME_FILENAME: "Bala-Lokesh-Lutukurthi-Resume.pdf",

  // Contact details (placeholders until configured)
  EMAIL: "", // e.g. "balalokesh.dev@example.com"
  LINKEDIN_URL: "", // e.g. "https://linkedin.com/in/balalokesh"
  GITHUB_URL: "https://github.com/Balalokesh-05",
  GITHUB_USERNAME: "Balalokesh-05",

  // Specific Project Repositories
  PHISHING_PROJECT_GITHUB_URL: "https://github.com/Balalokesh-05/Hybrid-Phishing-Detection-System",
  SIEM_PROJECT_GITHUB_URL: "https://github.com/Balalokesh-05/SIEM-Log-Collector-Tool",

  // Optional Certification verification URLs
  CERT_CSA_URL: "",
  CERT_PEH_URL: "",
  CERT_NPTEL_URL: "",
};

// ==========================================
// PERSONAL & HERO PROFILE
// ==========================================
export interface PersonalProfile {
  name: string;
  initials: string;
  primaryTitle: string;
  secondaryPositioning: string;
  supportingLine1: string;
  supportingLine2: string;
  statusBadge: string;
}

export const PERSONAL_PROFILE: PersonalProfile = {
  name: "Bala Lokesh Lutukurthi",
  initials: "BL",
  primaryTitle: "Software & Technology",
  secondaryPositioning: "MCA Graduate | Software Development | Cybersecurity | AI/ML",
  supportingLine1: "MCA graduate building practical solutions across software development, cybersecurity, AI/ML, and IT.",
  supportingLine2: "I enjoy learning technologies, solving practical problems, and building projects that combine software, data, security, and intelligent systems.",
  statusBadge: "Open to Full-Time Opportunities",
};

// Developer code snippet displayed in the hero terminal/code window
export const DEVELOPER_CODE_SNIPPET = `const developer = {
  name: "Bala Lokesh Lutukurthi",
  education: "MCA Graduate",
  focus: [
    "Software",
    "Cybersecurity",
    "AI / ML",
    "Python"
  ],
  mindset: "Build • Learn • Solve",
  availableFor: "Full-Time Opportunities"
};`;

// ==========================================
// QUICK PROFILE STATS (Strictly verified)
// ==========================================
export interface QuickStat {
  label: string;
  subtext: string;
  tag: string;
}

export const QUICK_STATS: QuickStat[] = [
  {
    label: "MCA Graduate",
    subtext: "Master of Computer Applications",
    tag: "Education",
  },
  {
    label: "Software & Python",
    subtext: "Web Development & Scripting",
    tag: "Development",
  },
  {
    label: "Cybersecurity & SIEM",
    subtext: "Threat Analysis & Monitoring",
    tag: "Security",
  },
  {
    label: "AI / ML Projects",
    subtext: "Data Analysis & Classification",
    tag: "Intelligent Systems",
  },
];

// ==========================================
// ABOUT DATA
// ==========================================
export const ABOUT_DATA = {
  heading: "About Me",
  paragraphs: [
    "I am an MCA graduate with a broad interest in software development, cybersecurity, artificial intelligence, machine learning, data, and IT. I enjoy turning ideas into practical projects and continuously expanding my technical skills through hands-on development and learning.",
    "My technical foundation combines modern web development, Python programming, and data analysis alongside practical exploration of security operations, threat detection systems, and machine learning models.",
    "I approach technology with a problem-solving mindset—focused on writing clean code, understanding underlying system architectures, and delivering reliable software and security solutions.",
  ],
  focusPillars: [
    {
      title: "Software & Web Development",
      description: "Building responsive, modular applications and RESTful backend services using React, Vite, Node.js, Python, Flask, and clean design patterns.",
      icon: "Code2",
    },
    {
      title: "Data & Machine Learning",
      description: "Applying statistical models, feature extraction pipelines, scikit-learn, Random Forest classification, and exploratory quantum verification.",
      icon: "Cpu",
    },
    {
      title: "Cybersecurity & Defense",
      description: "Hands-on experience in threat detection heuristics, SIEM log monitoring, vulnerability analysis, and network security fundamentals.",
      icon: "Shield",
    },
  ],
};

// ==========================================
// TECHNICAL SKILLS (Balanced categories)
// ==========================================
export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  description: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "software_dev",
    name: "SOFTWARE DEVELOPMENT",
    description: "Frontend and backend web technologies, modern frameworks, and application development.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "REST APIs",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "data_ai",
    name: "DATA & AI",
    description: "Machine learning algorithms, data manipulation, feature engineering, and model training.",
    skills: [
      "SQL",
      "Machine Learning",
      "Random Forest",
      "scikit-learn",
      "Data Analysis",
      "Feature Engineering",
      "Qiskit",
      "Flask",
    ],
  },
  {
    id: "cybersecurity",
    name: "CYBERSECURITY",
    description: "Defensive security operations, threat analysis, detection engineering, and monitoring.",
    skills: [
      "Security Operations",
      "SIEM",
      "Threat Detection",
      "Security Monitoring",
      "Phishing Detection",
      "Network Security",
      "Vulnerability Assessment",
      "OWASP",
      "Incident Analysis",
    ],
  },
  {
    id: "systems_networking",
    name: "SYSTEMS & NETWORKING",
    description: "Operating systems, core internet protocols, network fundamentals, and virtualization.",
    skills: [
      "Linux",
      "Windows",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Virtualization",
    ],
  },
  {
    id: "tools",
    name: "TOOLS",
    description: "Developer workflows, version control, IDEs, and security environments.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Kali Linux",
      "VirtualBox",
    ],
  },
];

// ==========================================
// FEATURED PROJECTS
// ==========================================
export interface ArchitectureStep {
  step: number;
  label: string;
  detail: string;
}

export interface EvaluationMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Cybersecurity + AI/ML" | "Cybersecurity + Software";
  description: string;
  technologies: string[];
  keyFeatures: string[];
  dataset?: string;
  evaluationNote?: string;
  evaluationMetrics?: EvaluationMetric[];
  githubUrl: string;
  problem: string;
  solution: string;
  architectureSteps: ArchitectureStep[];
  challenges: string;
  futureImprovements: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "phishing-detection-system",
    title: "Hybrid Phishing Detection System using Browser-Based Machine Learning",
    tagline: "Browser extension combining URL heuristics, DOM inspection, Random Forest, and secondary quantum ML verification.",
    category: "Cybersecurity + AI/ML",
    description:
      "A browser-based phishing detection system combining URL heuristics, DOM inspection, brand impersonation detection, homograph attack detection, and machine learning to identify potentially malicious websites.",
    technologies: [
      "Chrome Extension Manifest V3",
      "JavaScript",
      "React",
      "Vite",
      "Python",
      "Flask",
      "scikit-learn",
      "Random Forest",
      "Qiskit",
    ],
    keyFeatures: [
      "URL heuristics analysis & lexical token evaluation",
      "DOM inspection for deceptive login forms & suspicious tags",
      "Homograph attack detection (Unicode & punycode lookalike spoofing)",
      "Brand impersonation & domain spoofing detection",
      "Machine learning classification using Random Forest",
      "Browser-based detection via Chrome Extension Manifest V3",
      "Qiskit-based secondary verification algorithm",
    ],
    dataset: "7,738 samples across 17 extracted feature parameters",
    evaluationNote: "Project evaluation metrics provided by the developer from benchmark evaluations.",
    evaluationMetrics: [
      { label: "Accuracy", value: "94.5%" },
      { label: "Cross-validation", value: "0.9478" },
      { label: "Precision", value: "93.8%" },
      { label: "Recall", value: "95.1%" },
      { label: "F1-Score", value: "94.4%" },
      { label: "AUC-ROC", value: "0.97" },
    ],
    githubUrl: CONFIG.PHISHING_PROJECT_GITHUB_URL,
    problem:
      "Modern phishing schemes frequently employ newly registered domains, deceptive punycode characters, and obfuscated URL paths that bypass traditional static blocklists and delay threat mitigation.",
    solution:
      "A hybrid detection architecture where a lightweight Manifest V3 Chrome extension inspects real-time DOM elements, lexical indicators, and brand markers, querying a Random Forest classifier backed by secondary quantum verification for ambiguous cases.",
    architectureSteps: [
      { step: 1, label: "Browser Extension", detail: "Manifest V3 captures active tab URL, page structure & DOM elements" },
      { step: 2, label: "Feature Extraction", detail: "Extracts 17 distinct features (URL length, entropy, homoglyphs, brand signals, forms)" },
      { step: 3, label: "Random Forest", detail: "Supervised classification model evaluates feature vector probabilities" },
      { step: 4, label: "Risk Classification", detail: "Determines risk score and flags high-probability deceptive indicators" },
      { step: 5, label: "Qiskit Secondary Verification", detail: "Quantum ML circuit algorithm provides secondary validation for borderline cases" },
      { step: 6, label: "Final Security Result", detail: "Actionable alert rendered directly in the user's browser interface" },
    ],
    challenges:
      "Balancing client-side inference responsiveness in the browser while maintaining high recall (95.1%) to detect evasive deceptive pages.",
    futureImprovements:
      "Exploring WebAssembly execution for on-device inference and establishing automated threat intelligence feed synchronization.",
  },
  {
    id: "siem-log-collector",
    title: "SIEM Log Collector & Dashboard",
    tagline: "Centralized security event collection, normalization, and visual monitoring dashboard.",
    category: "Cybersecurity + Software",
    description:
      "A security monitoring project designed to collect, process, and visualize logs for centralized security event analysis.",
    technologies: [
      "Python",
      "Log Collection",
      "Log Processing",
      "Security Event Monitoring",
      "Dashboard Visualization",
      "Event Analysis",
    ],
    keyFeatures: [
      "Log collection from diverse system and service sources",
      "Log processing, filtering, and timestamp normalization",
      "Security event monitoring & threat signature matching",
      "Dashboard visualization for centralized monitoring",
      "Event analysis and structured audit traceability",
    ],
    githubUrl: CONFIG.SIEM_PROJECT_GITHUB_URL,
    problem:
      "Decentralized event logs across disparate system servers make it difficult to detect anomalous patterns, security incidents, and operational bottlenecks promptly.",
    solution:
      "A centralized log collection pipeline and interactive analytics dashboard that ingests system logs, parses key event fields, and visualizes security events.",
    architectureSteps: [
      { step: 1, label: "Log Sources", detail: "OS authentication logs, system events, and service activities" },
      { step: 2, label: "Log Collection Engine", detail: "Ingests and streams log entries from monitored sources" },
      { step: 3, label: "Log Processing & Normalizer", detail: "Transforms raw text into structured schema (IP, user, event ID, timestamp)" },
      { step: 4, label: "Security Event Monitoring", detail: "Analyzes event patterns for anomalies, failed logins, and suspicious operations" },
      { step: 5, label: "Dashboard Visualization", detail: "Surfaces security events, severity levels, and timeline metrics" },
    ],
    challenges:
      "Ensuring consistent parsing across heterogeneous log formats while maintaining efficient stream processing without bottlenecking.",
    futureImprovements:
      "Adding custom detection rules, exportable audit reports, and webhook integration for instant notification dispatch.",
  },
];

// ==========================================
// INTERNSHIPS & PROJECT EXPERIENCE
// ==========================================
export interface ExperienceItem {
  id: string;
  organization: string;
  roleOrContext: string;
  focusArea: string;
  details: string[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "t-hub-experience",
    organization: "T-Hub Project Space 7.0",
    roleOrContext: "Project Involvement",
    focusArea: "SIEM Log Collector & Dashboard",
    details: [
      "Involved in the architecture, design, and practical development of the SIEM Log Collector & Dashboard project.",
      "Worked on log collection workflows, event processing pipelines, and centralized visual monitoring dashboard implementation.",
    ],
  },
  {
    id: "appleton-innovations",
    organization: "Appleton Innovations",
    roleOrContext: "Project / Research Experience",
    focusArea: "IoT Security",
    details: [
      "Engaged in IoT security-related concepts, device communications, and practical vulnerability awareness.",
      "Explored security considerations in connected hardware systems and network communication flows.",
    ],
  },
  {
    id: "skilldizire-internship",
    organization: "Skilldizire",
    roleOrContext: "Web Development Internship",
    focusArea: "Frontend Web Development",
    details: [
      "Completed hands-on web development internship developing interactive frontend web components and responsive layouts.",
      "Strengthened practical proficiency in HTML, CSS, JavaScript, and modern web development workflows.",
    ],
  },
];

// ==========================================
// CERTIFICATIONS
// ==========================================
export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  credentialUrl?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "mile2-csa",
    title: "Mile2 Certified Cybersecurity Analyst C)CSA",
    issuer: "Mile2",
    description: "Focuses on security operations, threat identification, vulnerability analysis, and incident triage methodologies.",
    credentialUrl: CONFIG.CERT_CSA_URL,
  },
  {
    id: "mile2-cpeh",
    title: "Mile2 Certified Professional Ethical Hacker C)PEH",
    issuer: "Mile2",
    description: "Covers ethical hacking methodologies, reconnaissance, vulnerability assessment, and security auditing fundamentals.",
    credentialUrl: CONFIG.CERT_PEH_URL,
  },
  {
    id: "nptel-cert",
    title: "NPTEL Certificate",
    issuer: "NPTEL",
    description: "Structured academic certification validating technical competence through evaluated technical coursework.",
    credentialUrl: CONFIG.CERT_NPTEL_URL,
  },
];

// ==========================================
// EDUCATION
// ==========================================
export interface EducationItem {
  degree: string;
  cgpa: string;
  field: string;
  description: string;
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    cgpa: "CGPA: 7.72",
    field: "Aditya College of Engineering and Technology",
    description: "Advanced coursework covering software engineering, database management systems, machine learning concepts, and cybersecurity fundamentals.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    cgpa: "CGPA: 7.60",
    field: "Glocal University",
    description: "Core grounding in programming languages, data structures, computer networks, and operating systems.",
  },
];

// ==========================================
// GITHUB / OPEN SOURCE
// ==========================================
export interface RepoCardItem {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
}

export const FEATURED_REPOSITORIES: RepoCardItem[] = [
  {
    name: "Hybrid-Phishing-Detection-System",
    description: "Browser-based phishing detection combining URL heuristics, DOM inspection, and ML with Random Forest and Qiskit verification.",
    technologies: ["JavaScript", "Python", "Flask", "scikit-learn", "Qiskit"],
    repoUrl: CONFIG.PHISHING_PROJECT_GITHUB_URL,
  },
  {
    name: "SIEM Log Collector Tool",
    description: "Security monitoring project designed to collect, process, and visualize logs for centralized security event analysis.",
    technologies: ["Python", "Log Processing", "SIEM", "Security Monitoring"],
    repoUrl: CONFIG.SIEM_PROJECT_GITHUB_URL,
  },
];

// ==========================================
// CURRENTLY LEARNING & EXPLORING
// ==========================================
export const CURRENTLY_LEARNING = [
  { topic: "Software Development", note: "Modern frontend architectures, API design, and clean code patterns" },
  { topic: "Cybersecurity", note: "Threat modeling, defensive security practices, and incident response fundamentals" },
  { topic: "AI / Machine Learning", note: "Deepening practical model evaluation, scikit-learn, and data preprocessing" },
  { topic: "Cloud & IT", note: "Cloud infrastructure concepts, Linux administration, and deployment pipelines" },
  { topic: "Data & Analytics", note: "Advanced SQL queries, data modeling, and performance optimization" },
  { topic: "Security Automation", note: "Automating repetitive security checks, log parsing scripts, and workflows" },
];
