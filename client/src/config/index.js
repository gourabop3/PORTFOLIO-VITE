import Linkedin from "../assets/3d-icon/LinkedIn.png";
import Mail from "../assets/3d-icon/Gmail.png";
import GitHub from "../assets/3d-icon/github.png";
import Facebook from "../assets/3d-icon/Facebook.png";
import Instagram from "../assets/3d-icon/Instagram.png";

import Portfolio from "../assets/projects/project 1.png";
import newE_comm from "../assets/projects/new E-commerce.png";
import My_Portfolio from "../assets/projects/11 Personal Portfolio.jpg";
import Contact_APP from "../assets/projects/12 Firebase Contact CRUD.png";
import Nike_Shoe from "../assets/projects/13 Nike store.png";
import Weather_Tracker from "../assets/projects/06 Pro Weather App.png";
import Razorpay_Clone from "../assets/projects/10 Razorpay-Clone.png";
import Cara_E_commerce from "../assets/projects/02 Pro - Shopping Image 1.png";
import Password_generator from "../assets/projects/07 Pro Password genrator -APP0.png";
import Basic_Portfolio from "../assets/projects/01 Pro (Portfolio website 1).png";
import Client_Portfolio from "../assets/projects/03 Pro - Client Portfolio 1.png";
import Spotify_clone from "../assets/projects/04 Pro - Spotify Clone 1.png";
import Login_Page from "../assets/projects/05 Pro - Login Page 1.png";
import Registration_page from "../assets/projects/08 Registration Page.png";
import TechSoft from "../assets/projects/Tech_Soft Blog.png";
import MusicWebsite from "../assets/projects/14MusicallWebsite.png";

import Vite_React from "../assets/skills/Vite_react.png";
import firebase from "../assets/skills/Firebase.png";

import Java from "../assets/skills/java.png";
import HTML from "../assets/skills/Html.png";
import CSS from "../assets/skills/Css.png";
import Javascript from "../assets/skills/Js.png";
import Tailwind from "../assets/skills/Tailwind.png";
import MongoDB from "../assets/skills/MongoDB.png";
import Express from "../assets/skills/Express.png";
import React from "../assets/skills/React.png";
import Node from "../assets/skills/Node.png";
import Redux from "../assets/skills/redux.png";
import Git from "../assets/skills/git.png";
import Figma from "../assets/skills/figma.png";
import Arduino from "../assets/skills/arduino.png";
import Nextjs from "../assets/skills/next.js.png";
import Typescript from "../assets/skills/typescript.png";

import Vercel from "../assets/skills/Vercel.png";

export const Social_Media = [{
        id: 1,
        name: "LinkedIn",
        path: "#",
        image: Linkedin,
    },
    {
        id: 2,
        name: "Mail",
        path: "mailto:gourabmullick200@gmail.com",
        image: Mail,
    },
    {
        id: 3,
        name: "GitHub",
        path: "https://github.com/gourabop3",
        image: GitHub,
    },
    {
        id: 4,
        name: "Facebook",
        path: "#",
        image: Facebook,
    },
    {
        id: 5,
        name: "Instagram",
        path: "https://www.instagram.com/gourab_op_84",
        image: Instagram,
    },
];

export const FilterData = [{
        id: "1",
        title: "All",
        type: "All",
    },
    {
        id: "2",
        title: "Full Stack",
        type: "Full Stack",
    },
    {
        id: "3",
        title: "Frontend",
        type: "Frontend",
    },
    {
        id: "4",
        title: "Javascript",
        type: "Javascript",
    },
    {
        id: "5",
        title: "HTML/CSS",
        type: "HTML/CSS",
    },
];

export const Links = [{
        id: 1,
        name: "Home",
        href: "/",
    },
    {
        id: 2,
        name: "About",
        href: "/about",
    },
    {
        id: 3,
        name: "Education",
        href: "/education",
    },
    {
        id: 4,
        name: "Experience",
        href: "/work-experience",
    },
    {
        id: 5,
        name: "Contact",
        href: "/contact",
    },
];

