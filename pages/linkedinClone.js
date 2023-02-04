import React from "react";
import Image from "next/image";
import linkedInImg from "../public/assests/linked-in-clone.png";
import { RiRadioButtonFill } from "react-icons/ri";

const linkedinClone = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          src={linkedInImg}
          className=""
          fill="fill"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute px-2 w-full max-w-7xl left-[50%] right-[50%] top-[55%] translate-x-[-50%] text-white z-10">
          <h2 className="py-2 text-slate-50">LinkedIn Clone</h2>
          <h3 className="text-slate-50">
            ReactJS / Firebase / Redux / Tailwind
          </h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 py-12 md:grid md:grid-cols-5 gap-2">
        <div className="col-span-4 py-8 mb-5 md:mb-0">
          <p className="text-2xl text-blue-800 mb-2 uppercase tracking-widest">
            Project
          </p>
          <h2 className="text-3xl tracking-wider">Overview</h2>
          <p className="py-4 text-gray-600 text-lg">
            It's a LinkedIn clone built using Firebase Auth for authentication,
            Firestore of Firebase for storing user posts, Redux for state
            management, and Tailwind for styling. Firebase Auth provides
            authentication services, Firebase Firestore offers real-time
            database functionality, TailwindCSS provides quick styling for the
            UI, and Redux is used for managing the application's state.
          </p>
          <a
            href="https://linkedin-clone-a8efd.web.app/"
            target="_blank"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-4"
          >
            Demo
          </a>
          <a
            href="https://github.com/aryanraj60/LinkedIn-Clone"
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
            <div className="flex flex-wrap justify-between md:flex-col md">
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Firebase Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Firebase Firestore
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default linkedinClone;
