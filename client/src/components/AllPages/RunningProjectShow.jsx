import React from "react";
import {
  ClipboardDocumentIcon,
  QueueListIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

function RunningProjectShow({
  id,
  status,
  name,
  totalProject,
  running_project,
}) {
  return (
    <>
      <div className="bg-white w-2/4 p-8 rounded-md">
        <h1 className="flex items-center font-semibold text-cyan-900">
          <span
            className={
              status == true ? "text-emerald-500 mr-3" : "text-red-500 mr-3"
            }
          >
            <ClipboardDocumentIcon className="w-7" />
          </span>
          Your Progress Report
        </h1>
        <div className="flex">
          <div className="flex mt-5  h-full">
            <div className="bg-slate-800 p-5 w-40 rounded-lg mr-10">
              <div className="w-full flex justify-center items-center">
                <div className="border border-slate-100 flex justify-center items-center rounded-full w-14 h-14 p-2">
                  <QueueListIcon className="w-8 text-slate-100" />
                </div>
              </div>

              <div className="text-slate-100 text-lg text-center">Projects</div>
              <div className="text-2xl text-slate-100 text-center">
                {totalProject}
              </div>
            </div>
            <div className="bg-slate-800 p-5 w-40 rounded-lg">
              <div className="w-full flex justify-center items-center mb-5">
                <div className="border border-slate-100 flex justify-center items-center rounded-full w-14 h-14 p-2">
                  <AdjustmentsVerticalIcon className="w-8 text-slate-100" />
                </div>
              </div>

              <div className="text-slate-100 text-sm text-center">
                Current Project
              </div>
              <div className="text-sm text-slate-100 text-center">
                {running_project}
              </div>
            </div>
          </div>

          <div className="ml-10 pl-10 border-l border-slate-700">
            Current Project Group Members
          </div>
        </div>
        {/* <div className="w-full h-auto flex justify-center">
          <i class="fa-solid fa-shop text-6xl text-slate-400"></i>
        </div>
        <div>Project Name : {name}</div>
        <div>Project Category : {category}</div>
        <div>Working : {employe[0]}</div> */}
      </div>
    </>
  );
}

export default RunningProjectShow;
