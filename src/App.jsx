import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#151312] w-full">
      <div className="w-[75%] border border-white min-h-screen m-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
