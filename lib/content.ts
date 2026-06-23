export type Domain = {
  code: string;
  title: string;
  description: string;
};

export const technologyDomains: Domain[] = [
  {
    code: "01",
    title: "Photonics & Plasmonics",
    description:
      "Light-based systems for computation, sensing, and communication, including the plasmonic structures that confine light below the diffraction limit.",
  },
  {
    code: "02",
    title: "Quantum Technologies",
    description:
      "Quantum computing, sensing, and communication architectures moving from laboratory demonstration toward applied infrastructure.",
  },
  {
    code: "03",
    title: "Advanced & Optical Computing",
    description:
      "Post-silicon computing substrates, including optical and neuromorphic architectures built for the limits classical computing is approaching.",
  },
  {
    code: "04",
    title: "Neuromorphic Computing",
    description:
      "Brain-inspired processing architectures designed for efficiency, low-latency inference, and a fundamentally different computational model.",
  },
  {
    code: "05",
    title: "AI Infrastructure",
    description:
      "The compute, interconnect, and systems layer underpinning frontier artificial intelligence at national and institutional scale.",
  },
  {
    code: "06",
    title: "Aerospace Systems",
    description:
      "Launch, propulsion, and platform technologies extending the operational envelope of aerospace and orbital systems.",
  },
  {
    code: "07",
    title: "Space Technology & Satellite Communications",
    description:
      "Satellite constellations, communications infrastructure, and the orbital systems forming the next layer of global connectivity.",
  },
  {
    code: "08",
    title: "Defence Systems",
    description:
      "Strategic technologies shaping modern defence capability, from autonomy to signal dominance to next-generation platforms.",
  },
  {
    code: "09",
    title: "Signal Processing",
    description:
      "Detection, classification, and analysis of signals across the electromagnetic spectrum for defence, communications, and sensing.",
  },
  {
    code: "10",
    title: "Energy Systems",
    description:
      "Advanced nuclear, fusion, and grid-scale technologies redefining how energy is generated, stored, and distributed.",
  },
  {
    code: "11",
    title: "Advanced Materials",
    description:
      "Engineered materials enabling performance thresholds unreachable by conventional substrates, alloys, and composites.",
  },
  {
    code: "12",
    title: "Robotics & Autonomous Systems",
    description:
      "Autonomous platforms operating across industrial, defence, and exploratory environments without continuous human control.",
  },
  {
    code: "13",
    title: "Sensors",
    description:
      "High-fidelity sensing systems for defence, aerospace, and industrial applications operating at the edge of physical measurement.",
  },
];

export type Market = {
  title: string;
  description: string;
};

export const markets: Market[] = [
  {
    title: "Investors",
    description: "Frontier-sector intelligence for funds allocating into deep technology before it reaches consensus.",
  },
  {
    title: "Defence & Government",
    description: "Strategic technology analysis for agencies and ministries tracking capability shifts that affect national posture.",
  },
  {
    title: "Aerospace & Space",
    description: "Technical and market intelligence for organisations building and operating aerospace and orbital systems.",
  },
  {
    title: "Energy & Infrastructure",
    description: "Coverage of advanced energy and infrastructure technologies for operators and financiers of next-generation capacity.",
  },
  {
    title: "Research Institutions",
    description: "Commercialisation and positioning intelligence for institutions translating research into applied impact.",
  },
  {
    title: "Deep-Tech Founders",
    description: "Market and competitive intelligence for founders building in technically demanding, capital-intensive sectors.",
  },
  {
    title: "Corporate Innovation Teams",
    description: "Structured technology scanning for corporates assessing where to build, partner, or acquire.",
  },
  {
    title: "Private Equity & Venture Capital",
    description: "Diligence-grade sector mapping and dealflow intelligence for funds operating at the frontier of technology.",
  },
];

