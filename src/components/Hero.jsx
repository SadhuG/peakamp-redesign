import React from "react";
import heroImage from "../../public/battery.svg";

const Hero = () => {
  return (
    <div className="h-full w-full">
      {/* Background Image */}
      <div
        className={`relative flex h-full w-full items-center bg-[url(../../public/battery.svg)] bg-cover bg-right bg-no-repeat md:bg-contain xl:bg-none`}
        style={{ backgroundPosition: "right center" }}
      >
        <div className="bg-eastern-blue-lightest/60 absolute h-full w-full xl:hidden"></div>
        {/* Content Container */}
        <div className="z-50 w-full max-w-[70%] px-4 sm:px-6 lg:px-8 xl:max-w-[55%]">
          <h1 className="font-urbanist mb-6 text-5xl/[1.2] font-bold lg:text-7xl">
            Full-stack solution for{" "}
            <span className="from-caribbean-green to-eastern-blue-light bg-linear-to-r bg-clip-text text-transparent">
              End-of-Life
            </span>{" "}
            Battery Management
          </h1>
          <p className="mb-8 text-base/[1.5] md:text-lg">
            At Peakamp, we are dedicated to making clean energy accessible and
            responsible for everyone. Join us in transforming the EV battery
            landscape for a sustainable tomorrow.
          </p>
          <button className="bg-eastern-blue hover:bg-eastern-blue-dark rounded-md px-6 py-2.5 text-base font-semibold text-white transition-colors duration-200">
            Contact Us
          </button>
        </div>
        <div className="hidden h-full w-1/2 items-center justify-center xl:flex">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
