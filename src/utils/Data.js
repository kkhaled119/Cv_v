import { FaReact, FaCss3Alt, FaNode, FaMobile } from "react-icons/fa";

import { SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si";
import Project1 from "../assets/restaurant.png";
import Project2 from "../assets/book_store.png";
import Project3 from "../assets/Dubai.png";
import Project4 from "../assets/carhub.png";

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },

  {
    id: 1,
    tech: "Node",
    icon: <FaNode />,
  },

  {
    id: 2,
    tech: "Css",
    icon: <FaCss3Alt />,
  },

  {
    id: 3,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    tech: "Nextjs",
    icon: <SiNextdotjs />,
  },
  {
    id: 6,
    tech: "React-Native",
    icon: <FaMobile />,
  },
];

export const projectDetails = [
  {
    id: 0,
    project_name: "Resturant App",
    project_desc:
      "In this project, an interactive restaurant website was developed using React.js, a JavaScript library for building user interfaces. The website was styled using CSS to ensure it is responsive across devices, and React Icons were used to enhance the design and user experience with modern icons.",
    tech_stack: ["React Js", " React Icons", "Native Css"],
    project_img: Project1,
    project_url: "https://mahran-restauran.vercel.app/",
    link_website: "https://mahran-restauran.vercel.app/",
    gitHubLinks: "https://github.com/kkhaled119/MahranRestauran",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Book Store",
    project_desc:
      "The Book Store App is a web-based platform designed for book lovers to explore, search, and purchase books online. It was built using modern web development technologies and offers a user-friendly interface with a clean design.",
    tech_stack: ["React Js", " React Icons", "Native Css", "Context"],
    project_img: Project2,
    project_url: "https://book-store-app-k.netlify.app/",
    link_website: "https://book-store-app-k.netlify.app",
    gitHubLinks: "https://github.com/kkhaled119/Book-store",
    reverse: true,
  },

  {
    id: 2,
    project_name: "Dubai Safari",
    project_desc:
      "The Dubai Safari Website is a dynamic and visually captivating platform that provides users with information and services related to safari tours in Dubai. The website is built using React.js for an interactive and responsive experience, with stylish components designed using CSS and React Icons.",
    tech_stack: ["React Js", " React Icons", "Native Css", "Context"],
    project_img: Project3,
    project_url: "https://dubai-safari.netlify.app/",
    link_website: "https://dubai-safari.netlify.app/",
    gitHubLinks: "https://github.com/kkhaled119/Dubai_Safari",
    reverse: false,
  },
  {
    id: 3,
    project_name: "Car Hub",
    project_desc:
      "The Car Hub Website is a modern platform built using Next.js and TypeScript to provide a robust, efficient, and scalable experience for users interested in browsing various car models. The data displayed on the website is dynamically fetched from an external API, ensuring up-to-date information on the available vehicles.",
    tech_stack: ["Next Js", "Type Script", "Tailwind", "Routes"],
    project_img: Project4,
    project_url: "https://car-hub-one-sepia.vercel.app",
    link_website: "https://car-hub-one-sepia.vercel.app",
    gitHubLinks: "https://github.com/kkhaled119/Car_Hub",
    reverse: true,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },

  {
    id: 1,
    name: "My Skills",
    href: "Skills",
  },

  {
    id: 3,
    name: "My Projects",
    href: "Projects",
  },

  {
    id: 4,
    name: "Contact ",
    href: "Contact",
  },
];
