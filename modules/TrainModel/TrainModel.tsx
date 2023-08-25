import React from "react";
import TrainModelHeader from "./Components/TrainModelHeader";
import { RiDeleteBin7Line } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

export const TrainModel = () => {
  return (
    <div className="h-full">
      <TrainModelHeader />
      <div className="h-[92%] bg-gray-600 rounded-lg py-2 px-4">
        <div className="h-[8%] flex ">
          <div className="flex w-[80%] space-x-14 pr-10">
            <div className="text-lg font-semibold">New Files</div>
            <div className="text-lg font-semibold">Files History</div>
            <div className="text-lg font-semibold">PDF</div>
            <div className="text-lg font-semibold">Encrypted</div>
            <div className="text-lg font-semibold">Setup Files</div>
            <div className="text-lg font-semibold">All</div>
          </div>
          <div className="w-[20%] font-semibold text-lg">
            Total File Size: 75.3mb
          </div>
        </div>
        <div className="h-[92%] overflow-y-auto flex flex-col gap-4">
          <div className="bg-black h-[60px] rounded-md flex items-center px-3">
            <div className="w-[85%] h-full flex items-center space-x-6">
              <RiDeleteBin7Line size={30} />
              <SlOptionsVertical size={30} />
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-semibold">
                  Annual_report_of_animal_science_PDF
                </span>
                <small className="font-light">File size: 287mb</small>
              </div>
            </div>
            <div className="w-[15%] h-full flex items-center">
              <button className="bg-gray-700 rounded-md px-4 py-1">
                Upload file
              </button>
            </div>
          </div>
          <div className="bg-black h-[60px] rounded-md flex items-center px-3">
            <div className="w-[85%] h-full flex items-center space-x-6">
              <RiDeleteBin7Line size={30} />
              <SlOptionsVertical size={30} />
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-semibold">
                  Annual_report_of_animal_science_PDF
                </span>
                <small className="font-light">File size: 287mb</small>
              </div>
            </div>
            <div className="w-[15%] h-full flex items-center">
              <button className="bg-gray-700 rounded-md px-4 py-1">
                Upload file
              </button>
            </div>
          </div>
          <div className="bg-black h-[60px] rounded-md flex items-center px-3">
            <div className="w-[85%] h-full flex items-center space-x-6">
              <RiDeleteBin7Line size={30} />
              <SlOptionsVertical size={30} />
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-semibold">
                  Annual_report_of_animal_science_PDF
                </span>
                <small className="font-light">File size: 287mb</small>
              </div>
            </div>
            <div className="w-[15%] h-full flex items-center">
              <button className="bg-gray-700 rounded-md px-4 py-1">
                Upload file
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
