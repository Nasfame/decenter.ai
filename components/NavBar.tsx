import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdModelTraining } from "react-icons/md";
import { PiSelectionAllBold } from "react-icons/pi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import { FiSettings } from "react-icons/fi";

import { setPage } from "app/redux/Features/pageSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-full">
      <div className="flex  h-[8%] gap-x-4 items-center">
        <CgMenuGridR size={35} />
        <Image
          src="/decenter.png"
          alt="Decenter ai logo"
          className="pt-2"
          width={170}
          height={100}
          priority
        />
      </div>

      <div className="h-90% w-full overflow-y-auto">
        <div
          onClick={() => dispatch(setPage({ page: "dashboard" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <LuLayoutDashboard size={25} />
          <div className="font-semibold">Dashboard</div>
        </div>
        <div
          onClick={() => dispatch(setPage({ page: "train_model" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <MdModelTraining size={25} />
          <div className="font-semibold  ">Train Model</div>
        </div>
        <div
          onClick={() => dispatch(setPage({ page: "node_selection" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <PiSelectionAllBold size={25} />
          <div className="font-semibold  ">Node Selection</div>
        </div>
        <div
          onClick={() => dispatch(setPage({ page: "monitor_progress" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <IoSpeedometerOutline size={25} />
          <div className="font-semibold ">Monitor Progress</div>
        </div>
        <div
          onClick={() => dispatch(setPage({ page: "results" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <BsFillClipboardDataFill size={25} />
          <div className="font-semibold ">Results</div>
        </div>
        <div
          onClick={() => dispatch(setPage({ page: "schedule" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <BiCalendar size={25} />
          <div className="font-semibold t">Schedule</div>
        </div>
        <div
          onClick={() => dispatch(setPage({ page: "rewards" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <GoTrophy size={25} />
          <div className="font-semibold ">Rewards</div>
        </div>

        <div
          onClick={() => dispatch(setPage({ page: "settings" }))}
          className="flex h-[50px] gap-x-4 my-4 items-center cursor-pointer text-lg hover:text-2xl"
        >
          <FiSettings size={25} />
          <div className="font-semibold  ">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
