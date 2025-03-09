import React from "react";
import aluminum from "../assets/aluminum.png";
import copper from "../assets/copper.png";
import LCO from "../assets/lco-black-mass.png";
import LFP from "../assets/lfp-black-mass.png";
import NMC from "../assets/nmc-black-mass.png";
import plastic from "../assets/plastic.jpeg";
import steel from "../assets/steel.png";

const OurProducts = () => {
  const primaryProducts = [
    {
      image: NMC,
      title: "Nickel Manganese Cobalt",
      description: "Black Mass",
    },
    {
      image: LFP,
      title: "Lithium Iron Phosphate",
      description: "Black Mass",
    },
    {
      image: LCO,
      title: "Lithium Cobalt Oxide",
      description: "Black Mass",
    },
  ];

  const secondaryProducts = [
    {
      image: copper,
      title: "Copper",
      description: "Metal",
    },
    {
      image: aluminum,
      title: "Aluminum",
      description: "Metal",
    },
    {
      image: steel,
      title: "Steel",
      description: "Metal",
    },
    {
      image: plastic,
      title: "Plastics",
      description: "Non-Metal",
    },
  ];

  return (
    <section className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Our Products</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Explore our innovative sustainable energy solutions today!
          </p>
        </div>

        {/* Primary Products Section */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold md:text-5xl">
            Primary Products
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {primaryProducts.map((product, index) => (
              <div
                key={index}
                className="w-full rounded-lg p-6 text-center md:w-[calc(50%-1.33rem)] lg:w-[calc(33%-1.33rem)]"
              >
                <img
                  src={product.image}
                  alt={product.title + product.description}
                  className="mx-auto mb-4 h-52 w-full rounded-lg object-cover"
                />
                <h4 className="mb-2 text-2xl font-medium">{product.title}</h4>
                <p className="text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Products Section */}
        <div>
          <h3 className="mb-8 text-center text-3xl font-bold md:text-5xl">
            Secondary Products
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {secondaryProducts.map((product, index) => (
              <div
                key={index}
                className="w-full rounded-lg p-6 text-center md:w-[calc(50%-1.33rem)] xl:w-[calc(24%-1.33rem)]"
              >
                <img
                  src={product.image}
                  alt={product.title + product.description}
                  className="mx-auto mb-4 h-52 w-full rounded-lg object-cover"
                />
                <h4 className="mb-2 text-2xl font-medium">{product.title}</h4>
                <p className="text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
