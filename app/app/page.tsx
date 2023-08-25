"use client";
import Header from "@components/Header";
import NavBar from "@components/NavBar";
import { Dashboard } from "@modules/Dashboard";
import { NodeSelection } from "@modules/NodeSelection";
import { ProgressMonitor } from "@modules/ProgressMonitor";
import { Results } from "@modules/Results";
import { TrainModel } from "@modules/TrainModel";
import { RootState } from "app/redux/store";
import type { NextPage } from "next";
import { useSelector } from "react-redux";

const AppBody: NextPage = () => {
  //useSelector gets the state from store
  const { page } = useSelector((state: RootState) => state.page); // Access the counter state

  return (
    <main className="h-screen  bg-black text-white py-6 flex justify-center items-center">
      <section className="w-[80%] h-full  flex">
        <div className="w-[20%] h-full ">
          <NavBar />
        </div>
        <div className="w-[80%] h-full ">
          <Header />
          <section className="h-[92%] w-full">
            {page === "dashboard" && <Dashboard />}
            {page === "train_model" && <TrainModel />}
            {page === "node_selection" && <NodeSelection />}
            {page === "results" && <Results />}
            {page === "monitor_progress" && <ProgressMonitor />}
          </section>
        </div>
      </section>
    </main>
  );
};

export default AppBody;
