import React from "react";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full items-center justify-start">
        {/* Content Container */}
        <div className="w-full max-w-[70%] px-4 sm:px-6 lg:px-8 xl:max-w-[55%]">
          <h1 className="font-urbanist mb-6 text-4xl/[1.2] font-bold md:text-7xl">
            Full-stack solution for{" "}
            <span className="from-caribbean-green to-eastern-blue-light bg-gradient-to-r bg-clip-text text-transparent">
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
      </div>
    </div>
  );
};

export default Hero;
