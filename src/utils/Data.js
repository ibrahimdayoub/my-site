import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiDirectus, SiExpo, SiExpress, SiMongodb, SiStrapi, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandReactNative, TbBrandTypescript } from 'react-icons/tb';

import beroTasker from '../assets/bero-tasker.png';
import reimagined from '../assets/reimagined.png';
import nia from '../assets/nia.png';
import deebaaj from '../assets/deebaaj.png';
import oab from '../assets/oab.png';
import tmc from '../assets/tmc.png';
import eyeengineer from '../assets/eyeengineer.png';
import germac from '../assets/germac.png';
import osum from '../assets/osum.png';
import compastudent from '../assets/compastudent.png';
import chat from '../assets/chat.png';
import blog from '../assets/blog.png';
import weather from '../assets/weather.png';
import gym from '../assets/gym.png';
import resturant from '../assets/resturant.png';

export const Skills = [
    {
        tech: 'Javascript',
        icon: <TbBrandJavascript />
    },
    {
        tech: 'Typescript',
        icon: <TbBrandTypescript />
    },
    {
        tech: 'ReactJs',
        icon: <FaReact />
    },
    {
        tech: 'NextJs',
        icon: <TbBrandNextjs />
    },
    {
        tech: 'Bootstrap',
        icon: <FaBootstrap />
    },
    {
        tech: 'TailwindCss',
        icon: <SiTailwindcss />
    },
    {
        tech: 'NodeJs',
        icon: <FaNodeJs />
    },
    {
        tech: 'ExpressJs',
        icon: <SiExpress />
    },
    {
        tech: 'PHP',
        icon: <FaPhp />
    },
    {
        tech: 'Laravel',
        icon: <FaLaravel />
    },
    {
        tech: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        tech: 'Mysql',
        icon: <TbBrandMysql />
    },
    {
        tech: 'Strapi',
        icon: <SiStrapi />
    },
    {
        tech: 'Directus',
        icon: <SiDirectus />
    },
    {
        tech: 'ReactNative',
        icon: <TbBrandReactNative />
    }
    ,
    {
        tech: 'Expo',
        icon: <SiExpo />
    }
]

export const TopProjectsX = [
    {
        name: "Mobile App",
        tools: ["Typescript", "Reactjs", "React Naitve", "Expo", "Nativewind Css", "Clerk", "NodeJs", "ExpressJs", "MongoDB", "Mongoose"],
        description: "Bero Tasker: developed a A modern, high-performance mobile application for managing Tasks and Notes, featuring a seamless user interface and secure authentication.",
        source_code: "https://github.com/ibrahimdayoub/tasker-frontend",
        live_link: "https://expo.dev/accounts/ibrahimdayoub/projects/bero-tasker/builds/2d2ff135-72da-48cd-8a09-99e785887c1f",
        image: beroTasker,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Digital Arts Website",
        tools: ["NextJS", "Directus", "GraphQL"],
        description: "Reimagined: At <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>, developed a platform for digital art exhibitions and managed the application system for the annual Art Residency program.",
        source_code: null,
        live_link: null,
        image: reimagined,
        role: "Backend / CMS Developer",
        is_secret: false
    },
    {
        name: "General Trading Website",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Strapi"],
        description: "NIA: At <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>, developed a commercial platform to showcase global brands offering household and electrical appliances.",
        source_code: null,
        live_link: null,
        image: nia,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Marketing Consultation Website",
        tools: ["Laravel", "Strapi"],
        description: "Deebaaj: At <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>, built a dynamic website to provide marketing consultation services and support business growth.",
        source_code: null,
        live_link: "https://deebaajmc.com",
        image: deebaaj,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "ATM Interfaces",
        tools: ["HTML", "CSS", "JavaScript"],
        description: "OAB: At <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>, developed interactive and user-friendly ATM interfaces for Oman Arab Bank to enhance customer experience.",
        source_code: null,
        live_link: null,
        image: oab,
        role: "Front-end Developer",
        is_secret: true
    },
    {
        name: "Medical Equipment Store",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL"],
        description: "TMC: At <b><u><a href='https://wmktech.net' target='_blank'>WMK Tech</a></u></b>, developed an e-commerce platform for selling and managing medical equipment, ensuring smooth user experience and efficient order processing.",
        source_code: null,
        live_link: "https://tmc-iraq.com",
        image: tmc,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Educational Engineering Platform",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL"],
        description: "Eye-Engineer: At <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>, developed a platform to provide engineering resources, educational materials, and promote engineering offices.",
        source_code: null,
        live_link: "https://eyeengineer.com",
        image: eyeengineer,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Medical Consultation Platform",
        tools: ["Laravel", "Tailwind CSS", "MySQL"],
        description: "Germ-Ac: At <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>, created a platform to facilitate medical consultations, connect with doctors, and offer medical courses.",
        source_code: null,
        live_link: "https://germ-ac.com",
        image: germac,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Employment & Freelancing Platform",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "NodeJS", "ExpressJS", "Socket.IO", "Mongoose", "MongoDB"],
        description: "OSUM: Developed a platform to connect job seekers and freelancers, addressing the gap between experience and work opportunities.",
        source_code: "https://github.com/ibrahimdayoub/osum",
        live_link: null,
        image: osum,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Lecture Scheduling System",
        tools: ["ReactJS", "Bootstrap", "Laravel", "MySQL"],
        description: "CompaStudent: Designed a system to manage lecture schedules, book classrooms, and reschedule appointments efficiently.",
        source_code: "https://github.com/ibrahimdayoub/compastudent",
        live_link: null,
        image: compastudent,
        role: "Full-stack Developer",
        is_secret: false
    },
];

