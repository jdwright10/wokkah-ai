
export interface Freelancer {
  name: string;
  role: string;
  verified: boolean;
  vetted: boolean;
  rating: number;
  description: string;
  skills: string[];
  hourlyRate: number;
  country: string;
  completedJobs: number;
}

const freelancersData: Freelancer[] = [
  {
    name: "Alex Morgan",
    role: "Full Stack Developer",
    verified: true,
    vetted: true,
    rating: 4.9,
    description: "Specialized in React, Node.js, and AWS with 6+ years of experience building scalable web applications.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    hourlyRate: 85,
    country: "United States",
    completedJobs: 48
  },
  {
    name: "Sarah Chen",
    role: "UX/UI Designer",
    verified: true,
    vetted: true,
    rating: 5.0,
    description: "Award-winning designer with expertise in user-centered design processes and design systems.",
    skills: ["Figma", "UI Design", "UX Research", "Design Systems"],
    hourlyRate: 75,
    country: "Canada",
    completedJobs: 37
  },
  {
    name: "Marcus Wilson",
    role: "DevOps Engineer",
    verified: false,
    vetted: false,
    rating: 4.7,
    description: "Infrastructure specialist focused on containerization, CI/CD pipelines, and cloud architecture.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    hourlyRate: 90,
    country: "United Kingdom",
    completedJobs: 26
  },
  {
    name: "Elena Rodriguez",
    role: "Project Manager",
    verified: true,
    vetted: true,
    rating: 4.8,
    description: "Certified PMP with experience leading complex technical projects for Fortune 500 companies.",
    skills: ["Agile", "Scrum", "Risk Management", "Stakeholder Communication"],
    hourlyRate: 95,
    country: "Spain",
    completedJobs: 52
  },
  {
    name: "David Kim",
    role: "Mobile Developer",
    verified: true,
    vetted: false,
    rating: 4.6,
    description: "iOS and Android expert specializing in cross-platform development with React Native and Flutter.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    hourlyRate: 80,
    country: "South Korea",
    completedJobs: 31
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    verified: false,
    vetted: false,
    rating: 4.9,
    description: "AI/ML specialist with experience in predictive analytics, NLP, and computer vision applications.",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis"],
    hourlyRate: 100,
    country: "India",
    completedJobs: 23
  }
];

export default freelancersData;
