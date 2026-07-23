import React, { useState } from "react";
import "animate.css";
import MyImage from "../assets/Images/MyImage.png";
import OrangeImage from "../assets/Images/orange.jpg";
import GreenImage from "../assets/Images/green.png";
import heckathonProject from "../assets/Images/heckathonProject.png";
import CodewithHarry from "../assets/Images/codeWithHarry.png";
import AgeCalculator from "../assets/Images/ageCalculator.png";
import TodoList from "../assets/Images/todoList.png";
import { FiLayers } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaDribbble, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Contact from "./Contact";

const icons = [
  { id: 1, icon: <FaDribbble /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaYoutube /> },
];

const tools = [
  { id: 1, icon: <IoLogoReact />, heading: "React", text: "UI building" },
  {
    id: 2,
    icon: <RiTailwindCssLine />,
    heading: "Tailwind",
    text: "Utility-first CSS styling  ",
  },
  {
    id: 3,
    icon: <AiOutlineJavaScript />,
    heading: "Javascript",
    text: "Web scripting",
  },
  { id: 4, icon: <VscVscode />, heading: "VS Code", text: "Code Editing" },
  { id: 5, icon: <SiPostman />, heading: "Postman", text: "API Testing" },
  {
    id: 5,
    icon: <FaGithub />,
    heading: "GitHub",
    text: "Cloud version control",
  },
];

const cards = [
  {
    id: 1,
    path: "https://code-with-harry-website-two.vercel.app/",
    image: CodewithHarry,
    text: "CodeWithHarry Clone",
    description:
      "A responsive frontend recreation of the popular e-learning platform, built from scratch to master advanced CSS layouts, semantic HTML structures, and responsive design patterns.",
    icon: <GoArrowUpRight />,
  },
  {
    id: 2,
    path: "https://heckathon-project-six.vercel.app/",
    image: heckathonProject,
    text: "First Hackathon Project: React Basics",
    description:
      "Developed during my first hackathon at SMIT to deeply understand and master the core fundamentals of React. Built with a focus on clean component architecture, state handling, and rapid, functional development under pressure.",
    icon: <GoArrowUpRight />,
  },
  {
    id: 3,
    path: "https://age-calculator-code-alpha-v2.vercel.app/",
    image: AgeCalculator,
    text: "Age Calculator Application | CodeAlpha Internship",
    description:
      "Developed as a core internship project for CodeAlpha, this application was built to master the essentials of vanilla JavaScript. The project focuses on real-time date manipulation, complex logic calculation, data validation, and building a responsive interface that handles dynamic user inputs seamlessly.",
    icon: <GoArrowUpRight />,
  },
  {
    id: 4,
    path: "https://to-do-list-code-alpha-usur.vercel.app/",
    image: TodoList,
    text: "Interactive To-Do List (CodeAlpha Internship)",
    description:
      "A responsive task management application created during my CodeAlpha internship. Built to sharpen advanced CRUD operations (Create, Read, Update, Delete) in JavaScript, implement persistent data storage, and deliver an intuitive user interface.",
    icon: <GoArrowUpRight />,
  },
];

const ExperienceCards = [
  {
    id: 1,
    path: "https://www.saylanimit.com/",
    text: "Web Development Specialist (SMIT Training)",
    description:
      "A dedicated web development student with 12 months of intensive, hands-on technical training at SMIT. Focused on mastering modern frontend and backend technologies, writing clean code, and turning complex project requirements into interactive user experiences.",
    icon: <GoArrowUpRight />,
    period: "July 2025 - Present",
  },
  {
    id: 2,
    path: "http://uop.edu.pk/",
    text: "Data Science Student (University of Peshawar)",
    description:
      "Advancing my technical expertise through a BS in Data Science, currently in my second semester with a 3.84 CGPA. Actively engaged in mastering data analytics, foundational statistical modeling, and computational logic to analyze complex datasets and solve analytical challenges.",
    icon: <GoArrowUpRight />,
    period: "Sept 2025 - Present",
  },
  {
    id: 3,
    path: "#",
    text: "Technical Compositor (Global Printing & Composing)",
    description:
      "Delivered efficient document formatting, digital typesetting, and print production management during a three-month professional engagement. Focused on mastering rapid software layouts, precise data composition, and high-quality print output operations.",
    icon: <GoArrowUpRight />,
  },
];

