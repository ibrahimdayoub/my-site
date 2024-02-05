import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs } from 'react-icons/tb';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';
import p9 from '../assets/p9.png';

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
        tech: 'Prisma',
        icon: <SiPrisma />
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
        id: 0,
        name: "Website for engineering",
        tools: [
            "ReactJs",
            "Redux Toolkit",
            "TailwindCss",
            "Laravel",
            "MySql",
        ],
        description: "Eyeengineer (Engineer's Eye): To assist in understanding engineering, provide educational resources, and advertise engineering offices.",
        source_code: null,
        live_link:"https://eyeengineer.com",
        image: p1,
        role:"Full-stack Developer"
    },
    {
        id: 1,
        name: "Website for Medical Consultations",
        tools: [
            "Laravel",
            "TailwindCss",
            "MySql",
        ],
        description: "Germac (German Academy): To assist in providing medical consultations, communicating with doctors, and attending medical courses.",
        source_code: null,
        live_link: "https://germ-ac.com",
        image: p2,
        role: "Front-end Developer"
    },
    {
        id: 2,
        name: "Website for employment and freelance",
        tools: [
            "ReactJs",
            "Redux Toolkit",
            "TailwindCss",
            "NodeJs",
            "ExpressJs",
            "SocketIO",
            "Mongoose",
            "MongoDB"
        ],
        description: "OSUM (One Step Unlimited Miles): To assist with employment and remote freelance work, and to address the issue that work requires experience and experience requires work, it is suitable for both recent graduates and experienced.",
        source_code: "https://github.com/ibrahimdayoub/osum",
        live_link: null,
        image: p3,
        role: "Full-stack Developer"
    },
    {
        id: 3,
        name: "Website for scheduling lectures and reserving classrooms",
        tools: [
            "ReactJs",
            "Bootstrap",
            "Laravel",
            "MySql",
        ],
        description: "CompaStudent (Student's Compass): To assist in determining the correct timing of lectures and the availability of classrooms, along with the ability to reschedule appointments.",
        source_code: "https://github.com/ibrahimdayoub/compastudent",
        live_link: null,
        image: p4,
        role: "Full-stack Developer"
    },
]

export const MoreProjects = [
    {
        id: 0,
        name: "Application for elevator maintenance service",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: null,
        live_link: "https://play.google.com/store/apps/details?id=com.rareweb.shamlift",
        image: null,
        role: "Back-end Developer"
    },
    {
        id: 1,
        name: "Website for individual and group chats in real time",
        tools: [
            "ReactJs",
            "Chakra UI",
            "NodeJs",
            "ExpressJs",
            "SocketIO",
            "Mongoose",
            "MongoDB"
        ],
        source_code: "https://github.com/ibrahimdayoub/sky-msg",
        live_link: null,
        image: p5,
        role: "Full-stack Developer"
    },
    {
        id: 2,
        name: "Website for blog posts",
        tools: [
            "ReactJs",
            "NodeJs",
            "ExpressJs",
            "Mongoose",
            "MongoDB"
        ],
        source_code: "https://github.com/ibrahimdayoub/my-blog",
        live_link: null,
        image: p6,
        role: "Full-stack Developer"
    },
    {
        id: 3,
        name: "Website for displaying weather conditions and forecasts",
        tools: [
            "ReactJs",
            "Rapid Api",
            "OpenWeather Api",
        ],
        source_code: "https://github.com/ibrahimdayoub/its-weather",
        live_link: null,
        image: p7,
        role: "Front-end Developer"
    },
    {
        id: 4,
        name: "Website for a gym focusing on health and fitnes",
        tools: [
            "ReactJs",
            "Material UI",
            "Rapid Api",
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-1",
        live_link: null,
        image: p8,
        role: "Front-end Developer"
    },
    {
        id: 5,
        name: "Websit for food ordering and restaurant showcasing",
        tools: [
            "ReactJs",
            "NextJs",
            "TailwindCss",    
            "Prisma",
            "MySql",
            "Stripe"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-2",
        live_link: null,
        image: p9,
        role: "Full-stack Developer"
    },
    {
        id: 6,
        name: "Website for a library and book borrowing",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-3",
        live_link: null,
        image: null,
        role: "Back-end Developer"
    },
    {
        id: 7,
        name: "Website for a store to display and sell clothing",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-4",
        live_link: null,
        image: null,
        role: "Back-end Developer"
    },
    {
        id: 8,
        name: "Website for university housing and accommodation management",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-5",
        live_link: null,
        image: null,
        role: "Back-end Developer"
    },
]