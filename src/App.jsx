import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="font-poppins font-medium   bg-[#151312] w-full">
      <div className="w-[75%] border border-white min-h-screen m-auto">
        <Header />
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/projects" element={<h1>Hello World</h1>} />
          <Route path="/experience" element={<h1>Hello World</h1>} />
          <Route path="/tools" element={<h1>Hello World</h1>} />
          <Route path="/thoughts" element={<h1>Hello World</h1>} />
        </Routes>
        <Hero />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
