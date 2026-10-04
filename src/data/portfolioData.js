// All editable portfolio content lives here. Replace the [PLACEHOLDER] values.
export const personal = {
  name: "[NAME]",
  initials: "DA",
  role: "Data Analyst",
  photo: "", // paste an image URL here; leave empty to show initials
  location: "[CITY, COUNTRY]",
  email: "[EMAIL]",
  resumeUrl: "#",
  tagline:
    "I turn raw, messy data into clear business insight — cleaning with Python and SQL, modelling in Excel, and telling the story through Power BI dashboards.",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    kaggle: "https://kaggle.com/",
  },
};

export const about = {
  paragraphs: [
    "I'm a data analyst who enjoys the full journey from question to answer: framing the business problem, collecting and cleaning the data, exploring patterns, and presenting findings people can act on.",
    "My toolkit centers on SQL, Python (Pandas, NumPy), Excel and Power BI. I care about analytical rigor, tidy data pipelines and visualizations that are honest and easy to read.",
  ],
  stats: [
    { label: "Projects Completed", value: "[0]" },
    { label: "Technologies", value: "[0]" },
    { label: "Certifications", value: "[0]" },
    { label: "Years of Learning", value: "[0]" },
  ],
};

export const skills = [
  { category: "Data Analytics", icon: "BarChart3", items: ["Excel", "SQL", "Python", "Pandas", "NumPy", "Statistics", "Data Cleaning", "Exploratory Data Analysis"] },
  { category: "Data Visualization", icon: "PieChart", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Excel Charts"] },
  { category: "Databases", icon: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Programming", icon: "Code2", items: ["Python", "JavaScript", "Java"] },
  { category: "Tools", icon: "Wrench", items: ["Git", "GitHub", "Jupyter Notebook", "VS Code"] },
];

export const education = [
  {
    degree: "[DEGREE NAME]",
    institution: "[INSTITUTION]",
    duration: "[START] – [END]",
    coursework: ["[COURSE]", "[COURSE]", "[COURSE]"],
    achievements: "[ACADEMIC ACHIEVEMENTS]",
  },
  {
    degree: "[PREVIOUS QUALIFICATION]",
    institution: "[INSTITUTION]",
    duration: "[START] – [END]",
    coursework: ["[COURSE]", "[COURSE]"],
    achievements: "[ACADEMIC ACHIEVEMENTS]",
  },
];

export const achievements = [
  { title: "[CERTIFICATE TITLE]", organization: "[ORGANIZATION]", date: "[DATE]", description: "[SHORT DESCRIPTION]", link: "" },
  { title: "[CERTIFICATE TITLE]", organization: "[ORGANIZATION]", date: "[DATE]", description: "[SHORT DESCRIPTION]", link: "" },
  { title: "[ACHIEVEMENT TITLE]", organization: "[ORGANIZATION]", date: "[DATE]", description: "[SHORT DESCRIPTION]", link: "" },
];

export const projectFilters = ["All", "Python", "SQL", "Power BI", "Excel", "Data Visualization"];

export const projects = [
  { title: "[PROJECT TITLE] — e.g. Sales Dashboard", description: "[PROJECT DESCRIPTION]", problem: "[PROBLEM SOLVED]", tech: ["Power BI", "Excel", "Data Visualization"], github: "[GITHUB URL]", demo: "[LIVE DEMO URL]", image: "" },
  { title: "[PROJECT TITLE] — e.g. Customer Churn", description: "[PROJECT DESCRIPTION]", problem: "[PROBLEM SOLVED]", tech: ["Python", "SQL"], github: "[GITHUB URL]", demo: "[LIVE DEMO URL]", image: "" },
  { title: "[PROJECT TITLE] — e.g. E‑Commerce EDA", description: "[PROJECT DESCRIPTION]", problem: "[PROBLEM SOLVED]", tech: ["Python", "Data Visualization"], github: "[GITHUB URL]", demo: "[LIVE DEMO URL]", image: "" },
  { title: "[PROJECT TITLE] — e.g. HR Analytics", description: "[PROJECT DESCRIPTION]", problem: "[PROBLEM SOLVED]", tech: ["Excel", "Power BI"], github: "[GITHUB URL]", demo: "[LIVE DEMO URL]", image: "" },
  { title: "[PROJECT TITLE] — e.g. Financial KPIs", description: "[PROJECT DESCRIPTION]", problem: "[PROBLEM SOLVED]", tech: ["SQL", "Power BI"], github: "[GITHUB URL]", demo: "[LIVE DEMO URL]", image: "" },
  { title: "[PROJECT TITLE] — e.g. Public Health Data", description: "[PROJECT DESCRIPTION]", problem: "[PROBLEM SOLVED]", tech: ["Python", "SQL", "Data Visualization"], github: "[GITHUB URL]", demo: "[LIVE DEMO URL]", image: "" },
];

export const experience = [
  {
    position: "[POSITION]",
    company: "[COMPANY / INTERNSHIP / FREELANCE]",
    location: "[LOCATION]",
    duration: "[START] – [END]",
    responsibilities: ["[RESPONSIBILITY]", "[RESPONSIBILITY]"],
    contributions: ["[KEY CONTRIBUTION]"],
    tools: ["[TOOL]", "[TOOL]"],
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
