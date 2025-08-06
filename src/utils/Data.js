import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiStrapi, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs } from 'react-icons/tb';

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
        id: 0,
        tech: 'Javascript',
        icon: <TbBrandJavascript />
    },
    {
        id: 1,
        tech: 'PHP',
        icon: <FaPhp />
    },
    {
        id: 2,
        tech: 'ReactJs',
        icon: <FaReact />
    },
    {
        id: 3,
        tech: 'NextJs',
        icon: <TbBrandNextjs />
    },
    {
        id: 4,
        tech: 'Bootstrap',
        icon: <FaBootstrap />
    },
    {
        id: 5,
        tech: 'TailwindCss',
        icon: <SiTailwindcss />
    },
    {
        id: 6,
        tech: 'NodeJs',
        icon: <FaNodeJs />
    },
    {
        id: 7,
        tech: 'ExpressJs',
        icon: <SiExpress />
    },
    {
        id: 8,
        tech: 'Laravel',
        icon: <FaLaravel />
    },
    {
        id: 9,
        tech: 'Strapi',
        icon: <SiStrapi />
    },
    {
        id: 10,
        tech: 'MongoDB',
        icon: <SiMongodb />
    },
    {
        id: 11,
        tech: 'Mysql',
        icon: <TbBrandMysql />
    }
]

export const TopProjects = [
    {
        name: "General Trading Website",
        tools: ["ReactJS", "Tailwind CSS","Strapi"],
        description: "NIA: At <b><u><a href='https://aratech.ae' target='_blank'>Aratech</a></u></b>, developed a commercial platform to showcase global brands offering household and electrical appliances.",
        source_code: null,
        live_link: "https://nia.me",
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

export const MoreProjects = [
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
];
