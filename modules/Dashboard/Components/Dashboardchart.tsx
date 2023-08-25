import Image from "next/image";
import React from "react";

const Dashboardchart = () => {
  return (
    <div className="w-[65%] h-full relative">
      <Image
        src="/chart.png"
        alt="user profile"
        className="rounded-xl"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Dashboardchart;
