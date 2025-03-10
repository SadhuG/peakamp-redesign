import React from "react";
import environmentIcon from "../assets/environment-icon.svg";
import governanceIcon from "../assets/governance-icon.svg";
import socialIcon from "../assets/social-icon.svg";

const ESGSection = () => {
  const esgCards = [
    {
      icon: environmentIcon,
      title: "Environmental Impact",
      description:
        "Reducing carbon footprint through efficient recycling processes and promoting circular economy principles in battery management.",
    },
    {
      icon: socialIcon,
      title: "Social Responsibility",
      description:
        "Creating sustainable job opportunities and ensuring safe working conditions while engaging with communities to promote environmental awareness.",
    },
    {
      icon: governanceIcon,
      title: "Corporate Governance",
      description:
        "Maintaining transparency in operations and adhering to strict regulatory compliance while fostering ethical business practices.",
    },
  ];

  return (
    <section id="esg" className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="w-3/4 lg:w-4/5 xl:w-3/4">
        {/* Header Section */}
        <div className="mb-16">
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase">
            ESG Commitment
          </span>
          <h2 className="font-urbanist mb-5 text-4xl leading-tight font-bold md:mb-6 lg:text-5xl">
            Our Commitment to a Sustainable Future
          </h2>
          <p className="mx-auto mb-12 text-base md:text-xl">
            At PeakAmp, we believe in a world where sustainability is the norm.
            Our mission goes beyond recycling; we aim to revolutionize the way
            we think about energy.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {esgCards.map((card, index) => (
            <div key={index} className="flex-1 text-left">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="mb-4 h-12 w-12"
              />
              <h3 className="mb-2 text-xl font-bold lg:text-2xl">
                {card.title}
              </h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGSection;
