import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="p-2 py-16 text-center lg:h-screen flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-1 md:text-5xl lg:text-6xl text-gray-00 tracking-wider">
          SKILLS
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-500">
          My Tech Skills
        </p>
        <div className="max-w-2xl my-14 m-auto text-gray-500 flex flex-wrap p-2 justify-center gap-10">
          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/html.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">HTML</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/css.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">CSS</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/reactjs.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">ReactJS</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/nextjs.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">NextJS</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/java.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">JavaScript</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/tailwind.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">Tailwind CSS</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/solidity.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">Solidity</p>
          </div>

          <div className="cursor-pointer w-[130px] hover:scale-110 transition ease-in duration-200">
            <div className="shadow-lg shadow-slate-500 flex items-center justify-center px-3 py-5 w-[90px] m-auto h-[90px] rounded-full bg-[#fff]">
              <img src="/assests/redux.png" className="w-[50px] h-[50px]" />
            </div>
            <p className="p-2">Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
