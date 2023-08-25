import { MdModelTraining } from "react-icons/md";
import { TbChartHistogram } from "react-icons/tb";
import { FaClipboardList, FaRegUserCircle } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="h-[20%] flex  px-6 py-4 space-x-4">
      <div className="h-full w-[25%] bg-cardBg flex flex-col space-y-3 rounded-lg p-2">
        <MdModelTraining size={35} />
        <small>Model training progress</small>
        <p className="text-lg font-semibold">32.2975%</p>
      </div>
      <div className="h-full w-[25%] bg-cardBg flex flex-col space-y-3 rounded-lg p-2">
        <TbChartHistogram size={35} />
        <small>Model Success Rate</small>
        <p className="text-lg font-semibold">36%</p>
      </div>
      <div className="h-full w-[25%] bg-cardBg flex flex-col space-y-3 rounded-lg p-2">
        <MdModelTraining size={35} />
        <small>Number of Contributors</small>
        <p className="text-lg font-semibold">29</p>
      </div>
      <div className="h-full w-[25%] bg-cardBg flex flex-col space-y-3 rounded-lg p-2">
        <FaRegUserCircle size={35} />
        <small>Number of Completed Tasks</small>
        <p className="text-lg font-semibold">26</p>
      </div>
    </div>
  );
};

export default Cards;
