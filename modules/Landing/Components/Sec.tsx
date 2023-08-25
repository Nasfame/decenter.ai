import Image from "next/image";
import React from "react";

const Sec = () => {
  return (
    <div className="relative h-auto">
      <div className="absolute inset-0">
        <Image src="/sec.png" alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col gap-20 py-20  w-[75%] m-auto h-full">
        <div className="flex flex-col items-end ">
          <div className="strokeText text-3xl font-bold tracking-widest flex justify-start  w-[60%]">
            Decentralize and Democratized
          </div>
          <div className="text-white text-4xl font-bold tracking-widest  w-[60%]">
            Scalable AI Training Infrastructure
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="strokeText text-3xl font-bold tracking-widest flex justify-start  w-[60%]">
            Platform-as-a-Service for Fast,
          </div>
          <div className="text-white text-4xl font-bold tracking-widest  w-[60%]">
            Reliable and Affordable AI Model Training
          </div>
        </div>

        <div className="flex flex-col items-end ">
          <div className="strokeText text-3xl font-bold tracking-widest flex justify-start  w-[60%]">
            Enjoy Massive Rewards and Incentives
          </div>
          <div className="text-white text-4xl font-bold tracking-widest  w-[60%]">
            for Collaborating to Build AI Models
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec;
