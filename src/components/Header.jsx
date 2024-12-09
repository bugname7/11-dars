import React from "react";
import darkmode from "../images/darkmode.svg";

function Header() {
  return (
    <div className="bg-white p-1 shadow-md mb-16">
      <div className="w-[1200px] flex justify-between mx-auto pt-5 pb-5">
        <h2 className="text-black font-bold text-2xl">Where in the world?</h2>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={darkmode} width='20px' alt="darkmode image" />
          <button>Dark Mode</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
