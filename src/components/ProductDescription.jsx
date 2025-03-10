import React from "react";
import batterySpecificSolution from "../assets/battery-specific-solution.jpeg";
import blackMass from "../assets/black-mass.png";
import segregatedMetals from "../assets/segregated-metals.png";

const ProductDescription = () => {
  const products = [
    {
      image: batterySpecificSolution,
      title: "Battery Specific Solution",
      description: [
        <>
          <strong>- NMC (Nickel Manganese Cobalt):</strong> Recovery includes
          high-quality cobalt (15-20%), nickel (25-30%), and manganese (10-15%).
          Ideal for new battery production.
        </>,
        <>
          <strong>-LFP (Lithium Iron Phosphate):</strong>Lithium and iron
          phosphate are key recoverable materials, with consistent lithium
          content.
        </>,
        <>
          <strong>- LCO (Lithium Cobalt Oxide):</strong>LCO batteries yield up
          to 30-40% pure cobalt, along with high-grade copper and aluminum.
        </>,
      ],
      isLarge: true,
    },
    {
      image: blackMass,
      title: "Black Mass",
      description: [
        <>
          - Our advanced process recovers black mass with a high concentration
          of critical materials such as cobalt, nickel, manganese, and lithium.
        </>,
        <>
          - Our black mass recovery offers consistent quality, with a 98% purity
          rate—making it ideal for reuse in new EV battery production.
        </>,
      ],
    },
    {
      image: segregatedMetals,
      title: "Segregated Metals",
      description: [
        <>
          - We extract pure aluminum and copper from battery cells, which are
          vital for various industries.
        </>,
        <>
          - Each tonne of recycled copper saves 85% of the energy required to
          produce virgin copper, contributing to a more sustainable supply
          chain.
        </>,
      ],
    },
  ];

  return (
    <section className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase">
            Powering Tomorrow
          </span>
          <h2 className="font-urbanist mb-5 text-4xl leading-tight font-bold md:mb-6 lg:text-5xl">
            Comprehensive Battery Recycling Solutions
          </h2>
          <p className="mx-auto mb-12 text-base md:text-xl">
            We offer end-to-end solutions for EV battery recycling, from
            collection to material recovery
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                product.isLarge ? "md:row-span-2" : ""
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 scale-110 bg-cover bg-center transition-transform duration-500 group-hover:scale-100"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                }}
              />

              {/* Overlay Gradient */}
              <div className="bg-eastern-blue-darkest/85 absolute inset-0" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-center p-6 text-white md:p-12">
                <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                  {product.title}
                </h3>
                <ul
                  className={`space-y-4 ${product.isLarge ? "text-base md:text-2xl" : "text-base md:text-lg"}`}
                >
                  {product.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