export const Edu_Data = [{
        id: 1,
        name: "Sonamukhi College, Bankura",
        date: "June 2020 - June 2024",
        branch: "Branch: Bengali Medium",
        standard: "Year : B.Com ",
    },
    {
        id: 2,
        name: "Indus High School, Bankura",
        date: "June 2019 - March 2020",
        branch: "Branch: Bengali Medium",
        standard: "Class: 12th (COM) | WBBSE",
    },
    {
        id: 3,
        name: "Patit High School, Bankura",
        date: "June 2017 - March 2018",
        branch: "Branch: Bengali Medium",
        standard: "Class: 10th | WBBSE",
    },
];

export const about = [{
    id: 1,
    title: "ABOUT ME ",
    heading: "Hi, I'm GOURAB & I'm ",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis ratione similique quas, soluta reiciendis quos veniam. Molestiae, cumque fugiat.",
    email: "gourabmullick200@gmail.com",
    location: "Sonamukhi (WB), 722207",
}, ];

export const project = [
    // 1. title: "My Portfolio",
    {
        id: 1,
        title: "Portfolio",
        date: "June 2024 - July 2024",
        description: "Designed a personal portfolio website showcasing skills and projects for personal growth. Applied successfully email.js API for form validation and sending emails/messages for collaboration and other. Leveraged Next.js, typescript, React.js, and Node.js to create interactive & dynamic features, enhancing user experience. Utilized Tailwind CSS for styling and layout, ensuring a responsiveness to across devices. Integrated 3D animations and 3D images for enhanced visual appeal and engagement.",
        image: My_Portfolio,
        link: "https://github.com/Rajyadav2912/Portfolio_Next.js",
        weblink: "https://raj-developer-2920.vercel.app/",
        skills: [{
                id: 1,
                name: "Next.js",
                image: Nextjs,
            },
            {
                id: 2,
                name: "Tailwind Css",
                image: Typescript,
            },
            {
                id: 3,
                name: "React.js",
                image: React,
            },
            {
                id: 4,
                name: "Tailwind Css",
                image: Tailwind,
            },
            {
                id: 5,
                name: "JavaScript",
                image: Javascript,
            },
        ],
        category: "Frontend",
    },
    // 2. title: "Musicall Website"
    {
        id: 2,
        title: "Musicall Website",
        date: "June 2024 - June 2024",
        description: "Design a music teaching website using Next.js, TypeScript, and React for interactive lessons, practice exercises, and video tutorials. The site features a responsive, user-friendly interface with fast loading times, reusable UI components, and an engaging, visually appealing layout.",
        image: MusicWebsite,
        link: "https://github.com/Rajyadav2912/Music-Web-Next.js",
        weblink: "https://music-web-next-js-web-app.vercel.app/",
        skills: [{
                id: 1,
                name: "Next.js",
                image: Nextjs,
            },
            {
                id: 2,
                name: "Tailwind Css",
                image: Typescript,
            },
            {
                id: 3,
                name: "React.js",
                image: React,
            },
            {
                id: 4,
                name: "Tailwind Css",
                image: Tailwind,
            },
        ],
        category: "Frontend",
    },
    // 3.  title: "Tech-Soft Blog website",
    {
        id: 3,
        title: "Tech-Soft Blog website",
        date: "Feb 2024 - Mar 2024",
        description: "Created and executed the Tech-Soft Blog website to showcase trending technologies, software, AI, and applications. Rendered React.js for the front end to build a flexible and interactive user experience. Implemented API integration to fetch and display real-time data on the latest new trends. Efficiently managed state to ensure seamless data handling and updates.",
        image: TechSoft,
        link: "https://github.com/Rajyadav2912/Tech_Soft_Blog-Website",
        weblink: "https://tech-soft-blog.vercel.app/",
        skills: [{
                id: 1,
                name: "HTML",
                image: HTML,
            },
            {
                id: 2,
                name: "CSS",
                image: CSS,
            },
            {
                id: 3,
                name: "JavaScript",
                image: Javascript,
            },
            {
                id: 4,
                name: "React.js",
                image: React,
            },
            {
                id: 5,
                name: "Tailwind",
                image: Tailwind,
            },
        ],
        category: "Frontend",
    },
    // 4. title: "Full Stack E-commerce website",
    {
        id: 4,
        title: "Full Stack E-commerce website",
        date: "Mar 2024 - Apr 2024",
        description: "Developed a full-stack E-commerce website with an Admin panel using MERN and Tailwind.css. Gained expertise in database management, server-side scripting, dynamic UI development, and responsive design. Utilized JSON Web Token (JWT) for secure authentication & optimizing database queries, and user-friendly experiences. Enhanced coding expertise through hands-on project experience, gaining valuable problem-solving skills and adaptability.",
        image: newE_comm,
        link: "https://github.com/Rajyadav2912/E-commerce-Shopping-website-MERN",
        weblink: "https://e-commerce-website-frontend29.vercel.app/",
        skills: [{
                id: 1,
                name: "MongoDB",
                image: MongoDB,
            },
            {
                id: 2,
                name: "Express.js",
                image: Express,
            },
            {
                id: 3,
                name: "React.js",
                image: React,
            },
            {
                id: 4,
                name: "Node.js",
                image: Node,
            },
            {
                id: 5,
                name: "Tailwind Css",
                image: Tailwind,
            },
        ],
        category: "Full Stack",
    },
    // 5. title: "Contact APP with CRUD",
    {
        id: 5,
        title: "Contact APP with CRUD",
        date: "Jan 2024 - feb 2024",
        description: "Developed a Contact App project with CRUD (Create, Read, Update, Delete) functionality. Implemented Firebase as the backend database for data management. Utilized Vite and React.js for core structure and functionality of application",
        image: Contact_APP,
        link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/07_Projects/contact-app-crud",
        weblink: "https://contact-app-crud.vercel.app/",
        skills: [{
                id: 1,
                name: "Vite and React.js",
                image: Vite_React,
            },
            {
                id: 2,
                name: "Node.js",
                image: Node,
            },
            {
                id: 3,
                name: "Tailwind.css",
                image: Tailwind,
            },
            {
                id: 4,
                name: "Firebase",
                image: firebase,
            },
        ],
        category: "Full Stack",
    },
];

