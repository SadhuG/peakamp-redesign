import React from "react";
import collectionIcon from "../assets/collection-icon.svg";
import mechanicalRecyclingIcon from "../assets/mechanical-recycling-icon.svg";
import processImage from "../assets/process.svg";
import testingIcon from "../assets/testing-icon.svg";

const OurProcess = () => {
  const processCards = [
    {
      icon: collectionIcon,
      title: "Reverse Logistics",
      point1: "- Strategic hubs reduce transportation emissions.",
      point2:
        "- Efficient network ensures cost-effective, eco-friendly bulk battery returns.",
    },
    {
      icon: testingIcon,
      title: "Testing and Segregation",
      point1:
        "- Batteries are tested and sorted for second-life use or recycling.",
      point2: "- Maximizing reuse, minimizing waste.",
    },
    {
      icon: mechanicalRecyclingIcon,
      title: "Mechanical Process of Recycling",
      point1:
        "- Cutting-edge processes recover over 98% of materials like lithium, cobalt, and nickel.",
      point2:
        "- Extracted materials refined for market use, promoting circular economy.",
    },
  ];

  return (
    <section id="process" className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase">
            Streamlined
          </span>
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            How Our Process Simplifies Battery Management
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            At Peakamp, we revolutionize the management of End-of-Life EV
            batteries. Our innovative approach connects all stakeholders,
            ensuring a seamless and responsible process.
          </p>
        </div>

        {/* Cards Section */}
        <div className="mb-20 flex flex-wrap justify-center gap-8">
          {processCards.map((card, index) => (
            <div
              key={index}
              className="w-full rounded-lg p-6 text-center lg:w-[calc(50%-1.33rem)] xl:w-[calc(33%-1.33rem)]"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="mx-auto mb-4 h-12 w-12"
              />
              <h3 className="mb-2 text-3xl font-bold">{card.title}</h3>
              <p>{card.point1}</p>
              <p>{card.point2}</p>
            </div>
          ))}
        </div>

        {/* Process Image */}
        <div className="mx-auto max-w-5xl">
          <img
            src={processImage}
            alt="Our Process Diagram"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
