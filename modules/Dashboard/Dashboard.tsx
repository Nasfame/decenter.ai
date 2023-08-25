import React from "react";
import DashboardHeader from "./Components/DashboardHeader";
import Cards from "./Components/Cards";
import Dashboardchart from "./Components/Dashboardchart";
import DashboardUserList from "./Components/DashboardUserList";
import DashPiechart from "./Components/DashPiechart";
import DashBarChart from "./Components/DashBarChart";
import Dashsummary from "./Components/Dashsummary";

export const Dashboard = () => {
  return (
    <div className="h-full">
      <DashboardHeader />
      <Cards />
      <div className="h-[40%] flex  px-6 py-4 gap-x-10">
        <Dashboardchart />
        <DashboardUserList />
      </div>

      <div className="h-[32%] flex  px-6 py-4 gap-x-10">
        <div className="h-full w-[65%] flex justify-between">
          <DashPiechart />
          <DashBarChart />
        </div>

        <div className="h-full w-[35%] flex justify-between">
          <Dashsummary />
        </div>
      </div>
    </div>
  );
};