export const markets24: string[] = [
  "Frontier science intelligence",
  "Deep-tech market intelligence",
  "Photonics",
  "Plasmonics",
  "Quantum technologies",
  "Advanced computing",
  "Optical computing",
  "Neuromorphic computing",
  "Aerospace systems",
  "Defence technology",
  "Satellite communications",
  "Signal processing",
  "Energy technology",
  "Advanced materials",
  "Robotics",
  "Autonomous systems",
  "Sensor technology",
  "Strategic technology advisory",
  "Investor intelligence",
  "Corporate innovation intelligence",
  "Government and defence intelligence",
  "Research commercialisation",
  "University spinout intelligence",
  "Frontier technology reports",
  "Dealflow mapping",
  "Natural resources technology intelligence",
  "Climate and energy infrastructure intelligence",
];

export type TechnologySection = {
  id: string;
  index: string;
  title: string;
  intro: string;
  points: string[];
};

export const technologySections: TechnologySection[] = [
  {
    id: "photonics-plasmonics",
    index: "01",
    title: "Photonics & Plasmonics",
    intro:
      "Light-based systems for computation, sensing, and communication, and the plasmonic structures that manipulate light at sub-wavelength scale.",
    points: [
      "Integrated photonic circuits for high-bandwidth interconnect",
      "Plasmonic structures for sub-diffraction-limit sensing",
      "Photonic components for optical computing substrates",
      "Light-based communication systems for defence and infrastructure",
    ],
  },
  {
    id: "quantum",
    index: "02",
    title: "Quantum Technologies",
    intro:
      "Quantum computing, sensing, and communication systems moving from research demonstration toward applied capability.",
    points: [
      "Quantum computing architectures and qubit modalities",
      "Quantum sensing for navigation, timing, and detection",
      "Quantum communication and cryptographic infrastructure",
      "Hybrid classical-quantum computing systems",
    ],
  },
  {
    id: "advanced-optical-computing",
    index: "03",
    title: "Advanced & Optical Computing",
    intro:
      "Computing architectures built for the physical and economic limits classical silicon is approaching, including optical and neuromorphic substrates.",
    points: [
      "Optical computing for high-throughput, low-power processing",
      "Neuromorphic architectures for efficient inference at the edge",
      "AI infrastructure and next-generation interconnect",
      "Post-silicon computing substrates and architectures",
    ],
  },
  {
    id: "aerospace-satellite",
    index: "04",
    title: "Aerospace & Satellite Systems",
    intro:
      "Launch, propulsion, and orbital infrastructure extending the reach and persistence of aerospace and space systems.",
    points: [
      "Launch and propulsion systems",
      "Satellite constellations and orbital platforms",
      "Satellite communications infrastructure",
      "Space-based sensing and surveillance systems",
    ],
  },
  {
    id: "defence-strategic-technology",
    index: "05",
    title: "Defence & Strategic Technology",
    intro:
      "Technologies shaping modern defence capability, spanning autonomy, signal dominance, and next-generation platforms.",
    points: [
      "Autonomous defence platforms and systems",
      "Signal processing and electromagnetic spectrum dominance",
      "Strategic technology programmes and capability development",
      "Defence-grade sensing and detection systems",
    ],
  },
  {
    id: "energy-infrastructure",
    index: "06",
    title: "Energy & Infrastructure",
    intro:
      "Advanced energy generation, storage, and grid technologies redefining the infrastructure layer of the next century.",
    points: [
      "Advanced nuclear and fusion energy systems",
      "Grid-scale storage and distribution infrastructure",
      "Offshore wind and hydrogen energy systems",
      "Frontier energy generation technologies",
    ],
  },
  {
    id: "robotics-autonomous",
    index: "07",
    title: "Robotics & Autonomous Systems",
    intro:
      "Autonomous platforms operating across industrial, defence, and exploratory environments with minimal human intervention.",
    points: [
      "Industrial and field robotics platforms",
      "Autonomous navigation and control systems",
      "Multi-agent and swarm robotics architectures",
      "Human-machine teaming systems",
    ],
  },
  {
    id: "materials-sensors",
    index: "08",
    title: "Advanced Materials & Sensors",
    intro:
      "Engineered materials and sensing systems operating at the edge of physical performance and measurement.",
    points: [
      "Advanced composites and engineered alloys",
      "High-fidelity sensing systems for defence and industry",
      "Materials for extreme environments",
      "Sensor fusion and detection architectures",
    ],
  },
];
