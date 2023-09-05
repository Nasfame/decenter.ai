import LandingHeader from "@components/LandingHeader";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-auto">
      <div className="absolute inset-0">
        <Image src="/hero.png" alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col  items-center justify-center h-full">
        <LandingHeader />
        <div className="p-40">
          <h1 className="font-bold text-6xl text-center bg-gradient-to-br from-gray-500 via-gray-400 to-white  bg-clip-text text-transparent">
            Decenter AI
          </h1>
          <h3 className="pt-4 bg-gradient-to-br from-gray-500 via-gray-400 to-white  bg-clip-text text-transparent">
            DECENTRALIZED AI MODEL TRAINING INFRASTRUCTURE
          </h3>

          <div className="text-center border-none">
            <Link href="https://decenter.streamlit.app/">
              <button className="font-semibold text-sm rounded-full bg-btnGray text-white py-3 mt-10 px-10">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
