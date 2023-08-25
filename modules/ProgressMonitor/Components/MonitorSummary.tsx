import Image from "next/image";
import React from "react";

const MonitorSummary = () => {
  return (
    <div className="bg-gray-900 rounded-xl h-[70%] p-4">
      <div className="  h-[33.3%] flex flex-col justify-center px-4 gap-3">
        <div className="flex gap-2 h-6 items-center">
          <div className="p-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
          <small>Total Nodes</small>
        </div>
        <div className="pl-6 text-5xl font-normal ">267</div>
      </div>
      <div className="  h-[33.3%] flex flex-col justify-center px-4 gap-3">
        <div className="flex gap-2 h-6 items-center">
          <div className="p-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
          <small>Total Training cost</small>
        </div>
        <div className="pl-6 text-5xl font-normal ">$137.06</div>
      </div>
      <div className="  h-[33.3%] flex flex-col justify-center px-4 gap-3">
        <div className="flex gap-2 h-6 items-center">
          <div className="p-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
          <small>Waste Produced</small>
        </div>
        <div className="pl-6 text-5xl font-normal ">26</div>
      </div>
    </div>
  );
};

export default MonitorSummary;
