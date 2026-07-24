import React from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.2, // Trigger when 20% visible
  });

  return (
    <div
      ref={ref}
      className={`flex justify-center items-center text-[#968C8B] bg-[#151312] h-[20vh] ${
        inView ? "animate__animated animate__bounce" : "opacity-0"
      }`}
    >
      <h1 className="capitalize">
        Made by <span className="text-[#EB6937]">muzammil ali</span> | with{" "}
        <span className="text-[#EB6937]">love and tea</span>
      </h1>
    </div>
  );
};

export default Footer;