export const allprojects = [
    // 2. title: "My Portfolio",
    {
        id: 1,
        title: "Portfolio",
        date: "June 2024 - July 2024",
        description: "Designed a personal portfolio website showcasing skills and projects for personal growth. Applied successfully email.js API for form validation and sending emails/messages for collaboration and other. Leveraged Next.js, typescript, React.js, and Node.js to create interactive & dynamic features, enhancing user experience. Utilized Tailwind CSS for styling and layout, ensuring a responsiveness to across devices. Integrated 3D animations and 3D images for enhanced visual appeal and engagement.",
        image: My_Portfolio,
        link: "https://github.com/Rajyadav2912/Portfolio_Next.js",
        weblink: "https://raj-developer-2920.vercel.app/",
        skills: [{
                id: 1,
                name: "Next.js",
                image: Nextjs,
            },
            {
                id: 2,
                name: "Tailwind Css",
                image: Typescript,
            },
            {
                id: 3,
                name: "React.js",
                image: React,
            },
            {
                id: 4,
                name: "Tailwind Css",
                image: Tailwind,
            },
            {
                id: 5,
                name: "JavaScript",
                image: Javascript,
            },
        ],
        category: "Frontend",
    },
    // 2. title: "My Portfolio",
    {
        id: 2,
        title: "Musicall Website",
        date: "June 2024 - June 2024",
        description: "Design a music teaching website using Next.js, TypeScript, and React for interactive lessons, practice exercises, and video tutorials. The site features a responsive, user-friendly interface with fast loading times, reusable UI components, and an engaging, visually appealing layout.",
        image: MusicWebsite,
        link: "https://github.com/Rajyadav2912/Music-Web-Next.js",
        weblink: "https://music-web-next-js-web-app.vercel.app/",
        skills: [{
                id: 1,
                name: "Next.js",
                image: Nextjs,
            },
            {
                id: 2,
                name: "Tailwind Css",
                image: Typescript,
            },
            {
                id: 3,
                name: "React.js",
                image: React,
            },
            {
                id: 4,
                name: "Tailwind Css",
                image: Tailwind,
            },
        ],
        category: "Frontend",
    },
    // 1.  title: "Tech-Soft Blog website",
    {
        id: 3,
        title: "Tech-Soft Blog website",
        date: "Feb 2024 - Mar 2024",
        description: "Created and executed the Tech-Soft Blog website to showcase trending technologies, software, AI, and applications. Rendered React.js for the front end to build a flexible and interactive user experience. Implemented API integration to fetch and display real-time data on the latest new trends. Efficiently managed state to ensure seamless data handling and updates.",
        image: TechSoft,
        link: "https://github.com/Rajyadav2912/Tech_Soft_Blog-Website",
        weblink: "https://tech-soft-blog.vercel.app/",
        skills: [{
                id: 1,
                name: "HTML",
                image: HTML,
            },
            {
                id: 2,
                name: "CSS",
                image: CSS,
            },
            {
                id: 3,
                name: "JavaScript",
                image: Javascript,
            },
            {
                id: 4,
                name: "React.js",
                image: React,
            },
            {
                id: 5,
                name: "Tailwind",
                image: Tailwind,
            },
        ],
        category: "Frontend",
    },
    // 3. title: "Full Stack E-commerce website",
    {
        id: 4,
        title: "Full Stack E-commerce website",
        date: "Mar 2024 - Apr 2024",
        description: "Developed a full-stack E-commerce website with an Admin panel using MERN and Tailwind.css. Gained expertise in database management, server-side scripting, dynamic UI development, and responsive design. Utilized JSON Web Token (JWT) for secure authentication & optimizing database queries, and user-friendly experiences. Enhanced coding expertise through hands-on project experience, gaining valuable problem-solving skills and adaptability.",
        image: newE_comm,
        link: "https://github.com/Rajyadav2912/E-commerce-Shopping-website-MERN",
        weblink: "https://e-commerce-website-frontend29.vercel.app/",
        skills: [{
                id: 1,
                name: "MongoDB",
                image: MongoDB,
            },
            {
                id: 2,
                name: "Express.js",
                image: Express,
            },
            {
                id: 3,
                name: "React.js",
                image: React,
            },
            {
                id: 4,
                name: "Node.js",
                image: Node,
            },
            {
                id: 5,
                name: "Tailwind Css",
                image: Tailwind,
            },
        ],
        category: "Full Stack",
    },
    // 4. title: "My Portfolio",
    {
        id: 5,
        title: "My Portfolio",
        date: "Jan 2024 - feb 2024",
        description: "Developed a amazing portfolio website using HTML, CSS, and JavaScript. Implemented animations, 3D effects with CSS and full responsive Integrated ScrollReveal for smooth scroll and utilized email.js API for contact",
        image: My_Portfolio,
        link: "https://github.com/Rajyadav2912/RAJ_PORTFOLIO",
        weblink: "https://raj-portfolio-29.netlify.app/",
        skills: [{
                id: 1,
                name: "HTML",
                image: HTML,
            },
            {
                id: 2,
                name: "CSS",
                image: CSS,
            },
            {
                id: 3,
                name: "JavaScript",
                image: Javascript,
            },
        ],
        category: "HTML/CSS/Js",
    },
];

