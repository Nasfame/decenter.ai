import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative h-auto">
      <div className="absolute inset-0">
        <Image src="/footer.png" alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex gap-20 py-20  w-[50%] min-w-[300px] m-auto h-full">
        <div className="w-[70%] text-lightGray">
          <h3 className="font-semibold text-3xl underline ">Connect With Us</h3>
          <div className="flex text-md  py-4 space-x-3">
            <div className="underline">Litepaper</div>
            <div className="underline">Calendly</div>
            <div className="underline">Email</div>
          </div>
          <div className="underline text-lg">Company</div>
          <div className="text-md py-2">
            {" "}
            SURECRYPTO PTY LTD, NSW, AUSTRALIA
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-4">
          <div className="underline">Home</div>
          <div className="underline">About Us</div>
          <div className="underline">Team</div>
          <div className="underline">Our Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
