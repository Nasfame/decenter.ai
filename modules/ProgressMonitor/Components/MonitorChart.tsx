import Image from "next/image";
import React from "react";

const MonitorChart = () => {
  return (
    <div className="h-[50%] w-full relative rounded-xl">
      <Image
        src="/monitorchart.png"
        alt="user profile"
        fill={true}
        className="rounded-xl"
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

export default MonitorChart;
