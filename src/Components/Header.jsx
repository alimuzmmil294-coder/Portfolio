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
  const [first, setfirst] = useState(null);
  return (
    <header className="text-[#FFFFFF] p-6">
      <ul className="w-fit m-auto  flex justify-center gap-10 items-center bg-[#1C1A19] px-6 py-4 rounded-2xl">
        {links.map((link, idx) => (
          <li
            onMouseEnter={() => setfirst(idx)}
            onMouseLeave={() => setfirst(null)}
            key={link.id}
            className="list-none flex flex-col items-center justify-center relative"
          >
            <Link to={link.paht} className="text-[20px] p-3">
              {link.icon}
            </Link>
            <span
              className={`absolute top-[100%] left-50% transition-all duration-300 px-2 py-1 rounded-md bg-[#1C1A19] text-sm  pointer-events-none ${first === idx
                ? "opacity-100 translate-y-2 visible"
                : "opacity-0 translate-y-0 invisible"
                }`}
            >{link.name}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
