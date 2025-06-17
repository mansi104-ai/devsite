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
      company: "Platy Studio",
      href: "https://platy.studio/",
      badges: [],
      location: "Remote",
      title: "Product & Sales (Freelance)",
      logoUrl: "/platy-studio.jpg",
      start: "June 2025",
      end: "Ongoing",
      description:
        "Managing the dubbing and karaoke product and sales of the startup in order to enhance the product quality , sales and optimization.",
    },
    {
      company: "Arsana Labs ",
      href: "https://arsanalabs.com/",
      badges: [],
      location: "Building",
      title: "Building",
      logoUrl: "/arsana.jpg",
      start: "Nov 2024",
      end: "Ongoing",
      description:
        "Complete development and management of arsana labs , a tool meant to serve both consulting and open-source spaces.",
    },
    
    {
      company: "Agnext Technologies",
      href: "https://agnext.com/",
      badges: [],
      location: "On-site",
      title: "Machine Learning & Software Intern",
      logoUrl: "/agnext.jpg",
      start: "Jan 2025",
      end: "June 2025",
      description:
        "Learnt the complete stack of MLOps pipeline , along with essential AI skills like computer vision , image processing , ML , everything in an optimized manner at production level.",
    },
    {
      company: "Codess.Cafe",
      href: "https://codess.cafe/",
      badges: [],
      location: "Remote",
      title: "Mentee",
      logoUrl: "/codess.jpg",
      start: "Jan 2025",
      end: "Apr 2025",
      // description:
      //   "Learnt the complete stack of MLOps pipeline , along with essential AI skills like computer vision , image processing , ML , everything in an optimized manner at production level.",
    },
    {
      company: "Quillbook",
      href: "https://play.google.com/store/apps/details?id=com.quillbook&hl=en",
      badges: [],
      location: "Remote",
      title: "Machine Learning Engineer (Freelance)",
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
      title: "Page Feature Extractor",
      href: "",
      dates: "Jan 24- May 24",
      active: true,
      description:
        "This project aims to automate the extraction of various areas from images, using ROI detection and OCR technology to enable accurate, efficient digitization and categorization of document content. Particularly useful for digitizing and categorizing documents, enabling efficient data processing and retrieval ",
      technologies: [
        "Pyhton",
        "Flask Server",
        "Tesseract OCR",
        "OpenCV",
      ],
      links: [
        {
          type: "Website",
          href: "https://play.google.com/store/apps/details?id=com.quillbook&hl=en",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "ocr_video.mp4",
    },
    {
      title: "Business Data Management",
      href: "https://llm.report",
      dates: "Nov 23 - Jan 24",
      active: true,
      description:
        "Gathered quarterly datasets for 12 commodities across four quarters using Pareto Principle .Conducted in-depth analysis for each quarter, resulting in segregated sales and revenue visualizations",
      technologies: [
        "Excel",
        "Data Mining",
        "Data Collection",
        "Data Analysis",
        "Pareto Graph Analysis"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://docs.google.com/spreadsheets/d/1gIEAWwd6XA0b5JL2vMVn9Si0FMFDkr75xIUCE2a-kRw/edit?gid=1569362763#gid=1569362763",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "ml_video.mp4",
    },
  ],
  hackathons: [
    {
      title: "Google Maps Hack2Skill",
      dates: "October, 2023",
      location: "India",
      description:
        "The Amburoute project is a route optimization web application built using Flask for the backend, HTML/CSS for the frontend, and integrated with Google Maps API for real-time data. It allows users to efficiently plan journeys by calculating optimal routes based on various parameters for Ambulance drivers,reducing upto 20 min/trip.",
      image: "/ggle.png",
      win: "Rank #3",
      links: [
        {
          title: "Blog",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://docs.google.com/presentation/d/1ZTrXjLjmY17FRtEVmNSRmhjeo-oie3P3qBXKFXLdedU/edit#slide=id.g23eaab1d1ce_0_1",
        },
        {
          title: "Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mansi104-ai/Amburoute",
        },
      ],
    },
    {
      title: "Smart India Hackathon",
      dates: "October, 2023",
      location: "India",
      description:
        "Engineered real-time video feed analysis and vehicle detection using OpenCV. Implemented TensorFlow-based machine learning for parking space counting, reducing parking search time by 40%. Achieved accurate prediction of 85% parking availability, displayed through a bird's-eye-view camera.",
      image: "/sih.png",
      win: "Rank #3",
      links: [
        {
          title: "Blog",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/ZeroDevInc",
        },
        {
          title: "Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ZeroDevInc",
        },
      ],
    },
    {
      title: "Flipkart Grid-5.0 Health",
      dates: "September, 2023",
      location: "India",
      description:
        "The project uses the power of LLMs to provide personalized fashion recommendations. It features a user-friendly web interface, built using ",
      image: "/fgrid.png",
      win: "Rank #3",
      links: [
        // {
        //   title: "Blog",
        //   icon: <Icons.globe className="h-4 w-4" />,
        //   href: "https://github.com/mansi104-ai/Vogue_genie/tree/main",
        // },
        {
          title: "Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mansi104-ai/Vogue_genie/tree/main",
        },
      ],
    },
    {
      title: "Ideathon",
      dates: "August, 2023",
      location: "Punjab Engineering College,Chandigarh, India",
      description:
        "Developed a Flutter application that provides an interactive platform for college students to showcase their technical and non-technical achievements. The application features a dynamic frontend and is supported by a Firebase-hosted backend server, ensuring seamless integration and user experience",
      image: "/ideath.png",
      win: "Rank #3",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://titans-karma.vercel.app/",
        },
        {
          title: "Code",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mansi104-ai/titans_karma",
        },
      ],
    },
    
    {
      title: "Flipkart Grid-4.0 Robotics",
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
