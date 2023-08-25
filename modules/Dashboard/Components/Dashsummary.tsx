import Image from "next/image";

const Dashsummary = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/summary.png"
        alt="user profile"
        className="rounded-xl"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Dashsummary;
