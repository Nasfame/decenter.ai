import Image from "next/image";
import React from "react";

const DashBarChart = () => {
  return (
    <div className="w-[48%] h-full relative">
      <Image
        src="/bar.png"
        alt="user profile"
        className="rounded-xl"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default DashBarChart;
