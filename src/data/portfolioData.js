export const profile = {
  name: "Sanchit Jain",
  title: "B.Tech Student in Artificial Intelligence & Data Science",
  institution: "Guru Ghasidas Vishwavidyalaya (GGV), Bilaspur",
  location: "Bilaspur, Chhattisgarh, India",
  email: "jainsanchit360@gmail.com",
  github: "https://github.com/jainsanchit360-ux",
  linkedin: "https://www.linkedin.com/in/sanchit-jain-5b623739b/",
  bio: "I am a B.Tech Artificial Intelligence & Data Science student at Guru Ghasidas Vishwavidyalaya (GGV), Bilaspur. Driven by curiosity in AI, Data Science, and modern web software development, I focus on creating utility platforms, campus tools, and data-driven applications that solve practical real-world challenges.",
}

export const areasOfInterest = [
  { name: "Artificial Intelligence", desc: "Machine learning algorithms, intelligent automation, and pattern recognition." },
  { name: "Data Science", desc: "Data processing, exploratory analysis, and predictive statistical modeling." },
  { name: "Generative AI", desc: "Exploring LLMs, prompt engineering, and synthetic data workflows." },
  { name: "Web Development", desc: "Building responsive, modern user interfaces and full-stack web platforms." },
  { name: "Automation", desc: "Creating workflow pipelines to automate repetitive tasks and data syncs." },
  { name: "Software Development", desc: "Deepening foundational computer science principles, algorithms, and clean architecture." }
]

export const projects = [
  {
    id: "toolnagri",
    title: "ToolNagri",
    category: "Web Utility Platform",
    featured: true,
    liveUrl: "https://tools.sanchitworld.in/",
    badge: "Live Product",
    description: "A free, fast online utility platform containing a comprehensive suite of useful PDF, image, and document manipulation tools designed for everyday efficiency.",
    tags: ["Web Utility", "Document Tools", "PDF Processing", "Image Tools"],
    highlights: [
      "Suite of online PDF and image tools",
      "Fast client-side & server-assisted processing",
      "Clean intuitive user interface for seamless workflow"
    ]
  },
  {
    id: "ggv-bazar",
    title: "GGV Bazar",
    category: "Campus Marketplace",
    featured: true,
    liveUrl: null,
    badge: "Featured Project",
    description: "A specialized campus marketplace project designed specifically for students of Guru Ghasidas Vishwavidyalaya (GGV), enabling convenient peer-to-peer buying, selling, and resource sharing.",
    tags: ["Full-Stack", "Marketplace", "Campus Community", "Peer-to-Peer"],
    highlights: [
      "Student-centric buying and selling portal",
      "Categorized listings for books, lab equipment & essentials",
      "Secure student verification & local campus connect"
    ]
  },
  {
    id: "campus-navigator",
    title: "GGV Campus Navigator",
    category: "3D Spatial Mapping",
    featured: false,
    githubUrl: "https://github.com/jainsanchit360-ux/campus-navigator",
    badge: "AI & Spatial Dev",
    description: "An interactive 3D spatial mapping and navigation application built for GGV campus to assist students and visitors in exploring campus landmarks.",
    tags: ["React", "MapLibre GL 3D", "Spatial Tech", "FastAPI"],
    highlights: [
      "Interactive 3D building rendering",
      "Route guidance across campus blocks"
    ]
  },
  {
    id: "medicine-stock",
    title: "Medicine Stock Prediction Model",
    category: "Data Science & Forecasting",
    featured: false,
    githubUrl: "https://github.com/jainsanchit360-ux/medicine-stock-prediction",
    badge: "Data Science",
    description: "An ensemble forecasting model designed to project pharmaceutical demand and optimize inventory levels to reduce stockouts and expiration waste.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Demand Forecasting"],
    highlights: [
      "Time-series demand prediction",
      "Inventory optimization analytics"
    ]
  },
  {
    id: "skillswap",
    title: "SkillSwap (NeighborSync)",
    category: "Automation & Web Dev",
    featured: false,
    githubUrl: "https://github.com/jainsanchit360-ux/skillswap",
    badge: "Workflow Automation",
    description: "A peer-to-peer service bartering and knowledge exchange application powered by custom automated workflows and database syncing.",
    tags: ["n8n", "Supabase", "React", "Automation"],
    highlights: [
      "Automated skill matching engine",
      "Real-time request routing"
    ]
  }
]

export const skills = [
  { name: "Python", category: "Programming", level: "Primary" },
  { name: "C++", category: "Programming", level: "Foundational" },
  { name: "Data Structures & Algorithms", category: "Core CS", level: "Foundational" },
  { name: "Artificial Intelligence", category: "AI & ML", level: "Academic Focus" },
  { name: "Generative AI", category: "AI & ML", level: "Practical Exploration" },
  { name: "Data Analysis", category: "Data Science", level: "Intermediate" },
  { name: "SQL / DBMS", category: "Database", level: "Intermediate" },
  { name: "Web Development", category: "Engineering", level: "Practical Skills" },
  { name: "Git / GitHub", category: "Tools", level: "Daily Workflow" }
]

export const activities = [
  {
    role: "AWS Builder Leader of GGV",
    organization: "AWS Cloud Club / Student Community GGV",
    period: "Active",
    description: "Leading cloud technology awareness, organizing technical workshops, and fostering cloud computing learning among student developer communities at GGV."
  },
  {
    role: "Hackathon Participant & Innovator",
    organization: "Technical Competitions",
    period: "Ongoing",
    description: "Actively engaging in national and campus hackathons to build prototype solutions spanning machine learning, smart automation, and web platforms."
  },
  {
    role: "College Technical Projects",
    organization: "GGV Bilaspur",
    period: "Academic",
    description: "Collaborating on department engineering initiatives, peer learning sessions, and AI/Data Science academic projects."
  }
]
