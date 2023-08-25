import Image from "next/image";
import React from "react";

const DashPiechart = () => {
  return (
    <div className="w-[48%] h-full relative">
      <Image
        src="/pie.png"
        alt="user profile"
        fill={true}
        className="rounded-xl"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default DashPiechart;
