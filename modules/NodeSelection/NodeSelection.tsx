import ResultsHeader from "./Components/ResultsHeader";

export const NodeSelection = () => {
  return (
    <div className="h-full">
      <ResultsHeader />
      <div className="h-[92%] rounded-lg py-2 px-4">
        <div className="h-[8%] flex ">
          <div className="flex w-[70%] space-x-14 pr-10">
            <div className="text-lg font-semibold">Repair</div>
            <div className="text-lg font-semibold">Cleanup</div>
            <div className="text-lg font-semibold">Rest</div>
            <div className="text-lg font-semibold">Other Actions</div>

            <div className="text-lg font-semibold">All</div>
          </div>
          <div className="w-[30%] font-semibold text-lg text-right">
            Total Nodes:1865
          </div>
        </div>
        <div className="h-[92%]  flex flex-col ">
          <div className="flex h-[8%]  px-2">
            <div className="w-[20%] font-semibold ">Name</div>
            <div className="w-[20%] font-semibold text-center">Data Center</div>
            <div className="w-[20%] font-semibold  text-center">Status</div>
            <div className="w-[20%] font-semibold  text-center">Load</div>
            <div className="w-[20%] font-semibold text-right">Data Size</div>
          </div>
          <div className="h-[92%] overflow-y-auto gap-4 flex flex-col">
            <div className="flex bg-gray-900 px-2 py-3">
              <div className="w-[20%] ">Neural net</div>
              <div className="w-[20%]  text-center">Neural NEtwork</div>
              <div className="w-[20%] text-center  ">Image Classification</div>
              <div className="w-[20%]  text-center text-green-500">0.02%</div>
              <div className="w-[20%]  text-right pr-4">20.7mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
