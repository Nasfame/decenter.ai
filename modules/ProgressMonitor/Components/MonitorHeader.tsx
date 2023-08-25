import { FiFilter } from "react-icons/fi";

const MonitorHeader = () => {
  return (
    <div className="h-[8%] flex border-b w-full px-6">
      <div className="flex h-full w-full gap-4 items-center">
        <small className="text-lg">Select period:</small>
        <div className="text-md border-4 px-3  border-borderGray rounded-lg flex  items-center justify-center  cursor-pointer">
          from July 10 2023
        </div>

        <div className="text-md border-4 px-3  border-borderGray rounded-lg flex  items-center justify-center  cursor-pointer">
          to July 13 2023
        </div>
      </div>
    </div>
  );
};

export default MonitorHeader;
