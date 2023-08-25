import { FiFilter } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <div className="h-[8%] flex border-b px-6">
      <div className="w-[50%] flex h-full gap-4 items-center">
        <small className="text-lg">Select period:</small>
        <div className="text-md border-4 px-3  border-borderGray rounded-lg flex  items-center justify-center  cursor-pointer">
          from July 10 2023
        </div>

        <div className="text-md border-4 px-3  border-borderGray rounded-lg flex  items-center justify-center  cursor-pointer">
          to July 13 2023
        </div>
      </div>
      <div className="w-[50%] flex h-full justify-end gap-x-4 items-center">
        | <FiFilter size={25} /> <small>Filter</small>
      </div>
    </div>
  );
};

export default DashboardHeader;
