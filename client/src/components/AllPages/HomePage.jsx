import React, { useEffect, useState } from "react";
import EmployeeDetails from "../../EmployeeDetails";
import RunningProjects from "../../RunningProject";
import RunningProjectShow from "./RunningProjectShow";
import {
  WalletIcon
} from "@heroicons/react/24/outline";

import TaskShowingBar from "./TaskShowingBar";
import { useLocation, useNavigate } from "react-router-dom";


function HomePage() {

  return (
    <div className="mt-5 pr-5">
      <h1 className="flex items-center text-lg text-cyan-800 mb-5">
        {/* <div className="w-2 h-2 rounded-full bg-red-600 mr-5 "></div> */}
        Your Progress Summary
      </h1>
      <div className="flex justify-between">
        <div className="flex justify-between w-2/4">
          {EmployeeDetails.slice(0, 2).map((dt, indx) => {
            return (
              <>
                <RunningProjectShow key={indx} id={indx} name={dt.full_name} status={dt.status} totalProject={dt.total_project_done} running_project={dt.running_project} />
              </>
            );
          })}
        </div>
        <div className="w-2/4 ml-5 ">
          <div className="bg-white p-8 rounded-lg h-full w-full ">
            <div className="flex text-cyan-900 font-semibold items-center">
              <WalletIcon className="h-5 mr-3  " />
              Payment Profile </div>
            <div className="flex justify-between h-2/3 w-full mt-10 text-white">
              <div className="bg-gray-900 h-full w-1/3 p-5 rounded text-center">
                <div>
                  Total Income
                </div>
                <div className="text-2xl mt-5">80 T</div>
              </div>
              <div className="bg-green-900 h-full w-1/3 mx-5 p-5 rounded text-center">
                <div>
                  Total Income
                </div>
                <div className="text-2xl mt-5">800090 T</div>
              </div>
              <div className="bg-cyan-900 h-full w-1/3 p-5 rounded text-center">
                <div>
                  In Account
                </div>
                <div className="text-2xl mt-5">80 T</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border bg-slate-300 mt-10 h-64 mr-10 rounded-lg px-10 py-5 overflow-y-scroll">
        <div className="w-full h-full">
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
          <TaskShowingBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
