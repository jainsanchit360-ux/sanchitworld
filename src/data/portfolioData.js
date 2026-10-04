export const profile = {
  name: "Sanchit Jain",
  title: "B.Tech Student in Artificial Intelligence & Data Science",
  institution: "Guru Ghasidas Vishwavidyalaya (GGV), Bilaspur",
  location: "Bilaspur, Chhattisgarh, India",
  email: "jainsanchit360@gmail.com",
  github: "https://github.com/jainsanchit360-ux",
  linkedin: "https://www.linkedin.com/in/sanchit-jain-5b623739b/",
  bio: "I am a B.Tech student in Artificial Intelligence & Data Science at Guru Ghasidas Vishwavidyalaya (GGV), a central university located in Bilaspur, Chhattisgarh. My interest in technology grew from a simple question — how can software solve problems that real people face every day?",
  bioExtended: "At GGV, I study core AI and Data Science subjects including machine learning, data structures and algorithms, database management systems, and statistical modelling. Beyond academics, I apply this learning through practical projects: ToolNagri, a free online utility platform with 20+ tools serving students and professionals across India; GGV Bazar, a full-stack campus peer-to-peer marketplace for Guru Ghasidas Vishwavidyalaya students; and several AI and data science experiments including pharmaceutical demand forecasting and 3D campus spatial navigation. I also serve as the AWS Builder Leader at GGV, where I help drive cloud computing awareness and organise technical workshops for the student developer community. I believe the best way to learn technology is to build something real and put it in front of real users.",
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
    description: "ToolNagri is a free online utility hub built for Indian students and professionals who need practical tools without creating an account or paying a subscription. The platform provides 20+ tools across eight categories — Student Tools (SGPA/CGPA/Attendance calculators), Finance Tools (EMI, SIP, GST calculators), PDF & Document Tools (convert, merge, compress, split), AI Tools, Calculators, Converters, Career Tools (Resume Builder), and Everyday Tools (QR Code Generator, Image Compressor). All document tools process files locally in the user's browser for privacy.",
    tags: ["Vanilla JS", "HTML/CSS", "PDF Processing", "Client-Side", "PWA"],
    highlights: [
      "20+ free tools across 8 categories — no account required",
      "PDF tools process files locally in-browser for user privacy",
      "Student-focused: SGPA, CGPA, attendance and marks calculators",
      "Career tools: ATS-friendly Resume Builder with PDF export",
      "Mobile-first design built for Indian internet conditions"
    ]
  },
  {
    id: "ggv-bazar",
    title: "GGV Bazar",
    category: "Campus Marketplace",
    featured: true,
    liveUrl: "https://ggvbazar.sanchitworld.in/",
    badge: "Live Marketplace",
    description: "GGV Bazar is a fully deployed student-to-student marketplace built specifically for Guru Ghasidas Vishwavidyalaya (GGV), Bilaspur. Students can list and discover pre-owned items across eight categories: Books & Notes, Electronics, Cycles, Hostel & Furniture, Stationery, Sports, Clothing, and Others. Built with Next.js App Router on the frontend and Supabase for authentication, database, and image storage — real listings from GGV students are live on the platform today.",
    tags: ["Next.js", "Supabase", "Full-Stack", "Marketplace", "PostgreSQL"],
    highlights: [
      "Live peer-to-peer marketplace with real GGV student listings",
      "8 item categories: Books, Electronics, Cycles, Hostel gear & more",
      "Supabase-backed auth, image storage, and real-time database",
      "Next.js App Router with server-side rendering and SEO metadata",
      "Search, category filters, favourites, and item listing creation"
    ]
  },
  {
    id: "campus-navigator",
    title: "GGV Campus Navigator",
    category: "3D Spatial Mapping",
    featured: false,
    githubUrl: "https://github.com/jainsanchit360-ux/campus-navigator",
    badge: "AI & Spatial Dev",
    description: "An interactive 3D campus navigation application for Guru Ghasidas Vishwavidyalaya that helps students and visitors explore the campus layout, locate buildings, and find walking routes between departments. Built using MapLibre GL JS for 3D building rendering and a FastAPI backend for route computation.",
    tags: ["React", "MapLibre GL 3D", "Spatial Tech", "FastAPI", "Python"],
    highlights: [
      "Interactive 3D building rendering of the GGV campus",
      "Walking route guidance between departments and hostels",
      "FastAPI backend powering route computation logic"
    ]
  },
  {
    id: "medicine-stock",
    title: "Medicine Stock Prediction Model",
    category: "Data Science & Forecasting",
    featured: false,
    githubUrl: "https://github.com/jainsanchit360-ux/medicine-stock-prediction",
    badge: "Data Science",
    description: "A machine learning forecasting model that predicts pharmaceutical demand to help optimise inventory levels in healthcare settings. Uses time-series analysis and ensemble methods (built with Python, Pandas, and Scikit-Learn) to project future stock requirements and flag medicines at risk of stockout or expiration waste before they become a problem.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Time-Series", "Demand Forecasting"],
    highlights: [
      "Ensemble ML model for time-series pharmaceutical demand prediction",
      "Inventory optimisation to reduce both stockouts and expiry waste",
      "Built with Pandas data pipelines and Scikit-Learn estimators"
    ]
  },
  {
    id: "skillswap",
    title: "SkillSwap (NeighborSync)",
    category: "Automation & Web Dev",
    featured: false,
    githubUrl: "https://github.com/jainsanchit360-ux/skillswap",
    badge: "Workflow Automation",
    description: "A peer-to-peer skill bartering platform where users can offer and request services from their community without monetary exchange. The backend is powered by n8n automation workflows that handle skill-matching logic, notification routing, and Supabase database synchronisation — removing the need for custom server code for core workflow operations.",
    tags: ["n8n", "Supabase", "React", "Automation", "Workflow"],
    highlights: [
      "n8n automation workflows for skill-matching and request routing",
      "Supabase real-time database sync for offer and request tracking",
      "No-server-code approach using n8n as the automation backbone"
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
    organization: "AWS Cloud Club — Guru Ghasidas Vishwavidyalaya",
    period: "2025 – Present",
    description: "Appointed AWS Builder Leader for the GGV campus community. Responsibilities include organising cloud computing workshops covering AWS core services, guiding fellow students on cloud architecture concepts, and building awareness of cloud-native development practices among the GGV student developer community."
  },
  {
    role: "Hackathon Participant & Builder",
    organization: "National & Campus Technical Competitions",
    period: "2024 – Present",
    description: "Participated in national and campus-level hackathons, building prototype solutions in time-constrained environments. Projects have spanned domains including machine learning-based prediction systems, automated workflow tools, and campus-utility web applications — including early prototypes that led to ToolNagri and GGV Bazar."
  },
  {
    role: "Student Developer & AI/DS Researcher",
    organization: "Department of AI & Data Science, GGV Bilaspur",
    period: "2023 – Present",
    description: "Pursuing academic coursework in Artificial Intelligence, Data Science, Machine Learning, DBMS, and Data Structures & Algorithms at GGV — a central university in Bilaspur, Chhattisgarh. Applies academic learning directly to real deployed projects, treating each project as an extension of practical engineering education."
  }
]
