import NodeSelectionHeader from "./Components/NodeSelectionHeader";

export const Results = () => {
  return (
    <div className="h-full">
      <NodeSelectionHeader />
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
          <div className="flex h-[8%] px-2">
            <div className="w-[25%] font-semibold ">Model Name</div>
            <div className="w-[25%] font-semibold text-center">Model Type</div>
            <div className="w-[25%] font-semibold  text-center">Category</div>
            <div className="w-[25%] font-semibold text-right">Model Size</div>
          </div>
          <div className="h-[92%] overflow-y-auto gap-4 flex flex-col">
            <div className="flex  bg-gray-900 px-2 py-3">
              <div className="w-[25%] ">Neural net</div>
              <div className="w-[25%]  text-center">Neural Network</div>
              <div className="w-[25%] text-center  ">Image Classification</div>
              <div className="w-[25%]  text-right pr-4">20.7mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
