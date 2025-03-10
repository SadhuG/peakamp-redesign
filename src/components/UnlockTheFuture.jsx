import React from "react";

const UnlockTheFuture = () => {
  return (
    <section id="about" className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto">
        <div className="flex items-center max-md:flex-col">
          {/* Header */}
          <h2 className="mb-5 text-4xl font-bold md:mr-10 md:w-[50%] lg:mr-20 lg:text-5xl">
            Unlock the Future of Sustainable Energy with Peakamp's Innovative
            Solutions
          </h2>

          {/* Subheading with 80px gap (mb-20) */}
          <p className="md:w-[50%] md:text-lg">
            Peakamp offers a comprehensive approach to managing End-of-Life EV
            batteries, ensuring efficiency and sustainability. Our platform
            connects all stakeholders, from OEMs to recyclers, fostering
            collaboration and responsible practices. By leveraging technology,
            we streamline battery procurement and compliance, enabling
            businesses to make informed decisions while reducing waste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnlockTheFuture;
