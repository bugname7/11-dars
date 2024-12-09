import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import uzb from "../images/afgan.jpg";

function CountryInfo() {
  return (
    <div className="dark:bg-slate-900 pb-44">
      <Header />
      <div className="w-[1200px] mx-auto pt-20  h-full">
        <Link to={"/"} className="mb-12 dark:text-white hover:underline">
          Back
        </Link>
        <div className=" mt-20 flex gap-32">
          <div>
            <img
              src={uzb}
              width="500px"
              className="rounded"
              alt="flag images"
            />
          </div>
          <div className="mt-8">
            <h3 className="dark:text-white font-bold text-xl mb-4">Belgium</h3>
            <h4 className="dark:text-white text-sm mb-2">
              Population: 81,770,900
            </h4>
            <p className="dark:text-white text-sm mb-2">Region: Europe</p>
            <p className="dark:text-white text-sm mb-2">Capital: Berlin</p>
            <div className="flex gap-4 mt-12 text-center">
              <p className="dark:text-white text-sm mb-2 text-center mt-1">Border Countries:</p>
              <p className="dark:text-white text-sm mb-2  border-2 p-1 text-center items-center shadow-md">France</p>
              <p className="dark:text-white text-sm mb-2 border-2 p-1 text-center items-center shadow-md">Germany</p>
              <p className="dark:text-white text-sm mb-2 border-2 p-1 text-center items-center shadow-md">
                Netherlands
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
