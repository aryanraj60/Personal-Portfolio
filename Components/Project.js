import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({ name, tech, backgroundImg, url }) => {
  return (
    <div className="relative w-full flex items-center justify-center shadow-xl shadow-gray-400 rouned-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={backgroundImg}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="absolute hidden group-hover:block">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
