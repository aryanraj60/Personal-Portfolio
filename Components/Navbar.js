import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [onProjectPage, setOnProjectPage] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    console.log("I'm useffect to change nav bg");
    if (
      pathname === "/ecommerce" ||
      pathname === "/youtubeClone" ||
      pathname === "/musicPlayer" ||
      pathname === "/primeClone" ||
      pathname === "/linkedinClone"
    ) {
      setOnProjectPage(true);
    } else {
      setOnProjectPage(false);
    }
  }, [pathname]);

  console.log("Navbar Rendered!");
  return (
    <nav
      className={`${shadow && "shadow-xl"} ${
        onProjectPage
          ? "bg-transparent text-slate-100"
          : "bg-[#ecf0f3] text-gray-700"
      } fixed w-full z-50`}
    >
      <div className={`flex justify-between items-center px-2 2xl:px-16`}>
        <Link href="/">
          <h3 className="py-4 md:py-5 text-xl md:text-2xl font-medium uppercase tracking-wider">
            Aryan
          </h3>
        </Link>

        <div>
          <ul className="hidden md:flex text-sm">
            <Link href="/">
              <li className="ml-10 uppercase hover:text-blue-800">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 uppercase hover:text-blue-800">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 uppercase hover:text-blue-800">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 uppercase hover:text-blue-800">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 uppercase hover:text-blue-800">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="Menu md:hidden">
          <AiOutlineMenu size={25} onClick={() => setToggle(true)} />
        </div>
      </div>

      {toggle && (
        <div className="w-full md:hidden fixed left-0 top-0 h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] text-gray-800 h-screen p-10 ease-in duration-500">
            <div>
              <div className="flex justify-between items-center">
                <Link href="/">
                  <h3 className="py-4 text-xl font-medium uppercase tracking-wider">
                    Aryan
                  </h3>
                </Link>

                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2">
                  <AiOutlineClose size={25} onClick={() => setToggle(false)} />
                </div>
              </div>
              <div className="my-4 border-b border-gray-300">
                <p className="py-4">Let's build something great together!</p>
              </div>
            </div>
            <div className="py-4">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-lg">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-lg">About</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-lg">Skills</li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-lg">Projects</li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-lg">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
