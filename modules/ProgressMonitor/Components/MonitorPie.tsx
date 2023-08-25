import Image from "next/image";
import React from "react";

const MonitorPiechart = () => {
  return (
    <div className="w-[60%] h-full relative rounded-xl">
      <Image
        src="/monitorpie.png"
        alt="user profile"
        fill={true}
        className="rounded-xl"
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

export default MonitorPiechart;
