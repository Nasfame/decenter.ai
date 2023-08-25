import Image from "next/image";
import { GoProjectTemplate } from "react-icons/go";
import { BiBot, BiBell, BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-end h-[8%] gap-x-10 items-center  border-b">
      <h3 className="font-semibold text-md">Hello Jeniffer</h3>
      <div className="border-4 border-white rounded-full max-w-[30%] h-[40px] relative pl-8">
        <BiSearchAlt
          size={25}
          className="font-semibold absolute top-1 left-2"
        />
        <input
          type="text"
          placeholder="search..."
          className="w-full h-full rounded-full cursor-pointer focus:ring-0 focus:border-none bg-transparent px-2  outline-none"
        />
      </div>

      <div>
        <BiBell size={25} className="cursor-pointer" />
      </div>
      <div className="text-md border-4 px-3 py-2 border-borderGray rounded-lg flex  items-center justify-center gap-4 cursor-pointer">
        <BiBot size={25} />
        New Automation
      </div>
      <div className="text-md border-4 px-3 py-2 border-borderGray rounded-lg flex items-center justify-center gap-4 cursor-pointer">
        <GoProjectTemplate size={25} />
        New Template
      </div>

      <Image
        src="/profile.png"
        alt="user profile"
        className="rounded-md"
        width={50}
        height={50}
        priority
      />
    </div>
  );
};

export default Header;
