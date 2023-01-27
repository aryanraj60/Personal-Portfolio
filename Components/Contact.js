import React from "react";
import { BiMailSend } from "react-icons/bi";
import { BsArrowRightShort, BsWhatsapp } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-16">
      <div className="max-w-7xl m-auto text-center px-2">
        <h2 className="text-3xl md:text-5xl">Contact Me</h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mt-2">
          Get In Touch
        </p>

        <div className="md:grid md:grid-cols-2 mt-20 px-5">
          <div className="">
            <h3 className="text-2xl text-gray-700">Talk To Me</h3>
            <div className="card-container mt-5">
              <div className="card w-full md:w-[60%] m-auto py-2 px-3 bg-white rounded-xl shadow-lg shadow-gray-300">
                <BiMailSend className="m-auto" size="2rem" />
                <p className="text-gray-800 text-xl font-bold my-1">Email</p>
                <a
                  href="mailto:aryanraj234.ar@gmail.com"
                  className="text-gray-600 text-lg mt-4 inline-block cursor-pointer hover:scale-105 transition ease-in"
                >
                  <p className="inline">Write Me</p>
                  <span className="inline">
                    <BsArrowRightShort className="inline" size="1.6rem" />
                  </span>
                </a>
              </div>

              <div className="card w-full md:w-[60%] m-auto py-2 px-3 my-4 bg-white rounded-xl shadow-lg shadow-gray-300">
                <BsWhatsapp className="m-auto" size="1.7rem" />
                <p className="text-gray-800 text-xl font-bold my-1">Whatsapp</p>
                <a
                  href="https://api.whatsapp.com/send?phone=918094096657"
                  target="_blank"
                  className="text-gray-600 text-lg mt-4 inline-block cursor-pointer hover:scale-105 transition ease-in"
                >
                  <p className="inline">Write Me</p>
                  <span className="inline">
                    <BsArrowRightShort className="inline" size="1.4rem" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact_content mt-20 md:mt-0">
            <h3 className="text-2xl text-gray-700">Write me your project</h3>
            <div className="w-full md:w-[90%] m-auto mt-5">
              <form action="https://formspree.io/f/mayzygve" method="POST">
                <div className="mb-6">
                  <label
                    for="base-input"
                    className="block mb-2 text-start text-base font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    name="name"
                    id="base-input"
                    placeholder="Keanu Revees"
                    className="bg-[#ecf0f3] font-medium text-base border-2 border-gray-400 text-gray-500 rounded-lg block w-full p-3.5"
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="base-input"
                    className="block mb-2 text-start text-base font-medium text-gray-600"
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="off"
                    name="email"
                    id="base-input"
                    placeholder="Insert your mail"
                    className="bg-[#ecf0f3] font-medium text-base border-2 border-gray-400 text-gray-500 rounded-lg block w-full p-3.5"
                  />
                </div>

                <div className="">
                  <label
                    for="message"
                    className="block mb-2 text-start text-base font-medium text-gray-600"
                  >
                    Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    required
                    rows="10"
                    cols="30"
                    className="block bg-red-500 p-3.5 w-full text-base text-gray-600 font-medium rounded-lg border-2 border-gray-400"
                    placeholder="Write about your project..."
                    style={{ backgroundColor: "#ecf0f3" }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-5 mt-5 py-3 bg-gray-900 text-white text-lg block rounded-lg hover:scale-105 transition ease-in duration-200"
                >
                  Send Message{" "}
                  <span className="">
                    <RiSendPlaneFill className="inline" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
