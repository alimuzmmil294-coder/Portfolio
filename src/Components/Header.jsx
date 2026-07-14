import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa6";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuSquarePen } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";

const Header = () => {
  const links = [
    { id: 1, icon: <FiHome />, name: "Home", paht: "/" },
    { id: 2, icon: <FaRegFolder />, name: "Projects", paht: "/projects" },
    {
      id: 3,
      icon: <LuBriefcaseBusiness />,
      name: "Experinece",
      paht: "/experience",
    },
    { id: 4, icon: <LuWrench />, name: "Tools", paht: "/tools" },
    { id: 5, icon: <LuSquarePen />, name: "Thoughts", paht: "/thoughts" },
  ];
  const [first, setfirst] = useState(false);
  return (
    <header className="text-[#FFFFFF] p-6 border ">
      {/* bg-[#1C1A19] */}
      <ul className="w-fit m-auto  flex justify-center gap-5 items-center bg-green-500 px-3 py-1.5 rounded-md">
        {links.map((link, idx) => (
          <li key={link.id} className="list-none flex flex-col items-center justify-center relative">
            <Link to={link.paht} className="text-[20px]">{link.icon}</Link>
            <span className="absolute top-[50%] ">{link.name}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
