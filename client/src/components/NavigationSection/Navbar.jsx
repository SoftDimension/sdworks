import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarMiddleText from "./NavbarMiddleText";

function Navbar() {

  const [ProilePage, setProilePage] = useState(false)

  return (
    <>
      <div className="border-b border-slate-300 pb-5">
        <div className="bg-white p-4 rounded-full">
          <nav className="flex justify-between">
            {/* Logo Section */}

            <div className="h-auto w-40 ">
              <Link to="/">
              <img
                src="Website__Main__logo.png"
                className="w-full h-full"
                alt=""
              />
              </Link>
            </div>

            {/* Middle Section */}

            <div className="flex justify-between ">
              <h1 className="text-xl"><NavbarMiddleText /></h1>
            </div>

            {/* Right Side Section */}

            <div className="h-full flex justify-between items-center">
              <div className="h-8 flex items-center">
                <input
                  type="text"
                  className="w-full rounded-l-full h-full border border-slate-400 outline-none pl-5"
                  placeholder="Search Here"
                />
                <button className="bg-cyan-600 w-10 h-full rounded-r-full flex justify-center items-center">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="border-black border rounded-full w-8 h-8 mx-10 cursor-pointer" onClick={()=>{setProilePage(!ProilePage)}}>
                <img src="anonymus.png" alt="" />
              </div>
              {ProilePage == true ?
              <div className="w-80 border top-16 p-10 right-16 h-80 bg-white absolute rounded-lg">
                <ul>
                  <Link to="/profile" >
                  <li className="hover:border hover:border-cyan-300 p-1 rounded-full text-center cursor-pointer" onClick={()=>{setProilePage(false)}}>Profile</li>
                  </Link>
                </ul>
              </div>
              :null  }
              <div className="relative">
                <i class="fa-regular fa-bell text-xl"></i>
                <div className="bg-red-500 w-4 h-4 text-sm flex justify-center items-center Bell__Notification__Number rounded-full ">
                  2
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
