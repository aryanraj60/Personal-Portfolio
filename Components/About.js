import React from "react";
import Image from "next/image";
import { CgFileDocument } from "react-icons/cg";

const About = () => {
  return (
    <>
      <div id="about" className="px-4 py-16 lg:h-screen md:flex items-center">
        <div className="hidden max-w-7xl m-auto md:flex">
          <div className="w-3/4 pr-5">
            <h2 className="py-4 text-[#5651e5]">About Me</h2>
            <p className="py-2 text-lg lg:text-xl lg:leading-9 leading-8 text-gray-600">
              I'm a skilled frontend web developer with experience in building
              both traditional web2 and cutting-edge web3 applications. I began
              my journey in the field as a blockchain developer, but eventually
              found my passion in creating intuitive and visually appealing user
              interfaces. With a year of experience under my belt, I am
              dedicated to staying current with the latest technologies and
              trends in web development to deliver high-quality projects to my
              clients.
            </p>
            {/* <p className="py-2 text-gray-600">
              // Lorem tempor quis sit pariatur quis elit ea anim ad sint ea //
              consectetur irure veniam. Adipisicing dolore exercitation deserunt
              // ullamco quis. Officia eu dolor ex aliqua exercitation mollit
              irure // duis ipsum nisi. Aliquip quis consectetur reprehenderit
              cupidatat // pariatur ea tempor eiusmod officia tempor aliqua ad
              aliquip. // Excepteur do magna minim dolore irure reprehenderit
              ullamco // exercitation eiusmod amet ut do consectetur in. Irure
              enim irure
            </p> */}
            <button
              type="button"
              className="text-white mt-5 flex items-center gap-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-3 text-center hover:scale-105 transition ease-in-out duration-200"
            >
              <span> Download Resume</span>
              <span>
                <CgFileDocument size={20} />
              </span>
            </button>
          </div>
          <div className="shadow-xl m-auto w-1/4 shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300 ">
            <img className="rounded-xl " src="/assests/aryanRaj.jpg" />
          </div>
        </div>

        <div className="p-2 md:hidden">
          <div className="text-center">
            <h2 className="text-4xl mb-1 text-gray-700">About Me</h2>
            <p className="text-lg mt-2 font-medium text-gray-500">
              My Introduction
            </p>
            <div className="p-4 my-14 w-72 m-auto shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
              <img
                className="rounded-xl"
                src="/assests/aryanRaj.jpg"
                alt="aryan raj"
              />
            </div>
            <p className="p-2 text-start max-w-lg text-lg leading-8 text-gray-600 m-auto">
              I'm a skilled frontend web developer with experience in building
              both traditional web2 and cutting-edge web3 applications. I began
              my journey in the field as a blockchain developer, but eventually
              found my passion in creating intuitive and visually appealing user
              interfaces. With a year of experience under my belt, I'm dedicated
              to staying current with the latest technologies and trends in web
              development to deliver high-quality projects to my clients.
            </p>
            <button
              type="button"
              className="text-white m-auto mt-5 flex items-center gap-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-base px-5 py-3.5 text-center hover:scale-105 transition ease-in-out duration-200"
            >
              <span>Download Resume</span>
              <span>
                <CgFileDocument size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
