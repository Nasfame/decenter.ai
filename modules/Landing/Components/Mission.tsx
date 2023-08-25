import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="relative h-auto">
      <div className="absolute inset-0">
        <Image src="/midsection.png" alt="background image" fill />
      </div>
      <div className="relative z-10 flex flex-col gap-20 py-20  w-[75%] m-auto h-full">
        <h3 className="text-center font-bold text-2xl">
          Maximize AI Model Training with Decenter
        </h3>
        <div className=" w-[80%] m-auto flex gap-10">
          <div className="w-[50%]  h-[150px] ">
            <div className=" h-[50%] flex items-end pl-6">
              <Image
                src="/lock.png"
                alt="background image"
                width={80}
                height={80}
              />

              <h2 className="font-bold text-2xl pb-2 pl-2">
                Protect Your Data
              </h2>
            </div>
            <div className="h-[50%] text-center">
              <small>
                Ensure data privacy and prevent unauthorized access with our
                decentralized setup, minimizing the risk of data leaks during AI
                model training.
              </small>
            </div>
          </div>

          <div className="w-[50%]  h-[150px] ">
            <div className=" h-[50%] flex items-end pl-6">
              <Image
                src="/rocket.png"
                alt="background image"
                width={60}
                height={60}
              />

              <h2 className="font-bold text-2xl pb-2 pl-2">
                Effortless Deployment
              </h2>
            </div>
            <div className="h-[50%] text-center">
              <small>
                Seamlessly deploy AI models using our user-friendly interface,
                eliminating technical barriers and making AI accessible to
                everyone.
              </small>
            </div>
          </div>
        </div>
        <div className=" w-[80%] m-auto flex gap-10">
          <div className="w-[50%]  h-[150px] ">
            <div className=" h-[50%] flex items-end pl-6">
              <Image
                src="/speedometer.png"
                alt="background image"
                width={80}
                height={80}
              />

              <h2 className="font-bold text-2xl pb-2 pl-2">
                Tailored Efficiency
              </h2>
            </div>
            <div className="h-[50%] text-center">
              <small>
                Optimize AI model training efficiency by customizing
                computational resources according to your project's needs,
                whether it's simple or complex.
              </small>
            </div>
          </div>

          <div className="w-[50%]  h-[150px] ">
            <div className=" h-[50%] flex items-end pl-6">
              <Image
                src="/gear.png"
                alt="background image"
                width={60}
                height={60}
              />

              <h2 className="font-bold text-2xl pb-2 pl-2">
                Smart Resource Management
              </h2>
            </div>
            <div className="h-[50%] text-center">
              <small>
                Boost productivity by automating AI model training at optimal
                times, making the most of resources and enhancing overall
                efficiency.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
