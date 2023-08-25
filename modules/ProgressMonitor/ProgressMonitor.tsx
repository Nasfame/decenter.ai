import React from "react";
import MonitorHeader from "./Components/MonitorHeader";
import Cards from "./Components/Cards";
import MonitorChart from "./Components/MonitorChart";
import MonitorSummary from "./Components/MonitorSummary";
import MonitorPie from "./Components/MonitorPie";
import MonitorBubble from "./Components/MonitorBubble";
import MonitorBar from "./Components/MonitorBar";

export const ProgressMonitor = () => {
  return (
    <div className="h-full ">
      <MonitorHeader />
      <div className="flex h-[92%] gap-10 py-6">
        <div className="flex flex-col h-full w-[70%] gap-6">
          <div className="h-[20%] grid grid-cols-3 gap-10 w-full">
            <div className="col-span-1 rounded-lg bg-gray-900 h-full flex flex-col justify-center px-4 gap-3">
              <div className="flex gap-2 h-6 items-center">
                <div className="p-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
                <small>Production Volume</small>
              </div>
              <div className="pl-6 text-3xl font-semibold ">10.41</div>
            </div>
            <div className="col-span-1 rounded-lg bg-gray-900 h-full flex flex-col justify-center px-4 gap-3">
              <div className="flex gap-2 h-6 items-center">
                <div className="p-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
                <small>Learning Rate</small>
              </div>
              <div className="pl-6 text-3xl font-semibold ">10.41</div>
            </div>
            <div className="col-span-1 rounded-lg bg-gray-900 h-full flex flex-col justify-center px-4 gap-3">
              <div className="flex gap-2 h-6 items-center">
                <div className="p-2 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600"></div>
                <small>Total Data Volume</small>
              </div>
              <div className="pl-6 text-3xl font-semibold ">10.41GB</div>
            </div>
          </div>

          <MonitorChart />
          <div className="h-[30%] w-full flex gap-6 justify-between">
            <MonitorPie />
            <MonitorBubble />
          </div>
        </div>
        <div className="flex flex-col gap-6 h-full w-[30%]">
          <MonitorSummary />
          <div className="h-[30%]">
            <MonitorBar />
          </div>
        </div>
      </div>
      {/* <DashboardHeader />
      <Cards />
      <div className="h-[40%] flex  px-6 py-4 gap-x-10">
        <MonitorChart />
        <DashboardUserList />
      </div>

      <div className="h-[32%] flex  px-6 py-4 gap-x-10">
        <div className="h-full w-[65%] flex justify-between">
          <MonitorPie />
          <MonitorBubble />
        </div>

        <div className="h-full w-[35%] flex justify-between">
          <MonitorBar />
        </div>
      </div> */}
    </div>
  );
};
