import React from "react";
import EmployeeDetails from "../../EmployeeDetails";
import RunningProjects from "../../RunningProject";
import RunningProjectShow from "./RunningProjectShow";


function HomePage() {
  console.log(EmployeeDetails);

  return (
    <div className="mt-5">
      <h1 className="flex items-center text-lg text-cyan-800 mb-5">
        {/* <div className="w-2 h-2 rounded-full bg-red-600 mr-5 "></div> */}
        Your Progress Summary
      </h1>
      <div className="flex justify-between">
        {EmployeeDetails.slice(0,2).map((dt, indx) => {
          return (
            <>
              <RunningProjectShow key={indx} id={indx} name={dt.full_name} status={dt.status} totalProject={dt.total_project_done} running_project={dt.running_project} />
              
            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
