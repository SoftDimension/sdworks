import React from "react";

function Navbar() {
  return (
    <>
      <div className="border-b border-slate-300 pb-5">
        <div className="bg-white p-4 rounded-full">
          <nav className="flex justify-between">
            {/* Logo Section */}

            <div className="h-auto w-40 ">
              <img
                src="Website__Main__logo.png"
                className="w-full h-full"
                alt=""
              />
            </div>

            {/* Middle Section */}

            <div className="flex justify-between ">
              <h1 className="text-xl">Today</h1>
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
              <div className="border-black border rounded-full w-8 h-8 mx-10">
                <img src="logo192.png" alt="" />
              </div>
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
