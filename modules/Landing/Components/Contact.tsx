import Image from "next/image";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

const Contact = () => {
  return (
    <div className="relative h-auto pt-10 pb-24">
      <div className="absolute inset-0">
        <Image src="/penultimate.png" alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col  py-20  w-[75%] m-auto h-full">
        <div className="flex justify-end">
          <div className="w-[250px] h-auto">
            <h2 className="font-bold text-xl">Sign Up For Early Access</h2>
            <form className="mt-4">
              <div className="h-[50px] mb-6 rounded-full flex">
                <div className="rounded-tl-full rounded-bl-full bg-lightGray flex items-center justify-center text-black  h-full w-[20%]">
                  <FaRegUserCircle size={30} />
                </div>
                <div className="w-[80%] h-full rounded-tr-full rounded-br-full text-white  bg-lightGray opacity-70 relative">
                  <input
                    type="text"
                    placeholder="name"
                    className="h-full w-full rounded-tr-full rounded-br-full bg-transparent outline-none focus:ring-0 text-black absolute top-0 pl-2 right-0"
                  />
                </div>
              </div>
              <div className="h-[50px] mb-6 rounded-full flex">
                <div className="rounded-tl-full rounded-bl-full bg-lightGray flex items-center justify-center text-black  h-full w-[20%]">
                  <MdAlternateEmail size={30} />
                </div>
                <div className="w-[80%] h-full rounded-tr-full rounded-br-full text-white  bg-lightGray opacity-70 relative">
                  <input
                    type="text"
                    placeholder="email"
                    className="h-full w-full rounded-tr-full rounded-br-full bg-transparent outline-none focus:ring-0 text-black  pl-2 absolute top-0 right-0"
                  />
                </div>
              </div>

              <button className="font-semibold text-sm w-full rounded-full bg-btnGray text-white py-3">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <h2 className="font-semibold text-2xl mt-32 text-center ">
          Meet The Team
        </h2>
        <small className="text-center block m-auto mt-4 max-w-[500px] mb-20">
          DecenterAI model marketplace is a platform where users can buy, sell,
          or access pre-trained AI models. It provides a space
        </small>

        <div className="w-full flex gap-20 h-[400px]  mt-16">
          <div className="w-[20%] h-full  text-lightGray text-center">
            <div className="h-[50%] relative">
              <Image
                src="/hiro.png"
                alt="user profile"
                className="rounded-xl"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10%] text-md font-semibold pt-3">
              HIRO HAMADA
            </div>
            <div className="h-[10%] text-center text-md">Core Contributor</div>
            <div className="h-[20%] text-center text-sm">
              Product Engineer
              <br />
              at AIChats
            </div>
            <div className="h-[10%] flex justify-center space-x-6">
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <TfiLinkedin size={20} />
              </div>
              <div className="  rounded-full flex items-center justify-center  text-lightGray ">
                <VscGithub size={35} className="rounded-full" />
              </div>
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <MdEmail size={20} />
              </div>
            </div>
          </div>

          <div className="w-[20%] h-full  text-lightGray text-center">
            <div className="h-[50%] relative ">
              <Image
                src="/william.png"
                alt="user profile"
                className="rounded-xl"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10%] text-md font-semibold pt-3">
              CHUKWUNONSO IKEJI
            </div>
            <div className="h-[10%] text-center text-md">Core Contributor</div>
            <div className="h-[20%] text-center text-sm">
              Senior software Developer
              <br />
              at AIChats
            </div>
            <div className="h-[10%] flex justify-center space-x-6">
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <TfiLinkedin size={20} />
              </div>
              <div className="  rounded-full flex items-center justify-center  text-lightGray ">
                <VscGithub size={35} className="rounded-full" />
              </div>
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <MdEmail size={20} />
              </div>
            </div>
          </div>
          <div className="w-[20%] h-full  text-lightGray text-center">
            <div className="h-[50%] relative">
              <Image
                src="/glory.png"
                alt="user profile"
                className="rounded-xl"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10%] text-md font-semibold pt-3">
              GLORY LUCAS
            </div>
            <div className="h-[10%] text-center text-md">Core Contributor</div>
            <div className="h-[20%] text-center text-sm">
              Founder at Mindspace
              <br />
              Solutions
            </div>
            <div className="h-[10%] flex justify-center space-x-6">
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <TfiLinkedin size={20} />
              </div>
              <div className="  rounded-full flex items-center justify-center  text-lightGray ">
                <VscGithub size={35} className="rounded-full" />
              </div>
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <MdEmail size={20} />
              </div>
            </div>
          </div>
          <div className="w-[20%] h-full  text-lightGray text-center">
            <div className="h-[50%] relative">
              <Image
                src="/victor.png"
                alt="user profile"
                className="rounded-xl"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10%] text-md font-semibold pt-3">
              VICTOR KAYCEE
            </div>
            <div className="h-[10%] text-center text-md">Core Contributor</div>
            <div className="h-[20%] text-center text-sm">
              Founder at
              <br />
              SureCrypto
            </div>
            <div className="h-[10%] flex justify-center space-x-6">
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <TfiLinkedin size={20} />
              </div>
              <div className="  rounded-full flex items-center justify-center  text-lightGray ">
                <VscGithub size={35} className="rounded-full" />
              </div>
              <div className="bg-lightGray rounded-full flex items-center justify-center p-2 text-black px-2.5">
                <MdEmail size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
