import React from "react";

const ResultsHeader = () => {
  return (
    <div className="h-[8%] border-b flex px-6">
      <div className="w-[50%] flex h-full gap-4 items-center">
        <p className="text-lg font-bold">Select Node</p>
      </div>
      <div className="w-[50%] flex h-full justify-end gap-x-4 items-center">
        <span className="font-semibold text-ld">Run Node</span>
      </div>
    </div>
  );
};

export default ResultsHeader;
