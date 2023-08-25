import Image from "next/image";
import React from "react";

const LandingHeader = () => {
  return (
    <div className=" w-[80%] flex py-6 ">
      <div className="w-[50%] ">
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Decenter ai logo"
            width={250}
            height={200}
          />
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-center">
        <ul className="flex space-x-10">
          <li className="p-2 cursor-pointer hover:bg-gray-500">Home</li>
          <li className="p-2 cursor-pointer hover:bg-gray-500">About Us</li>
          <li className="p-2 cursor-pointer hover:bg-gray-500">Team</li>
          <li className="p-2 cursor-pointer hover:bg-gray-500">Our Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingHeader;
