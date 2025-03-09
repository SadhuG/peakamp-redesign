import React, { useState } from "react";

const ContactUsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const inquiryTypes = [
    "Partnership",
    "Recycling Solutions",
    "Battery Fulfillment",
    "Sales & Distribution",
    "Other",
  ];

  return (
    <section className="px-6 py-28 md:px-16 lg:px-16 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left Section */}
          <div className="flex-1">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
              Let's Build a Sustainable Future Together
            </h2>
            <p className="text-lg text-gray-600">
              Partner with us to revolutionize battery recycling and make a
              lasting impact on the environment.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="flex-1">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="inquiry"
                  className="mb-2 block text-sm font-medium"
                >
                  Type of Inquiry
                </label>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-3 text-left focus:border-blue-500 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span
                    className={
                      selectedOption ? "text-gray-900" : "text-gray-400"
                    }
                  >
                    {selectedOption || "Select an option"}
                  </span>
                  <svg
                    className={`h-5 w-5 transform text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="bg-eastern-blue-lightest absolute z-10 mt-1 w-full rounded-lg border border-gray-300 py-1 shadow-lg">
                    {inquiryTypes.map((type, index, arr) => (
                      <>
                        <button
                          key={index}
                          type="button"
                          className="w-full px-4 py-2 text-left hover:bg-[#ccf7ec] focus:bg-[#ccf7ec] focus:outline-none"
                          onClick={() => {
                            setSelectedOption(type);
                            setIsOpen(false);
                          }}
                        >
                          {type}
                        </button>
                        <div
                          className={`${index == arr.length - 1 ? "" : "border-t border-gray-300"}`}
                        ></div>
                      </>
                    ))}
                  </div>
                )}

                {/* Hidden input for form submission */}
                <input
                  type="hidden"
                  name="inquiry"
                  value={selectedOption.toLowerCase().replace(" ", "-")}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-eastern-blue hover:bg-eastern-blue-dark rounded-lg px-6 py-3 font-bold text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
