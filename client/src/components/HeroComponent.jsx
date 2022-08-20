import React from "react";
import BG from "../assets/img/bg.png";
import LOGOBG from "../assets/img/logobg.png";

export default function HeroComponent() {
  return (
    <>
      <div
        className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${BG}')`,
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75" />
        <main className="px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center group">
            <img
              src={LOGOBG}
              alt="logo_bg"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            />
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Register
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Download Now
                </a>
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </>
  );
}
