import { FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiDirectus, SiExpo, SiExpress, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPrisma, SiReact, SiSqlite, SiStrapi, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { DiMysql } from "react-icons/di";

import beroTalker from '../assets/projects/bero-talker.webp';
import beroTasker from '../assets/projects/bero-tasker.webp';
import reimagined from '../assets/projects/reimagined.webp';
import nia from '../assets/projects/nia.webp';
import deebaaj from '../assets/projects/deebaaj.webp';
import oab from '../assets/projects/oab.webp';
import tmc from '../assets/projects/tmc.webp';
import eyeengineer from '../assets/projects/eyeengineer.webp';
import germac from '../assets/projects/germac.webp';
import osum from '../assets/projects/osum.webp';
import compastudent from '../assets/projects/compastudent.webp';
import initvel from '../assets/projects/initvel.webp';
import shamLifts from '../assets/projects/sham-lifts.webp';
import chat from '../assets/projects/chat.webp';
import blog from '../assets/projects/blog.webp';
import weather from '../assets/projects/weather.webp';
import gym from '../assets/projects/gym.webp';
import resturant from '../assets/projects/resturant.webp';

import odoo from '../assets/achievements/odoo.webp';

export const FrontSkills = [
    { tech: 'HTML', icon: <SiHtml5 /> },
    { tech: 'CSS3', icon: <SiCss3 /> },
    { tech: 'Javascript', icon: <SiJavascript /> },
    { tech: 'Typescript', icon: <SiTypescript /> },
    { tech: 'ReactJs', icon: <SiReact /> },
    { tech: 'NextJs', icon: <SiNextdotjs /> },
    { tech: 'TailwindCss', icon: <SiTailwindcss /> },
    { tech: 'Bootstrap', icon: <SiBootstrap /> },
    { tech: 'ReactNative', icon: <TbBrandReactNative /> },
    { tech: 'Expo', icon: <SiExpo /> },
];

export const BackSkills = [
    { tech: 'NodeJs', icon: <SiNodedotjs /> },
    { tech: 'ExpressJs', icon: <SiExpress /> },
    { tech: 'NestJs', icon: <SiNestjs /> },
    { tech: 'Prisma', icon: <SiPrisma /> },
    { tech: 'PHP', icon: <SiPhp /> },
    { tech: 'Laravel', icon: <SiLaravel /> },
    { tech: 'Strapi', icon: <SiStrapi /> },
    { tech: 'Directus', icon: <SiDirectus /> }
];

export const DatabaseSkills = [
    { tech: 'MySQL', icon: <DiMysql /> },
    { tech: 'SQLite', icon: <SiSqlite /> },
    { tech: 'PostgreSQL', icon: <SiPostgresql /> },
    { tech: 'MongoDB', icon: <SiMongodb /> },
];

export const ToolSkills = [
    { tech: 'Git', icon: <FaGitAlt /> },
    { tech: 'GitHub', icon: <SiGithub /> },
    { tech: 'Postman', icon: <SiPostman /> },
    { tech: 'Figma', icon: <FaFigma /> },
    // { tech: 'Odoo', icon: <FaOdoo /> },
    // { tech: 'Docker', icon: <FaDocker /> },
    // { tech: 'Vercel', icon: <SiVercel /> }
];

export const TopProjects = [
    {
        name: "Real-Time Chat Application",
        tools: ["Typescript", "NextJs", "React Query", "Zustand", "Nativewind Css", "Socket.IO", "NestJs", "PostgreSQL", "Prisma"],
        description: "Developed Bero Talker: A sleek real-time chat app with instant messaging, modern UI, and secure authentication.",
        source_code: "https://github.com/ibrahimdayoub/talker-frontend",
        live_link: null,
        demo_link: "https://youtu.be/dWa0VzdyeFo",
        image: beroTalker,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Productivity Suite",
        tools: ["Typescript", "React Native", "Expo", "Nativewind Css", "Clerk", "NodeJs", "ExpressJs", "MongoDB", "Mongoose"],
        description: "Developed Bero Tasker: A modern, high-performance mobile application for managing tasks and notes, featuring a seamless user interface and secure authentication.",
        source_code: "https://github.com/ibrahimdayoub/tasker-frontend",
        live_link: "https://drive.google.com/file/d/16V3vBjXSdRQ_WNSWVS6MouE8Lj_NfSq4/view?usp=sharing",
        demo_link: "https://youtu.be/BExEKLQOeNY",
        image: beroTasker,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Digital Arts Website",
        tools: ["NextJS", "Directus", "GraphQL"],
        description: "Built Reimagined at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A specialized platform for digital art exhibitions and a comprehensive management system for annual Art Residency programs.",
        source_code: null,
        live_link: "https://reimagined.art",
        related_link: "https://github.com/ibrahimdayoub/nextjs-directus-page-builder",
        image: reimagined,
        role: "Backend Developer",
        is_secret: false
    },
    {
        name: "General Trading Website",
        tools: ["Javascript", "ReactJS", "Redux Toolkit", "Tailwind CSS", "Strapi"],
        description: "Developed NIA at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A robust commercial platform designed to showcase global brands and high-end household and electrical appliances.",
        source_code: null,
        live_link: "https://nia.me",
        image: nia,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Marketing Consultation Website",
        tools: ["Laravel", "Strapi"],
        description: "Built Deebaaj at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A dynamic web solution providing expert marketing consultation services and strategic tools for business growth.",
        source_code: null,
        live_link: "https://deebaajmc.com",
        image: deebaaj,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "ATM Interfaces",
        tools: ["HTML", "CSS", "Javascript"],
        description: "Developed OAB at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: Interactive and highly intuitive ATM user interfaces for Oman Arab Bank to elevate the overall customer banking experience.",
        source_code: null,
        live_link: null,
        image: oab,
        role: "Front End Developer",
        is_secret: false
    },
    {
        name: "Medical Equipment Store",
        tools: ["JavaScript", "ReactJS", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL"],
        description: "Developed TMC at <b><u><a href='https://wmktech.net' target='_blank'>WMK Tech</a></u></b>: An integrated e-commerce platform for medical equipment, ensuring smooth user navigation and efficient order processing workflows.",
        source_code: null,
        live_link: "https://tmc-iraq.com",
        image: tmc,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Educational Engineering Platform",
        tools: ["JavaScript", "ReactJS", "Redux Toolkit", "Tailwind CSS", "Laravel", "MySQL"],
        description: "Developed Eye-Engineer at <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>: A comprehensive portal providing engineering resources, educational materials, and professional promotion for engineering firms.",
        source_code: null,
        live_link: "https://eyeengineer.com",
        image: eyeengineer,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Medical Consultation Platform",
        tools: ["Laravel", "Tailwind CSS", "MySQL"],
        description: "Created Germ-Ac at <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>: A healthcare platform designed to facilitate medical consultations, connect patients with doctors, and offer specialized medical courses.",
        source_code: null,
        live_link: "https://germ-ac.com",
        image: germac,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Employment & Freelancing Platform",
        tools: ["JavaScript", "ReactJS", "Redux Toolkit", "Tailwind CSS", "NodeJS", "ExpressJS", "Socket.IO", "Mongoose", "MongoDB"],
        description: "Developed OSUM: A professional networking platform built to connect job seekers with freelancers, bridging the gap between talent and market opportunities.",
        source_code: "https://github.com/ibrahimdayoub/osum",
        live_link: null,
        image: osum,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Lecture Scheduling System",
        tools: ["JavaScript", "ReactJS", "Bootstrap", "Laravel", "MySQL"],
        description: "Designed CompaStudent: A management system for academic scheduling, classroom bookings, and efficient rescheduling of university appointments.",
        source_code: "https://github.com/ibrahimdayoub/compastudent",
        live_link: null,
        image: compastudent,
        role: "Full Stack Developer",
        is_secret: false
    },
];

export const MoreProjects = [
    {
        name: "Laravel Multilingual Library",
        tools: ["PHP", "Laravel", "Composer"],
        description: "Developed Initvel at <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>: A specialized Laravel library designed to manage and streamline multilingual application support with ease.",
        source_code: "https://github.com/ibrahimdayoub/devs-initvel",
        live_link: "https://packagist.org/packages/devs/initvel",
        image: initvel,
        role: "Developer",
        is_secret: false
    },
    {
        name: "Elevator Maintenance Application",
        tools: ["Laravel", "MySQL", "Restful API"],
        description: "Designed Sham-Lift at <b><u><a href='http://rare-web.com' target='_blank'>Rare Web</a></u></b>: A management application built to streamline elevator maintenance services and track technical operations efficiently.",
        source_code: null,
        live_link: "https://play.google.com/store/apps/details?id=com.rareweb.shamlift",
        image: shamLifts,
        role: "Back End Developer",
        is_secret: false
    },
    {
        name: "Real-Time Chat Application",
        tools: ["JavaScript", "ReactJS", "Chakra UI", "NodeJS", "ExpressJS", "Socket.IO", "Mongoose", "MongoDB"],
        description: "Built Sky-Msg: A modern web application for individual and group real-time communication featuring a contemporary user interface.",
        source_code: "https://github.com/ibrahimdayoub/sky-msg",
        live_link: null,
        image: chat,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Blog Post Platform",
        tools: ["JavaScript", "ReactJS", "NodeJS", "ExpressJS", "Mongoose", "MongoDB"],
        description: "Developed My-Blog: A feature-rich platform designed for creating, sharing, and managing blog posts with high efficiency.",
        source_code: "https://github.com/ibrahimdayoub/my-blog",
        live_link: null,
        image: blog,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Weather Forecast Website",
        tools: ["JavaScript", "ReactJS", "Rapid API", "OpenWeather API"],
        description: "Designed Its-Weather: A responsive dashboard for displaying real-time global weather conditions and accurate atmospheric forecasts.",
        source_code: "https://github.com/ibrahimdayoub/its-weather",
        live_link: null,
        image: weather,
        role: "Front End Developer",
        is_secret: false
    },
    {
        name: "Gym and Fitness Website",
        tools: ["JavaScript", "ReactJS", "Material UI", "Rapid API"],
        description: "Created Freelance-1: A fitness-centric website designed to promote health awareness and showcase gym-related services.",
        source_code: "https://github.com/ibrahimdayoub/freelance-1",
        live_link: null,
        image: gym,
        role: "Front End Developer",
        is_secret: false
    },
    {
        name: "Food Ordering and Restaurant Website",
        tools: ["JavaScript", "ReactJS", "NextJS", "Tailwind CSS", "Prisma", "MySQL", "Stripe"],
        description: "Developed Freelance-2: A comprehensive platform for food ordering and restaurant promotion, featuring secure online payment integration.",
        source_code: "https://github.com/ibrahimdayoub/freelance-2",
        live_link: null,
        image: resturant,
        role: "Full Stack Developer",
        is_secret: false
    },
    {
        name: "Library Management System",
        tools: ["Laravel", "MySQL", "Restful API"],
        description: "Built Freelance-3: A dedicated backend system for managing library databases, book catalogs, and automated borrowing processes.",
        source_code: "https://github.com/ibrahimdayoub/freelance-3",
        live_link: null,
        image: null,
        role: "Back End Developer",
        is_secret: false
    },
    {
        name: "Clothing Store Platform",
        tools: ["Laravel", "MySQL", "Restful API"],
        description: "Developed Freelance-4: A specialized e-commerce platform designed for effectively displaying and selling clothing inventory.",
        source_code: "https://github.com/ibrahimdayoub/freelance-4",
        live_link: null,
        image: null,
        role: "Back End Developer",
        is_secret: false
    },
    {
        name: "University Housing Management System",
        tools: ["Laravel", "MySQL", "Restful API"],
        description: "Created Freelance-5: A management solution designed to streamline university housing operations and student accommodation services.",
        source_code: "https://github.com/ibrahimdayoub/freelance-5",
        live_link: null,
        image: null,
        role: "Back End Developer",
        is_secret: false
    },
];

export const Achievements = [
    {
        id: 1,
        title: "Odoo Certification",
        description: "Recently earned my Odoo certification — a solid step into the world of business application development. This journey introduced me to building custom modules, working with PostgreSQL, and understanding how real business systems come together. Still at the beginning of the road, but excited to keep learning and growing.",
        image: odoo,
        file: "./Ibrahim-Dayoub-Odoo-19-Certificate.pdf",
        date: "March 2026",
        issuer: "Odoo S.A",
        credentialId: "0001071460",
        skills: ["Odoo Development", "Javascript", "Python", "PostgreSQL"],
        bg: "#724f6b40"
    }
];