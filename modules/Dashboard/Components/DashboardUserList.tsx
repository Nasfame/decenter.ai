import Image from "next/image";
import React from "react";

const DashboardUserList = () => {
  return (
    <div className="w-[35%] h-full relative">
      <Image
        src="/users.png"
        alt="user profile"
        className="rounded-xl"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default DashboardUserList;
