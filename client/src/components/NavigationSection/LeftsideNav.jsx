import React, { useState } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderIcon,
  WalletIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";

function LeftsideNav() {

    // const [pathName, setpathName] = useState()
    let location = useLocation();
    let pathName = location.pathname;

  return (
    <>
      <div className="h-screen w-60 ">
        <div className=" bg-white h-full w-full">
          <ul className="pl-10 pt-16">
            <Link to="/">
              <li className="w-full h-5 flex items-center mb-7">
                <HomeIcon
                  className={
                    pathName == "/"
                      ? "text-cyan-600 h-full mr-2"
                      : "h-full mr-2"
                  }
                />
                Home
              </li>
            </Link>

            <Link to="/today">
              <li className="w-full h-5 flex items-center mb-7">
                <BriefcaseIcon
                  className={
                    pathName == "/today"
                      ? "text-cyan-600 h-full mr-2"
                      : "h-full mr-2"
                  }
                />
                Today
              </li>
            </Link>

            <Link to="/project">
              <li className="w-full h-5 flex items-center mb-7">
                <FolderIcon
                  className={
                    pathName == "/project"
                      ? "text-cyan-600 h-full mr-2"
                      : "h-full mr-2"
                  }
                />
                Project
              </li>
            </Link>
            <li className="w-full h-5 flex items-center mb-7">
              <WalletIcon
                className={
                  pathName == "/today"
                    ? "text-cyan-600 h-full mr-2"
                    : "h-full mr-2"
                }
              />
              Payment
            </li>
            <li className="w-full h-5 flex items-center mb-7">
              <ChatBubbleLeftEllipsisIcon
                className={
                  pathName == "/today"
                    ? "text-cyan-600 h-full mr-2"
                    : "h-full mr-2"
                }
              />
              Messege
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LeftsideNav;
