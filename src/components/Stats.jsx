import React from "react";
import batteryImage from "../assets/batteryStats.png";

const Stats = () => {
  const statsData = [
    {
      value: "600,000+",
      valueClr: "caribbean-green-dark",
      description: (
        <>
          <strong>kWh</strong> of batteries recycled annually — our ongoing
          commitment.
        </>
      ),
    },
    {
      value: "Over 98%",
      valueClr: "eastern-blue-dark",
      description: (
        <>
          <strong>material recovery</strong> achieved at an industrial scale.
        </>
      ),
    },
    {
      value: "15,000",
      valueClr: "caribbean-green-dark",
      description: (
        <>
          <strong>metric</strong> tonnes of <strong>CO2</strong> emissions on
          track to be prevented by 2025.
        </>
      ),
    },
  ];

  return (
    <section className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row lg:gap-20">
        {/* Image Section */}
        <div className="mt-12 w-full lg:mt-0 lg:w-1/2">
          <img
            src={batteryImage}
            alt="Battery illustration"
            className="h-auto w-full drop-shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="mb-4 text-4xl leading-tight font-bold lg:text-5xl">
            Transforming the Future of EV Battery Recycling with Innovative
            Solutions
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            At Peakamp, we are dedicated to revolutionizing the management of
            End-of-Life EV batteries. Our mission is to create a sustainable and
            efficient ecosystem for all stakeholders.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:[&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <h3 className={`text-5xl font-bold text-${stat.valueClr}`}>
                  {stat.value}
                </h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
