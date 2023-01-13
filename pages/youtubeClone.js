import React from "react";
import Image from "next/image";
import tubeImg from "../public/assests/tube.io.png";
import { RiRadioButtonFill } from "react-icons/ri";

const youtubeClone = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          src={tubeImg}
          className=""
          fill="fill"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute px-2 w-full max-w-7xl left-[50%] right-[50%] top-[55%] translate-x-[-50%] text-white z-10">
          <h2 className="py-2 text-slate-50">Youtube Clone</h2>
          <h3 className="text-slate-50">ReactJS / Tailwind / RapidAPI</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 py-12 md:grid md:grid-cols-5 gap-2">
        <div className="col-span-4 py-8 mb-5 md:mb-0">
          <p className="text-2xl text-blue-800 mb-2 uppercase tracking-widest">
            Project
          </p>
          <h2 className="text-3xl tracking-wider">Overview</h2>
          <p className="py-4 text-gray-600 text-lg">
            This YouTube clone was built using React.js and Tailwind CSS,
            providing a sleek and responsive user interface. The app utilizes
            the RapidAPI to fetch data and allows users to search for and watch
            any YouTube video or specific channel. The project allowed me to
            gain experience working with APIs, managing data on the frontend,
            and utilizing Tailwind CSS for a responsive design. Overall, this
            project showcases my ability to create dynamic and user-friendly web
            applications that mimic the functionality of popular platforms.
          </p>
          <a
            href=""
            target="_blank"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-4"
          >
            Demo
          </a>
          <a
            href=""
            target="_blank"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-10 py-2.5 text-center"
          >
            Code
          </a>
        </div>

        <div className="shadow-xl bg-slate-200 shadow-gray-400 rounded-xl px-4 py-8 md:py-4 m-auto">
          <div className="p-2">
            <p className="flex justify-center text-xl font-bold pb-2">
              Technologies
            </p>
            <div className="flex justify-between md:flex-col md">
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> RapidAPI
              </p>
              {/* <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Stripe
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default youtubeClone;
