import React, { useState } from "react";
import "animate.css";
import MyImage from "../assets/Images/MyImage.png";
import OrangeImage from "../assets/Images/orange.jpg";
import GreenImage from "../assets/Images/green.png";
import heckathonProject from '../assets/Images/heckathonProject.png'
import CodewithHarry from '../assets/Images/codeWithHarry.png'
import AgeCalculator from '../assets/Images/ageCalculator.png'
import TodoList from '../assets/Images/todoList.png'
import { FiLayers } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaDribbble, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const icons = [
  { id: 1, icon: <FaDribbble /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaYoutube /> },
];
const Hero = () => {
  const [text, setText] = useState(true)
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
                <li key={item.id} className="list-none">{item.icon}</li>
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



        {/*{/*==================================== The two Images ====================================*/}
        {/* <section className="flex w-full mt-10 h-50">
          <div className="w-[60%] m-auto h-full relative">
            <img
              className="rounded-2xl w-[90%] m-auto opacity-90 h-full"
              src={OrangeImage}
              alt=""
            />
            <div className="absolute top-0 flex flex-col justify-around h-full w-full p-6">
              <span className="text-3xl">
                <FiLayers />
              </span>
              <p className="text-2xl">DYNAMIC ANIMATION, MOTION DESIGN</p>
              <Link to={} className="text-3xl border w-fit absolute bottom-6 right-10 rounded-md hover:bg-white transition-all duration-300 hover:text-orange-500 ">
                <MdOutlineArrowRightAlt />
              </Link>
            </div>
          </div>
          <div className="w-[60%] m-auto h-full relative text-gray-200">
            <img
              className="rounded-2xl w-[90%] h-full m-auto relative opacity-90"
              src={GreenImage}
              alt=""
            />
            <div className="absolute top-0 flex flex-col justify-around h-full w-full p-6">
              <span className="text-3xl">
                <FiLayers />
              </span>
              <p className="text-2xl">FRAMER, FIGMA, WORDPRESS, REACTJS</p>
              <span className="text-3xl border w-fit absolute bottom-1 right-10 rounded-md ">
                <MdOutlineArrowRightAlt />
              </span>
            </div>
          </div>
        </section> */}

        {/* ====================================The Recent Projects====================================  */}
        <article className="border text-white my-10 py-10">


          {/* ====================================The reactProjects h1====================================  */}
          <div className="flex flex-col text-7xl font-bold py-4 ">
            <h1>RECENT</h1>
            <h1 className="text-[#353334]">PROJECTS </h1>
          </div>



          {/* ====================================The reactProjects Cards====================================  */}


          {/* ====================================Card # 1====================================  */}
          <article
            onMouseEnter={() => setText(true)}
            onMouseLeave={() => setText(false)}
            className="flex w-full h-37 items-center border rounded-lg overflow-hidden my-5">
            <img
              src={heckathonProject}
              alt="Orange hackathon project preview"
              className="h-full object-cover aspect-square"
            />
            <div className="flex flex-col justify-center px-6 gap-1">
              <h3 className="text-xl font-semibold">Hackathon Project</h3>
              <p className="text-sm text-[#928888]">SaaS Framer Template</p>
            </div>
            <span className={`${setText ? "translate-x-2" : ""}`}>Hello World!</span>
          </article>


          {/* ====================================Card # 2====================================  */}
          <article className=" flex w-full hover:bg-[#1C1A19] transition-all duration-200  h-37 items-center rounded-lg overflow-hidden my-5">
            <img
              src={CodewithHarry}
              alt="Orange hackathon project preview"
              className="h-full object-contain aspect-square"
            />
            <div className="flex flex-col justify-center px-6 gap-1">
              <h3 className="text-xl font-semibold">Hackathon Project</h3>
              <p className="text-sm text-[#928888]">SaaS Framer Template</p>
            </div>
          </article>



          {/* ====================================Card # 3====================================  */}
          <article className="flex w-full h-37 items-center border rounded-lg overflow-hidden my-5">
            <img
              src={AgeCalculator}
              alt="Orange hackathon project preview"
              className="h-full object-cover aspect-square"
            />
            <div className="flex flex-col justify-center px-6 gap-1">
              <h3 className="text-xl font-semibold">Hackathon Project</h3>
              <p className="text-sm text-[#928888]">SaaS Framer Template</p>
            </div>
          </article>


          {/* ====================================Card # 4====================================  */}
          <article className="flex w-full h-37 items-center border rounded-lg overflow-hidden my-5">
            <img
              src={TodoList}
              alt="Orange hackathon project preview"
              className="h-full object-cover aspect-square"
            />
            <div className="flex flex-col justify-center px-6 gap-1">
              <h3 className="text-xl font-semibold">Hackathon Project</h3>
              <p className="text-sm text-[#928888]">SaaS Framer Template</p>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Hero;