export const MoreProjectsX = [
    {
        name: "Laravel Multilingual Library",
        tools: ["PHP", "Laravel", "Composer"],
        description: "Initvel: At <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>, developed a Laravel library to manage multilingual applications with ease.",
        source_code: null,
        live_link: "https://packagist.org/packages/devs/initvel",
        image: null,
        role: "Developer",
        is_secret: false
    },
    {
        name: "Elevator Maintenance Application",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Sham-Lift: At <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>, designed an application to manage elevator maintenance services efficiently.",
        source_code: null,
        live_link: "https://play.google.com/store/apps/details?id=com.rareweb.shamlift",
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
    {
        name: "Real-Time Chat Application",
        tools: ["ReactJS", "Chakra UI", "NodeJS", "ExpressJS", "Socket.IO", "Mongoose", "MongoDB"],
        description: "Sky-Msg: Built a website for individual and group real-time chats with modern UI.",
        source_code: "https://github.com/ibrahimdayoub/sky-msg",
        live_link: null,
        image: chat,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Blog Post Platform",
        tools: ["ReactJS", "NodeJS", "ExpressJS", "Mongoose", "MongoDB"],
        description: "My-Blog: Developed a platform to create and share blog posts efficiently.",
        source_code: "https://github.com/ibrahimdayoub/my-blog",
        live_link: null,
        image: blog,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Weather Forecast Website",
        tools: ["ReactJS", "Rapid API", "OpenWeather API"],
        description: "Its-Weather: Designed a website to display real-time weather conditions and forecasts.",
        source_code: "https://github.com/ibrahimdayoub/its-weather",
        live_link: null,
        image: weather,
        role: "Front-end Developer",
        is_secret: false
    },
    {
        name: "Gym and Fitness Website",
        tools: ["ReactJS", "Material UI", "Rapid API"],
        description: "Freelance-1: Created a gym-focused website to promote health and fitness.",
        source_code: "https://github.com/ibrahimdayoub/freelance-1",
        live_link: null,
        image: gym,
        role: "Front-end Developer",
        is_secret: false
    },
    {
        name: "Food Ordering and Restaurant Website",
        tools: ["ReactJS", "NextJS", "Tailwind CSS", "Prisma", "MySQL", "Stripe"],
        description: "Freelance-2: Developed a platform for food ordering and showcasing restaurants with online payment integration.",
        source_code: "https://github.com/ibrahimdayoub/freelance-2",
        live_link: null,
        image: resturant,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Library Management System",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Freelance-3: Built a system for managing library books and borrowing processes.",
        source_code: "https://github.com/ibrahimdayoub/freelance-3",
        live_link: null,
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
    {
        name: "Clothing Store Platform",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Freelance-4: Developed a website for displaying and selling clothing items effectively.",
        source_code: "https://github.com/ibrahimdayoub/freelance-4",
        live_link: null,
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
    {
        name: "University Housing Management System",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Freelance-5: Created a platform to manage university housing and accommodation services.",
        source_code: "https://github.com/ibrahimdayoub/freelance-5",
        live_link: null,
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
]

export const TopProjects = [
    {
        name: "Productivity Suite",
        tools: ["Typescript", "React Native", "Expo", "Nativewind Css", "Clerk", "NodeJs", "ExpressJs", "MongoDB", "Mongoose"],
        description: "Developed Bero Tasker: A modern, high-performance mobile application for managing tasks and notes, featuring a seamless user interface and secure authentication.",
        source_code: "https://github.com/ibrahimdayoub/tasker-frontend",
        live_link: "https://expo.dev/accounts/ibrahimdayoub/projects/bero-tasker/builds/2d2ff135-72da-48cd-8a09-99e785887c1f",
        image: beroTasker,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Digital Arts Website",
        tools: ["NextJS", "Directus", "GraphQL"],
        description: "Built Reimagined at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A specialized platform for digital art exhibitions and a comprehensive management system for annual Art Residency programs.",
        source_code: null,
        live_link: null,
        image: reimagined,
        role: "Backend Developer",
        is_secret: false
    },
    {
        name: "General Trading Website",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Strapi"],
        description: "Developed NIA at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A robust commercial platform designed to showcase global brands and high-end household and electrical appliances.",
        source_code: null,
        live_link: "https://nia.me",
        image: nia,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Marketing Consultation Website",
        tools: ["Laravel", "Strapi"],
        description: "Built Deebaaj at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A dynamic web solution providing expert marketing consultation services and strategic tools for business growth.",
        source_code: null,
        live_link: "https://deebaajmc.com",
        image: deebaaj,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "ATM Interfaces",
        tools: ["HTML", "CSS", "JavaScript"],
        description: "Developed OAB at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: Interactive and highly intuitive ATM user interfaces for Oman Arab Bank to elevate the overall customer banking experience.",
        source_code: null,
        live_link: null,
        image: oab,
        role: "Front-end Developer",
        is_secret: false
    },
    {
        name: "Medical Equipment Store",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL"],
        description: "Developed TMC at <b><u><a href='https://wmktech.net' target='_blank'>WMK Tech</a></u></b>: An integrated e-commerce platform for medical equipment, ensuring smooth user navigation and efficient order processing workflows.",
        source_code: null,
        live_link: "https://tmc-iraq.com",
        image: tmc,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Educational Engineering Platform",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL"],
        description: "Developed Eye-Engineer at <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>: A comprehensive portal providing engineering resources, educational materials, and professional promotion for engineering firms.",
        source_code: null,
        live_link: "https://eyeengineer.com",
        image: eyeengineer,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Medical Consultation Platform",
        tools: ["Laravel", "Tailwind CSS", "MySQL"],
        description: "Created Germ-Ac at <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>: A healthcare platform designed to facilitate medical consultations, connect patients with doctors, and offer specialized medical courses.",
        source_code: null,
        live_link: "https://germ-ac.com",
        image: germac,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Employment & Freelancing Platform",
        tools: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "NodeJS", "ExpressJS", "Socket.IO", "Mongoose", "MongoDB"],
        description: "Developed OSUM: A professional networking platform built to connect job seekers with freelancers, bridging the gap between talent and market opportunities.",
        source_code: "https://github.com/ibrahimdayoub/osum",
        live_link: null,
        image: osum,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Lecture Scheduling System",
        tools: ["ReactJS", "Bootstrap", "Laravel", "MySQL"],
        description: "Designed CompaStudent: A management system for academic scheduling, classroom bookings, and efficient rescheduling of university appointments.",
        source_code: "https://github.com/ibrahimdayoub/compastudent",
        live_link: null,
        image: compastudent,
        role: "Full-stack Developer",
        is_secret: false
    },
];

export const MoreProjects = [
    {
        name: "Laravel Multilingual Library",
        tools: ["PHP", "Laravel", "Composer"],
        description: "Developed Initvel at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A specialized Laravel library designed to manage and streamline multilingual application support with ease.",
        source_code: null,
        live_link: "https://packagist.org/packages/devs/initvel",
        image: null,
        role: "Developer",
        is_secret: false
    },
    {
        name: "Elevator Maintenance Application",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Designed Sham-Lift at <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>: A management application built to streamline elevator maintenance services and track technical operations efficiently.",
        source_code: null,
        live_link: "https://play.google.com/store/apps/details?id=com.rareweb.shamlift",
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
    {
        name: "Real-Time Chat Application",
        tools: ["ReactJS", "Chakra UI", "NodeJS", "ExpressJS", "Socket.IO", "Mongoose", "MongoDB"],
        description: "Built Sky-Msg: A modern web application for individual and group real-time communication featuring a contemporary user interface.",
        source_code: "https://github.com/ibrahimdayoub/sky-msg",
        live_link: null,
        image: chat,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Blog Post Platform",
        tools: ["ReactJS", "NodeJS", "ExpressJS", "Mongoose", "MongoDB"],
        description: "Developed My-Blog: A feature-rich platform designed for creating, sharing, and managing blog posts with high efficiency.",
        source_code: "https://github.com/ibrahimdayoub/my-blog",
        live_link: null,
        image: blog,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Weather Forecast Website",
        tools: ["ReactJS", "Rapid API", "OpenWeather API"],
        description: "Designed Its-Weather: A responsive dashboard for displaying real-time global weather conditions and accurate atmospheric forecasts.",
        source_code: "https://github.com/ibrahimdayoub/its-weather",
        live_link: null,
        image: weather,
        role: "Front-end Developer",
        is_secret: false
    },
    {
        name: "Gym and Fitness Website",
        tools: ["ReactJS", "Material UI", "Rapid API"],
        description: "Created Freelance-1: A fitness-centric website designed to promote health awareness and showcase gym-related services.",
        source_code: "https://github.com/ibrahimdayoub/freelance-1",
        live_link: null,
        image: gym,
        role: "Front-end Developer",
        is_secret: false
    },
    {
        name: "Food Ordering and Restaurant Website",
        tools: ["ReactJS", "NextJS", "Tailwind CSS", "Prisma", "MySQL", "Stripe"],
        description: "Developed Freelance-2: A comprehensive platform for food ordering and restaurant promotion, featuring secure online payment integration.",
        source_code: "https://github.com/ibrahimdayoub/freelance-2",
        live_link: null,
        image: resturant,
        role: "Full-stack Developer",
        is_secret: false
    },
    {
        name: "Library Management System",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Built Freelance-3: A dedicated backend system for managing library databases, book catalogs, and automated borrowing processes.",
        source_code: "https://github.com/ibrahimdayoub/freelance-3",
        live_link: null,
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
    {
        name: "Clothing Store Platform",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Developed Freelance-4: A specialized e-commerce platform designed for effectively displaying and selling clothing inventory.",
        source_code: "https://github.com/ibrahimdayoub/freelance-4",
        live_link: null,
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
    {
        name: "University Housing Management System",
        tools: ["Laravel", "MySQL", "RESTful API"],
        description: "Created Freelance-5: A management solution designed to streamline university housing operations and student accommodation services.",
        source_code: "https://github.com/ibrahimdayoub/freelance-5",
        live_link: null,
        image: null,
        role: "Back-end Developer",
        is_secret: false
    },
];