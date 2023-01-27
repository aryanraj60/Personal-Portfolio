import React from "react";
import Link from "next/link";
import Project from "./Project";
import ecommerceProjectImg from "../public/assests/ecommerceProject.png";
import youtubeClone from "../public/assests/tube.io.png";
import musicPlayer from "../public/assests/MusicPlayer.png";
import primeImg from "../public/assests/prime-clone.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-xl py-1 tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-1 mb-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Project
            name="Ecommerce Store"
            tech="NextJS"
            backgroundImg={ecommerceProjectImg}
            url="/ecommerce"
          />
          <Project
            name="Youtube Clone"
            tech="ReactJS"
            backgroundImg={youtubeClone}
            url="/youtubeClone"
          />
          <Project
            name="Music Player"
            tech="ReactJS"
            backgroundImg={musicPlayer}
            url="/musicPlayer"
          />
          <Project
            name="Amazon Prime Clone"
            tech="ReactJS"
            backgroundImg={primeImg}
            url="/primeClone"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
