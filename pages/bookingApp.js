import React from "react";
import Image from "next/image";
import bookingioImg from "../public/assests/booking-io.png";
import { RiRadioButtonFill } from "react-icons/ri";

const BookingApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
        <Image
          src={bookingioImg}
          className=""
          fill="fill"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute px-2 w-full max-w-7xl left-[50%] right-[50%] top-[55%] translate-x-[-50%] text-white z-10">
          <h2 className="py-2 text-slate-50">Booking App</h2>
          <h3 className="text-slate-50">
            MongoDB / Express / ReactJS / NodeJS
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
            It is a home renting and booking web application built using the
            MERN (MongoDB, Express, React, Node.js) stack. This application
            allows users to register, list their places, and book any available
            places listed by other users. I chose the MERN stack for this
            project due to its flexibility, scalability, and popularity among
            developers. Through this project, I gained hands-on experience
            working with different technologies and frameworks, improving my
            understanding of full-stack development.
          </p>
          <a
            href="https://booking-io-ten.vercel.app/"
            target="_blank"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-4"
          >
            Demo
          </a>
          <a
            href="https://github.com/aryanraj60/Booking.io"
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
                <RiRadioButtonFill /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center gap-2">
                <RiRadioButtonFill /> NodeJS
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

export default BookingApp;
