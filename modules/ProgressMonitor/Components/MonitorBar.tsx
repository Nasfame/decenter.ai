import Image from "next/image";

const MonitorBar = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/summary.png"
        alt="user profile"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default MonitorBar;