export const skills = [{
        id: 1,
        name: "Java",
        image: Java,
        width: 80,
        height: 80,
    },
    {
        id: 2,
        name: "HTML",
        image: HTML,
        width: 60,
        height: 60,
    },
    {
        id: 3,
        name: "CSS",
        image: CSS,
        width: 60,
        height: 60,
    },
    {
        id: 4,
        name: "Javascipt",
        image: Javascript,
        width: 60,
        height: 60,
    },
    {
        id: 5,
        name: "Tailwind.css",
        image: Tailwind,
        width: 65,
        height: 65,
    },
    {
        id: 6,
        name: "Redux",
        image: Redux,
        width: 70,
        height: 70,
    },
    {
        id: 7,
        name: "MongoDB",
        image: MongoDB,
        width: 80,
        height: 80,
    },
    {
        id: 8,
        name: "Express.js",
        image: Express,
        width: 80,
        height: 80,
    },
    {
        id: 9,
        name: "React,.js",
        image: React,
        width: 80,
        height: 80,
    },
    {
        id: 10,
        name: "Node.js",
        image: Node,
        width: 80,
        height: 80,
    },
    {
        id: 11,
        name: "Next.js",
        image: Nextjs,
        width: 80,
        height: 80,
    },
    {
        id: 12,
        name: "TypeScript",
        image: Typescript,
        width: 70,
        height: 70,
    },
    {
        id: 13,
        name: "Figma",
        image: Figma,
        width: 80,
        height: 80,
    },
    {
        id: 14,
        name: "GitHub",
        image: GitHub,
        width: 80,
        height: 80,
    },
    {
        id: 15,
        name: "Git",
        image: Git,
        width: 80,
        height: 80,
    },
    {
        id: 16,
        name: "Arduino",
        image: Arduino,
        width: 80,
        height: 80,
    },
    {
        id: 17,
        name: "Vercel",
        image: Vercel,
        width: 80,
        height: 80,
    },
];

