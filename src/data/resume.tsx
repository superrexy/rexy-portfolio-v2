import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bintang Rezeka Ramadani",
  initials: "ReXY",
  url: "https://rexy.my.id",
  location: "Ponorogo, Jawa Timur",
  locationLink: "https://www.google.com/maps/place/Ponorogo",
  description:
    "Passionate Computer Engineering student at Politeknik Elektronika Negeri Surabaya with a focus on Back-end and Mobile Development. Currently enhancing skills through specialized bootcamps while contributing to cross-functional product development teams.",
  summary:
    "Tech enthusiast and Computer Engineering student at Politeknik Elektronika Negeri Surabaya with proven expertise in Back-end and Mobile Development. Actively seeking growth opportunities through industry bootcamps while leveraging hands-on experience in collaborative product development environments.",
  avatarUrl: "https://cdn.rexy.my.id/public/me.png",
  skills: [
    "Laravel",
    "NestJS",
    "Next.js",
    "TailwindCSS",
    "Docker",
    "Flutter",
    "Nuxt.js",
    "Django",
    "Python",
    "Computer Vision",
    "RAG",
    "N8N",
    "RBAC",
    "Inertia",
    "Vue.js",
    "Restful API",
    "React Native",
    "Node.js",
    "Go",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bintangrezeka@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:bintangrezeka@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/bintagrez__",
        icon: Icons.instagram,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT. Satya Solusindo Indonesia",
      href: "https://satsindo.com/",
      badges: ["Full-time"],
      location: "Tangerang Selatan, Banten",
      title: "Software Engineer",
      logoUrl: "https://cdn.rexy.my.id/public/satsindo.png",
      start: "January 2025",
      end: "Present",
      description:
        `
- Revamped company landing page using Laravel Inertia and React JS for frontend.\
- Learned to build models for bottle inspection (perfume and oil bottles) using Computer Vision
- Continued development of ERP, focusing on Expedition Management System features for PT. Sriwahana Adityakarya
- Developed a dynamic Landing Page for a Tour & Travel company utilizing NestJS and NextJS, optimizing images using an Image Processor for enhanced performance.
- Built a RAG-based Chatbot for the Tour & Travel industry, focusing on company profile explanation, product tours, and facilitating bookings via N8N automation.
- Contributed to the development of SATSET ERP, integrating HRIS, WMS, and implementing RBAC (Role-Based Access Control) for improved system security and user management.
        `,
      skills: ["Laravel", "React", "Next.js", "TailwindCSS", "Docker", "Django", "NestJS", "Python", "Computer Vision", "RAG", "N8N", "RBAC"],
    },
    {
      company: "Freelance",
      href: "https://superrexy.my.id",
      badges: ["Freelance"],
      location: "Work from Anywhere",
      title: "Fullstack Developer",
      logoUrl: "https://cdn.rexy.my.id/public/me1.png",
      start: "August 2024",
      end: "December 2024",
      description:
        `
- Added dynamic logo change feature on the landing page for Mega Jawa Transportindo
- Performed UI slicing and API integration to create Admin Dashboard for ICS Seafood landing page
- Built full-stack application for Live Streaming & Online Course Chat using NestJS, NextJS, and Livekit (WebRTC)
- Developed E-Commerce platform for Sakinah Mart, supporting both web and mobile apps using NestJS
- Assisted in mobile app development for Sakinah Mart Admin, including boilerplate setup, UI slicing, and API integration
- Continued development of ERP application (WMS & OMS) for PT. Sriwahana Adityakarya
- Developed a document generation and project bulletin board app with chat and comment features for Biseka Mobile (construction company)
        `,
      skills: ["Laravel", "NestJS", "Next.js", "TailwindCSS", "Docker", "Flutter", "Nuxt.js", "Django", "Golang"],
    },
    {
      company: "Suitmedia Digital Agency",
      href: "https://suitmedia.com",
      badges: ["Internship"],
      location: "Jakarta, Jakarta",
      title: "Mobile Developer",
      logoUrl: "https://cdn.rexy.my.id/public/suitmedia.png",
      start: "January 2024",
      end: "March 2024",
      description:
        `
- Utilized Suitcore Flutter 3.0 boilerplate with GetX for state management
- Implemented Analytics on each menu to monitor User Experience
- Debugged and fixed application bugs on both Android and iOS platforms
- Built mobile applications for Android and iOS
- Optimized and upgraded legacy projects to Flutter 3.0
- Performed UI slicing and integration using Rest API
- Integrated Jitsi Library for teleconference functionality in a healthcare app
        `,
      skills: ["Flutter", "GetX", "Jitsi", "Rest API", "UI Slicing", "Analytics", "Deployment Playstore & Appstore"],
    },
    {
      company: "PT Webcare Digital Indonesia",
      href: "https://webcare.co.id",
      badges: ["Internship"],
      location: "Sidoarjo, East Java",
      title: "Fullstack Developer",
      logoUrl: "https://cdn.rexy.my.id/public/webcare.png",
      start: "January 2023",
      end: "June 2023",
      description:
        `
- Developed services with Laravel framework for frontend consumption in an online course app for aspiring pilots
- Utilized Flutter 3.0 with GetX state management for mobile app development
- Performed UI slicing for tablet and mobile devices for a construction app, integrating data via Restful API
- Built a full-stack employee attendance app using framework NestJS and React Native
        `,
      skills: ["Laravel", "NestJS", "React Native", "Flutter", "Restful API",],
    }
  ],
  education: [
    {
      school: "Politeknik Elektronika Negeri Surabaya",
      href: "https://pens.ac.id",
      degree: "Bachelor Degree In Information Engineering",
      logoUrl: "https://cdn.rexy.my.id/public/pens.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "SMK Telkom Malang",
      href: "https://www.smktelkom-mlg.sch.id",
      degree: "Computer and Network Engineering",
      logoUrl: "https://cdn.rexy.my.id/public/smktelkom.png",
      start: "2017",
      end: "2020",
    }
  ],
  projects: [
    {
      title: "Sakinah Mart E-Commerce",
      href: "https://sakinahmart.com",
      active: true,
      description:
        "Sakinah Mart is a business unit under the management of the As-Sakinah Cooperative in Surabaya. Founded on September 27, 1991, and officially recognized on October 28, 1991, Sakinah retail stores were established to supply essential goods to the community, adhering to Sharia principles.",
      technologies: [
        "Flutter",
        "NestJS",
        "React",
        "Redis",
        "Payment Gateway",
        "PostgreSQL",
        "CI / CD",
        "Docker"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "https://cdn.rexy.my.id/public/sakinahmart.png",
      video: "",
      role: "Fullstack Developer"
    },
    {
      title: "EMDoctors by EMC Healthcare",
      href: "https://emc.co.id",
      active: true,
      description: "EMDoctor is a cutting-edge mobile solution designed for EMC Healthcare doctors, providing seamless management and execution of patient consultations anytime, anywhere. Key features include a 'Today’s Schedule' that lists doctor appointments, a 'Doctor's Calendar' to review and plan appointments, and 'Consultation Schedule Notifications' to ensure doctors are always on time for every session.",
      technologies: [
        "Flutter",
        "GetX",
        "Jitsi",
        "Rest API"
      ],
      links: [],
      image: "https://cdn.rexy.my.id/public/emc.png",
      video: "",
      role: "Mobile Developer"
    },
    {
      title: "PENS Online Classroom",
      href: "https://pens.ac.id",
      active: true,
      description: "PENS Online Classroom expands access to education with flexible, live-streamed courses and a scalable, efficient platform. This innovation enhances PENS' reputation and appeal, offering a modern, accessible learning experience.",
      technologies: [
        "NestJS",
        "NextJS",
        "NuxtJS",
        "TailwindCSS",
        "PostgreSQL",
        "Docker",
        "CI / CD",
      ],
      links: [],
      image: "https://cdn.rexy.my.id/public/pens-online-course.png",
      video: "",
      role: "Fullstack Developer"
    },
    {
      title: "Pawang (Pengatur Keuangan)",
      href: "https://pens.ac.id",
      active: true,
      description: "Pawang is a financial recording application that simplifies expense management through an innovative receipt scanning feature.",
      technologies: [
        "ExpressJS",
        "Flutter",
        "Python",
        "PostgreSQL",
        "Docker",
        "CI / CD",
      ],
      links: [],
      image: "https://cdn.rexy.my.id/public/pawang.png",
      video: "",
      role: "Fullstack Developer"
    },
    {
      title: "Biseka Mobile",
      href: "https://biseka.id",
      active: true,
      description: "Biseka Mobile, created by Biseka Synergy, is a revolutionary app for the construction industry. Launched in 2020, it blends 20 years of expertise with innovative technology to elevate Indonesia's global standing. The app streamlines construction processes, boosts efficiency, and simplifies project management. Discover the future of construction with Biseka Mobile.",
      technologies: [
        "Flutter",
        "Laravel"
      ],
      links: [],
      image: "https://cdn.rexy.my.id/public/biseka-v1.png",
      video: "",
      role: "Mobile Developer"
    },
    {
      title: "Biseka Mobile Mading Info",
      href: "https://biseka.id",
      active: true,
      description: "Biseka Mobile Mading Info is a cutting-edge app designed to streamline project tracking and management. This app simplifies task allocation, tracks progress in real time, and ensures seamless communication among teams. Experience the future of project management with Project Info Dashboard.",
      technologies: [
        "Flutter",
        "Laravel"
      ],
      links: [],
      image: "https://cdn.rexy.my.id/public/biseka-v2.png",
      video: "",
      role: "Mobile Developer"
    },
    {
      title: "Sriwahana ERP",
      href: "https://biseka.id",
      active: true,
      description: "Sriwahana ERP Warehouse Management System, developed by PT. Satya Solusindo Indonesia, optimizes warehouse operations through real-time inventory control and material flow monitoring. As part of the Manufacturing Execution System, it streamlines operations across various categories, including spare parts, raw materials, finished goods, and rejected products, with an intuitive interface for improved efficiency.",
      technologies: [
        "Django",
        "CI / CD"
      ],
      links: [],
      image: "",
      video:
        "https://cdn.rexy.my.id/public/sriwahana-erp.webm",
      role: "Backend Developer"
    },
    {
      title: "Satsindo Solution Enterprise ERP",
      href: "https://satsindo.com",
      active: true,
      description: "SATSET Satsindo Solution Enterprise (ERP), developed by PT. Satya Solusindo Indonesia, is a comprehensive enterprise resource planning system designed to streamline business operations. The platform provides features for employee management, announcements, holiday schedules, and employee surveys.",
      technologies: [
        "NestJS",
        "NuxtJS",
        "RAG",
        "N8N",
      ],
      links: [],
      image: "",
      video:
        "https://cdn.rexy.my.id/public/satset-erp.webm",
      role: "Fullstack Developer"
    },
    {
      title: "Satsindo Company Profile",
      href: "https://satsindo.com",
      active: true,
      description: "Satsindo Company Profile, introduces the company’s industrial automation engineering solutions.It features their services in Robotic Solutions, Special Purpose Machines, and PLC - HMI - DCS - SCADA systems. The landing page also highlights Smart Vision Solutions, MES & ERP Software Development, and Maintenance Service Contracts, showcasing the company’s diverse capabilities to optimize industrial processes.",
      technologies: [
        "Laravel",
        "Inertia",
        "React",
        "TailwindCSS"
      ],
      links: [],
      image: "",
      video:
        "https://cdn.rexy.my.id/public/satsindo-company-profile.webm",
      role: "Fullstack Developer"
    },
    {
      title: "Travent Company Profile",
      href: "https://travent.id",
      active: true,
      description: "Travent Company Profile, developed by PT. Satya Solusindo Indonesia, offers comprehensive travel and event services, including tour packages, flight tickets, car rentals, and hotel bookings. The site features a gallery of destinations and a custom RAG chatbot for quick, personalized customer support.",
      technologies: [
        "NestJS",
        "NuxtJS",
        "RAG",
        "N8N",
      ],
      links: [],
      image: "",
      video:
        "https://cdn.rexy.my.id/public/travent-company-profile.webm",
      role: "Fullstack Developer"
    },
  ],
} as const;
