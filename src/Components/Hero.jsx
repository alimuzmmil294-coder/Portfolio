import React from "react";
import MyImage from "../assets/Images/MyImage.png";
import { FaDribbble, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const icons = [
  { id: 1, icon: <FaDribbble /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaYoutube /> },
];
const Hero = () => {
  return (
    <section className="w-full flex items-start">
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
                <li className="list-none">{item.icon}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <article className="w-[60%] text-[#FFFFFF] p-6">
        <div className="flex flex-col text-7xl font-bold py-4 ">
          <h1>Web</h1>
          <h1 className="text-[#353334]">Developer </h1>
        </div>
        <p>
          <p className="text-[#817979]">
            Dedicated to building seamless, engaging user interfaces. I’m a Web
            Developer specializing in transforming complex design ideas into
            pixel-perfect, interactive, and beautifully crafted web experiences.
          </p>

          <ul className="flex justify-between  mt-10 w-[50%]">
            <li className="list-none font-bold text-5xl">+1</li>
            <li className="list-none font-bold text-5xl">+5</li>
            <li className="list-none font-bold text-5xl">+0</li>
          </ul>
          <ul className="flex justify-between w-[50%] items-center">
            <li className="list-none text-[#817979] text-[14px]">YEARS OF EXPERIENCE</li>
            <li className="list-none text-[#817979] text-[14px]">PERSONAL PROJECTS COMPLETED</li>
            <li className="list-none text-[#817979] text-[14px]">WORLDWIDE CLIENTS</li>
          </ul>
        </p>
      </article>
    </section>
  );
};

export default Hero;
