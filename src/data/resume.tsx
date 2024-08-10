import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, RocketIcon } from "lucide-react";

export const DATA = {
  name: "Mansi",
  initials: "MK",
  url: "https://mansikalra.vercel.app/",
  location: "Haryana, India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Building innovative solutions with machine learning and artificial intelligence.",
  summary:
    "I'm an ML & AI developer dedicated to crafting innovative AI solutions. With skills in machine learning, neural networks, and data analysis, I build impactful tools and systems, always eager to tackle new challenges.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "TensorFlow",
    "Neural Networks",
    "Arduino",
    "Scikit-Learn",
    "OpenCV",
    "NLP",
    "Transformers",
    "SQL",
    "C++",
    "OOPs",
    "Computer Networks",
    "Linux",
    "Crytography",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blogs" },
    { href: "/projects", icon: RocketIcon, label: "Projects" },
  ],
  contact: {
    email: "mansi1004.kalra@gmail.com",
    // tel: "+",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mansi104-ai",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mansi-kalra-b46608252/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/Mansikalra7079",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mansi1004.kalra@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Quillbook",
      href: "https://play.google.com/store/apps/details?id=com.quillbook&hl=en",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer (Contract)",
      logoUrl: "/quillbook.webp",
      start: "Jan 2024",
      end: "May 2024",
      description:
        "Developed a robust backend system and machine learning model for efficient document scanning and accurate text extraction. The solution involved creating a scalable backend infrastructure to handle large volumes of documents and implementing advanced ML techniques to extract and process text with high precision.",
    },
  ],
  education: [
    {
      school: "PEC, Chandigarh",
      href: "https://pec.ac.in/",
      degree: "B.Tech CSE",
      logoUrl: "/pec.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Springfields Public School",
      href: "https://springfieldsynr.in/",
      degree: "AISSE, AISSCE",
      logoUrl: "/sps.jpeg",
      start: "2006",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Flipkart Grid-4 Robotics",
      dates: "December, 2022",
      location: "Indian Institute of Technology, Madras, India",
      description:
        "Engineered an autonomous drone as part of Flipkart Grid Robotics using Python, ROS, OpenCV, GeoPandas etc. to develop  path planning, object recognition. Gained hands-on experience in areas like, Drone hardware, Computer Vision, Simulation.",
      image: "/fgrid.png",
      win: "Rank #3",
      links: [
        {
          title: "Blog",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/Robotics-PEC/Autonomous-Drone-RPI-Aruco",
        },
        {
          title: "Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Robotics-PEC/Autonomous-Drone-RPI-Aruco",
        },
      ],
    },
  ],
} as const;
