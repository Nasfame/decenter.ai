import { FiFilter, FiUpload } from "react-icons/fi";

const TrainModelHeader = () => {
  return (
    <div className="h-[8%] flex px-6">
      <div className="w-[50%] flex h-full gap-4 items-center">
        <p className="text-lg font-bold">New Models</p>
      </div>
      <div className="w-[50%] flex h-full justify-end gap-x-4 items-center">
        <div className="text-md border-4 px-3 py-2 border-borderGray rounded-lg flex space-x-4 items-center justify-center  cursor-pointer">
          <FiUpload size={30} />
          <span className="font-semibold text-ld">Upload All Files</span>
        </div>
      </div>
    </div>
  );
};

export default TrainModelHeader;
