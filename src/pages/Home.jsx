import React from "react";
import search from "../images/search.svg";
import germany from "../images/germany.jpg";
import usa from "../images/usa.jpg";
import brazil from "../images/brazil.jpg";
import island from "../images/island.jpg";
import afgan from "../images/afgan.jpg";
import island1 from "../images/island1.jpg";
import albania from "../images/albania.jpg";
import algeria from "../images/algeria.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="w-[1200px]  mx-auto flex justify-between items-center	mb-16">
        <form className=" bg-white w-[500px] flex items-center gap-4 p-4 rounded 	shadow-md">
          <img src={search} alt="search image" />
          <input
            type="text "
            className="focus:none focus:outline-none"
            placeholder="Search for a country…"
          />
        </form>
        <div>
          <select className="w-[200px] p-4 rounded shadow-md">
            <option>Filter by Region</option>
            <option>Uzb</option>
            <option>Rus</option>
            <option>Eng</option>
          </select>
        </div>
      </div>
      <div className="w-[1200px]  mx-auto flex justify-between 	mb-16 ">
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={germany} alt="germany flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Germany</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 81,770,900
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Europe
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Berlin
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={usa} alt="usa flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">United States of America</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 323,947,000
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Americas
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Washington, D.C.
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={brazil} alt="brazil flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Brazil</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 206,135,893
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Americas
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Brasília
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={island} alt="island flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Iceland</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 334,300
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Europe
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Reykjavík
            </p>
          </div>
        </div>
      </div>
      <div className="w-[1200px]  mx-auto flex justify-between 	mb-20 ">
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={afgan} alt="afgan flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Afghanistan</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 27,657,145
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Asia
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Kabul
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={island1} alt="island1 flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Åland Islands</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 28,875
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Europe
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Mariehamn
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={albania} alt="albania flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Albania</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 2,886,026
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Europe
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Tirana
            </p>
          </div>
        </div>
        <div className="bg-white w-[250px] shadow-md	rounded cursor-pointer">
          <div>
            <img src={algeria} alt="algeria flag image" />
          </div>

          <div className="p-5">
            <h3 className="font-bold mb-3 text-md">Algeria</h3>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">
                Population
              </span>
              : 40,400,000
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Region</span>:
              Africa
            </p>
            <p className="text-black text-opacity-60 text-sm mb-1">
              <span className="font-medium text-base text-black">Capital</span>:
              Algiers
            </p>
          </div>
        </div>
      </div>
      <Link to={'/login'}>kir</Link>
    </div>
  );
}

export default Home;
