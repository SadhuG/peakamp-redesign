import React from "react";
import collectionIcon from "../assets/collection-icon.svg";
import dataIcon from "../assets/data-icon.svg";
import partnershipIcon from "../assets/partnership-icon.svg";
import recyclingIcon from "../assets/recycling-icon.svg";
import sustainabilityIcon from "../assets/sustainability-icon.png";

const ValueChain = () => {
  const cards = [
    {
      icon: dataIcon,
      title: "Data-Driven Insights",
      description:
        "By providing actionable analytics on battery performance and lifecycle, we empower stakeholders to make well-informed, efficient decisions.",
    },
    {
      icon: sustainabilityIcon,
      title: "Sustainability and ESG Compliance",
      description:
        "Dedicated to sustainability, we help partners adhere to Environmental, Social, and Governance standards while showcasing their commitment to environmental responsibility.",
    },
    {
      icon: collectionIcon,
      title: "Battery Collection and Logistics",
      description:
        "Our advanced supply chain simplifies the collection of end-of-life batteries from OEMs and recyclers, reducing costs and lowering environmental impact.",
    },
    {
      icon: recyclingIcon,
      title: "Advanced Recycling Processes",
      description:
        "Leveraging state-of-the-art technology, we optimize recycling for high material recovery rates, ensuring efficient resource reuse and minimal waste.",
    },
    {
      icon: partnershipIcon,
      title: "Collaborative Partnerships",
      description:
        "We build strong alliances with OEMs, recyclers, and material suppliers to create a thriving ecosystem that promotes sustainability throughout the battery lifecycle.",
    },
  ];

  return (
    <section className="px-5 py-16 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-urbanist mb-5 text-4xl leading-tight font-bold md:mb-6 lg:text-5xl">
            Our Contribution in the Value Chain
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-base md:text-xl">
            We ensure sustainable battery recycling through our comprehensive
            end-to-end process
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full rounded-lg p-6 text-center md:w-[calc(50%-1rem)] xl:w-[calc(30%-1.33rem)]"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="mx-auto mb-4 h-12 w-12"
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

export default ValueChain;