const Hero = () => {
  const [text, setText] = useState(null);
  return (
    // ====================================All Hero Section====================================
    <section className="w-full flex items-start">
      {/* ====================================The Left side with Picture==================================== */}
      <div className=" items-start justify-start text-center py-6 w-[40%] border border-black  min-h-screen overflow-y-auto sticky top-0 bg-[#151312] ">
        <div className="bg-white p-6 text-center w-[80%] rounded-2xl">
          <div className="h-125">
            <img
              className="m-auto rounded-2xl"
              src={MyImage}
              alt=""
              width={250}
            />
            <p className="font-bold text-4xl py-2">Muzammil Ali</p>
          </div>
          <div className="flex flex-col justify-between h-50">
            <p className="text-[#6A6B6E] text-[20px] font-semibold font-sans">
              A passionate Web Developer dedicated to building high-quality,
              impactful digital experiences.
            </p>
            <ul className="flex justify-around w-[50%] m-auto text-2xl text-orange-500 ">
              {icons.map((item) => (
                <li key={item.id} className="list-none">
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*==================================== The Right Side "All Content" ==============================*/}
      <article className="w-[60%] text-[#FFFFFF] p-6">
        {/*==================================== The first h1==================================== */}
        <div className="flex flex-col text-7xl font-bold py-4 ">
          <h1>Web</h1>
          <h1 className="text-[#353334]">Developer </h1>
        </div>

        {/*{/*==================================== The Text below the H1============================== */}
        <div>
          <p className="text-[#817979]">
            Dedicated to building seamless, engaging user interfaces. I’m a Web
            Developer specializing in transforming complex design ideas into
            pixel-perfect, interactive, and beautifully crafted web experiences.
          </p>

          {/* {/*====================================The count and the text{/*==================================== */}
          <ul className="flex justify-between  mt-10 w-[50%]">
            <li className="list-none font-bold text-5xl">+1</li>
            <li className="list-none font-bold text-5xl">+5</li>
            <li className="list-none font-bold text-5xl">+0</li>
          </ul>
          <ul className="flex justify-between w-[50%] items-center">
            <li className="list-none text-[#817979] text-[14px]">
              YEARS OF EXPERIENCE
            </li>
            <li className="list-none text-[#817979] text-[14px]">
              PERSONAL PROJECTS COMPLETED
            </li>
            <li className="list-none text-[#817979] text-[14px]">
              WORLDWIDE CLIENTS
            </li>
          </ul>
        </div>

        {/* ====================================The Recent Projects====================================  */}
        <section className=" text-white my-10 py-10">
          {/* ====================================The reactProjects h1====================================  */}
          <div className="flex flex-col text-7xl font-bold py-4 ">
            <h1>RECENT</h1>
            <h1 className="text-[#353334]">PROJECTS </h1>
          </div>

          {/* ====================================The reactProjects Cards====================================  */}
          <section>
            {cards.map((card, idx) => (
              <a
                key={card.id}
                href={card.path || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setText(idx)}
                onMouseLeave={() => setText(null)}
                className="flex w-full h-40 items-center rounded-lg overflow-hidden my-5 p-3 hover:bg-[#1C1A19] transition-all duration-200"
              >
                <img
                  src={card.image}
                  alt="Orange hackathon project preview"
                  className="h-full object-cover aspect-square rounded-lg"
                />
                <div className="flex flex-col justify-center p-6 gap-1">
                  <h3 className="font-semibold">{card.text}</h3>
                  <p className="text-sm text-[rgb(146,136,136)]">
                    {card.description}
                  </p>
                </div>
                <span
                  className={`${idx === text ? "translate-x-1" : ""} text-orange-400 text-2xl transition-all duration-300`}
                >
                  {card.icon}
                </span>
              </a>
            ))}
          </section>

          {/* ====================================The Experience Section====================================  */}

          <div className="flex flex-col text-7xl font-bold py-7">
            <h1>1 Year</h1>
            <h1 className="text-[#353334]">Experience </h1>
          </div>

          {/* ====================================The Experience Card====================================  */}
          <section>
            {ExperienceCards.map((card, idx) => (
              <a
                key={card.id}
                href={card.path || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setText(idx)}
                onMouseLeave={() => setText(null)}
                className="flex w-full h-40 items-center rounded-lg overflow-hidden my-5 p-3 hover:bg-[#1C1A19] transition-all duration-200"
              >
                <div className="flex flex-col justify-center p-6 gap-3 h-full">
                  <h3 className="font-semibold">{card.text}</h3>
                  <p className="text-sm text-[rgb(146,136,136)]">
                    {card.description}
                  </p>
                  <p>2020 - 2026</p>
                </div>
                <span
                  className={`${idx === text ? "translate-x-1" : ""}text-orange-400 text-2xl transition-all duration-300`}
                >
                  {card.icon}
                </span>
              </a>
            ))}
          </section>

          {/* ====================================The Tools Section====================================  */}

          <div className="flex flex-col text-7xl font-bold py-7">
            <h1>Premium</h1>
            <h1 className="text-[#353334]">Tools </h1>
          </div>

          {/* ====================================The Tools Section====================================  */}

          <section className="grid grid-cols-2 justify-center items-center">
            {tools.map((item, idx) => (
              <div
                key={item.id}
                className="cursor-pointer flex w-full gap-5 items-center rounded-lg overflow-hidden my-5 p-3 hover:bg-[#1C1A19] transition-all duration-200"
              >
                <span className="text-5xl hover:text-orange-500 transition-all duration-200">
                  {item.icon}
                </span>
                <div className="flex flex-col gap-4">
                  <h1 className="">{item.heading}</h1>
                  <p className="">{item.text}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
      <Contact />
      </article>
    </section>
  );
};

export default Hero;
