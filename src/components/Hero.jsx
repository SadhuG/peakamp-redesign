import React from "react";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full items-center justify-start">
        {/* Content Container */}
        <div className="w-full px-5 md:max-w-4/5 md:px-8 lg:px-16 xl:max-w-3/5">
          <h1 className="font-urbanist mb-6 text-5xl/[1.2] font-bold md:text-7xl">
            Full-stack solution for{" "}
            <span className="from-caribbean-green to-eastern-blue-light bg-gradient-to-r bg-clip-text text-transparent">
              End-of-Life
            </span>{" "}
            Battery Management
          </h1>
          <p className="mb-8 text-base md:text-lg">
            At Peakamp, we are dedicated to making clean energy accessible and
            responsible for everyone. Join us in transforming the EV battery
            landscape for a sustainable tomorrow.
          </p>
          <a href="#contact">
            <button className="bg-eastern-blue hover:bg-eastern-blue-dark rounded-md px-6 py-2.5 text-base font-semibold text-white transition-colors duration-200">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
