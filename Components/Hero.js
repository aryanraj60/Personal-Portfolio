import React from "react";
import { IoMdHand } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="h-screen font-poppins">
      <div className="h-full hidden md:flex items-center justify-center p-2">
        <div className="max-w-7xl p-2 md:grid md:grid-cols-6 gap-4 overflow-hidden lg:gap-12">
          <div className="col-span-1 flex flex-col items-center gap-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn size={18} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <FiGithub size={18} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={18} />
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-2">
              <h2 className="md:text-4xl lg:text-5xl xl:text-6xl tracking-widest">
                Aryan Rajput
              </h2>
              <IoMdHand
                style={{ color: "#ffde34" }}
                size="4rem"
                className="hover:rotate-[35deg] transition ease-in duration-300"
              />
            </div>
            <div className="flex items-center gap-2 py-3">
              <div className="h-1 bg-[#5651e5] w-[20%]"></div>
              <p className="text-xl text-[#5651e5]">Frontend Developer</p>
            </div>
            <p className="max-w-2xl text-lg text-gray-600">
              I'm a frontend web developer with a passion for crafting visually
              stunning and intuitive websites. Skilled in building both
              traditional web2 and cutting-edge web3 applications.
            </p>

            <button className="px-6 mt-10 py-4 flex items-center gap-2 text-white font-medium tracking-wide bg-gray-800 rounded-xl hover:scale-110 transition ease-in-out duration-200">
              Say Hello <RiSendPlaneFill size="1.2rem" />
            </button>
          </div>
          <div
            className="col-span-2 w-[350px] h-[350px] bg-[url('/assests/aryanRaj.jpg')] bg-contain"
            style={{ borderRadius: "27% 73% 34% 66% / 53% 37% 63% 47%" }}
          ></div>
        </div>
      </div>

      <div className="h-full md:hidden">
        <div className="h-[60vh] flex items-center justify-center">
          <div className="w-full grid grid-cols-3 gap-5 px-5">
            <div className="flex flex-col justify-between items-start">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={18} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FiGithub size={18} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={18} />
              </div>
            </div>
            <div
              className="col-span-2 w-[250px] h-[250px] bg-[url('/assests/aryanRaj.jpg')] bg-contain"
              style={{ borderRadius: "27% 73% 34% 66% / 53% 37% 63% 47%" }}
            ></div>
          </div>
        </div>
        <div className="px-5 -mt-10">
          <div className="flex items-center gap-2">
            <h2 className="text-4xl text-gray-800 tracking-wider">
              Aryan Rajput
            </h2>
            <IoMdHand style={{ color: "#ffde34" }} size="3rem" />
          </div>
          <div className="flex items-center gap-2 py-3">
            <div className="h-1 bg-[#5651e5] w-[15%]"></div>
            <p className="text-base text-[#5651e5]">Frontend Developer</p>
          </div>
          <p className="text-base text-gray-600">
            I'm a frontend web developer with a passion for crafting visually
            stunning and intuitive websites. Skilled in building both
            traditional web2 and cutting-edge web3 applications.
          </p>
          <button className="px-6 mt-10 py-4 flex items-center gap-2 text-white font-medium tracking-wide bg-gray-800 rounded-xl hover:scale-110 transition ease-in-out duration-200">
            Say Hello <RiSendPlaneFill size="1.2rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