export const skill6 = [{
        id: 1,
        name: "Java",
        image: Java,
        width: 80,
        height: 80,
    },
    {
        id: 2,
        name: "HTML",
        image: HTML,
        width: 60,
        height: 60,
    },
    {
        id: 3,
        name: "CSS",
        image: CSS,
        width: 60,
        height: 60,
    },
    {
        id: 4,
        name: "Javascipt",
        image: Javascript,
        width: 60,
        height: 60,
    },
    {
        id: 5,
        name: "Tailwind.css",
        image: Tailwind,
        width: 65,
        height: 65,
    },
    {
        id: 6,
        name: "Redux",
        image: Redux,
        width: 60,
        height: 60,
    },
];

export const skill5 = [{
        id: 7,
        name: "MongoDB",
        image: MongoDB,
        width: 80,
        height: 80,
    },
    {
        id: 8,
        name: "Express.js",
        image: Express,
        width: 80,
        height: 80,
    },
    {
        id: 9,
        name: "React,.js",
        image: React,
        width: 80,
        height: 80,
    },
    {
        id: 10,
        name: "Node.js",
        image: Node,
        width: 80,
        height: 80,
    },
    {
        id: 11,
        name: "Next.js",
        image: Nextjs,
        width: 80,
        height: 80,
    },
];

export const skill4 = [{
        id: 12,
        name: "TypeScript",
        image: Typescript,
        width: 70,
        height: 70,
    },
    {
        id: 13,
        name: "Figma",
        image: Figma,
        width: 80,
        height: 80,
    },
    {
        id: 14,
        name: "GitHub",
        image: GitHub,
        width: 80,
        height: 80,
    },
    {
        id: 15,
        name: "Git",
        image: Git,
        width: 80,
        height: 80,
    },
];

export const skill3 = [{
        id: 16,
        name: "Arduino",
        image: Arduino,
        width: 80,
        height: 80,
    },
    {
        id: 17,
        name: "Vercel",
        image: Vercel,
        width: 80,
        height: 80,
    },
];
