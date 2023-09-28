import { FaReact, FaPhp, FaLaravel, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript, TbBrandMysql, TbBrandNextjs } from 'react-icons/tb';

import Project1 from '../assets/Project1.jpg';
import Project2 from '../assets/Project2.jpg';
import Project3 from '../assets/Project3.jpg';
import Project4 from '../assets/Project4.jpg';
import Project5 from '../assets/Project5.jpg';
import Project6 from '../assets/Project6.jpg';
import Project7 from '../assets/Project7.jpg';
import Project8 from '../assets/Project8.jpg';
import Project9 from '../assets/Project9.jpg';
import Project10 from '../assets/Project10.jpg';

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
        description: "OSUM (One Step Unlimited Miles): To assist with employment and remote freelance work, and to address the issue that work requires experience and experience requires work, it is suitable for both recent graduates and experienced",
        source_code: "https://github.com/ibrahimdayoub/osum",
        image: Project1,
    },
    {
        id: 1,
        name: "Website for scheduling lectures and reserving classrooms",
        tools: [
            "ReactJs",
            "Bootstrap",
            "Laravel",
            "MySql",
        ],
        description: "CompaStudent (Student's Compass): To assist in determining the correct timing of lectures and the availability of classrooms, along with the ability to reschedule appointments",
        source_code: "https://github.com/ibrahimdayoub/compastudent",
        image: Project2,
    },
    {
        id: 2,
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
        description: "Sky-Msg: To communicate and create conversations with individuals or create chat rooms with groups, and modify groups by adding or removing members",
        source_code: "https://github.com/ibrahimdayoub/sky-msg",
        image: Project3,
    },
    {
        id: 3,
        name: "Website for blog posts",
        tools: [
            "ReactJs",
            "NodeJs",
            "ExpressJs",
            "Mongoose",
            "MongoDB"
        ],
        description: "My-Blog: To creating blogs with full control over their style, saving them, and allowing all users to browse them",
        source_code: "https://github.com/ibrahimdayoub/my-blog",
        image: Project4,
    },
    {
        id: 4,
        name: "Website for displaying weather conditions and forecasts",
        tools: [
            "ReactJs",
            "Rapid Api",
            "OpenWeather Api",
        ],
        description: "Its-Weather: To display the current weather conditions and the weather forecast for the upcoming days, where you can search for a specific city and view its status",
        source_code: "https://github.com/ibrahimdayoub/its-weather",
        image: Project5,
    }
]

export const MoreProjects = [
    {
        id: 0,
        name: "Website for a gym focusing on health and fitnes",
        tools: [
            "ReactJs",
            "Material UI",
            "Rapid Api",
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-1",
        image: Project6,
    },
    {
        id: 1,
        name: "Websit for food ordering and  restaurant showcasing",
        tools: [
            "ReactJs",
            "NextJs",
            "TailwindCss",    
            "Prisma",
            "MySql",
            "Stripe"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-2",
        image: Project7,
    },
    {
        id: 2,
        name: "Website for a library and book borrowing",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-3",
        image: Project8,
    },
    {
        id: 3,
        name: "Website for a store to display and sell clothing",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-4",
        image: Project9,
    },
    {
        id: 4,
        name: "Website for university housing and accommodation management",
        tools: [
            "Laravel",
            "MySql",
            "Restful Api"
        ],
        source_code: "https://github.com/ibrahimdayoub/freelance-5",
        image: Project10,
    },
]