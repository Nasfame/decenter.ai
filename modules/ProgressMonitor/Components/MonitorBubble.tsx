import Image from "next/image";
import React from "react";

const MonitorBubble = () => {
  return (
    <div className="w-[40%] h-full relative rounded-xl">
      <Image
        src="/bar.png"
        alt="user profile"
        fill={true}
        className="rounded-xl"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default MonitorBubble;
