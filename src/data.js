export const profile = {
  name: "Neamat Ullah",
  photo: "/photo_2026-11-18_15-01-21.jpg",
  role: "Full-Stack Developer (MERN, Next.js)",
  headline: "I build web apps that are simple to use.",
  summary:
    "CSE undergraduate skilled in React.js, Next.js, Node.js, Express.js and MongoDB. I build fast, responsive web apps, enjoy solving problems and write clean code. Looking for an internship or junior developer role where I can learn and add value.",
  email: "neamat1633ullah@gmail.com",
  phone: "+880 1741-520033",
  location: "Dhanmondi, Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/neamat-ullah-22a25b365",
  github: "https://github.com/neamat221",
  cv: "/Neamat_Ullah_Resume.pdf",
};

export const projects = [
  {
    id: "bd-meal",
    title: "BD Meal System",
    stack: ["Next.js", "MongoDB"],
    points: [
      "Built a full-stack mess management app for daily meals, on/off booking, and monthly billing.",
      "Added member and admin roles: members book meals before the cutoff time, admins manage members.",
      "Automated bill calculation so meal counts, payments, and dues stay up to date.",
    ],
    live: "https://bd-meal-system.vercel.app",
    github: "https://github.com/neamat221/db_meal",
  },
  {
    id: "hero-kids",
    title: "Hero Kids (E-Commerce)",
    stack: ["Next.js", "MongoDB", "Firebase"],
    points: [
      "Built a responsive online toy store with Home, Products, Blog, and Contact pages.",
      "Added login-protected product browsing, wishlist, cart, and a user dashboard.",
    ],
    live: "https://hero-kids-sigma.vercel.app",
    github: "https://github.com/neamat221/hero-kids-nextjs-full-project",
  },
  {
    id: "delivery",
    title: "Delivery System",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Built a web application to manage delivery orders in a simple, user-friendly interface.",
      "Designed responsive pages for a smooth experience on any device.",
    ],
    live: "https://zapweb-bff5f.web.app",
    github: "https://github.com/neamat221/zap",
  },
  {
    id: "fastfood",
    title: "FastFood",
    stack: ["Next.js", "MongoDB"],
    points: [
      "Developed a responsive food ordering platform featuring burgers, pizza, biryani, and other dishes.",
      "Implemented food browsing, product ratings, customer feedback, and online ordering features.",
      "Designed a user-friendly interface for a smooth food ordering experience.",
    ],
    live: "https://my-app-alpha-nine-65.vercel.app/",
    github: "https://github.com/neamat221/my-app-foodzon-nextjs",
  },
];

export const skills = [
  { group: "Programming", items: ["C", "Java", "JavaScript", "Python", "SQL"] },
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js", "React Router"],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["MongoDB", "Firebase"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"] },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    school: "Daffodil International University",
    period: "Jan 2023 - Dec 2026 (Expected)",
  },
  {
    degree: "Higher Secondary (HSC)",
    school: "Ideal College, Dhanmondi",
    period: "2018 - 2020",
    note: "GPA 5.00",
  },
  {
    degree: "Secondary (SSC)",
    school: "Jhalokati NS Kamil Madrasah",
    period: "2016 - 2018",
    note: "GPA 5.00",
  },
];

export const contests = [
  {
    name: "Take Off",
    year: "2023",
    text: "University level programming and problem solving competition.",
  },
  {
    name: "Unlock the Algorithm",
    year: "2024",
    text: "University level algorithmic problem solving competition.",
  },
  {
    name: "Hackathon (BUBT)",
    year: "2025",
    text: "Actively participated in a hackathon, collaborating with team members to develop innovative solutions.",
  },
];

export const certifications = [
  { name: "AWS", text: "Completed Cybersecurity Training." },
  {
    name: "GOEDU",
    text: "Completed professional training programs.",
    links: [
      "https://goedu.ac/certificate/01bd7b3cf95a4d2682e845c7f0c3ecea",
      "https://goedu.ac/certificate/76ec92e8efed429db3d98ccc794e2743",
    ],
  },
  {
    name: "Cybersecurity",
    text: "Participated in a Campus-Level Cybersecurity Contest.",
  },
];
