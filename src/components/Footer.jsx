import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import Logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  const siteMapLinks = [
    { name: "About Us", href: "/about" },
    { name: "Process", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Sustainability", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: facebook },
    { name: "Instagram", href: "#", icon: instagram },
    { name: "X formerly Twitter", href: "#", icon: twitter },
    { name: "LinkedIn", href: "#", icon: linkedin },
    { name: "YouTube", href: "#", icon: youtube },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Cookie Settings", href: "#" },
  ];

  return (
    <footer className="px-6 py-20 md:px-16 lg:px-16">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="mb-20 flex flex-col gap-16 lg:flex-row lg:gap-24">
          {/* Logo and Newsletter Section */}
          <div className="md:w-3/4 lg:w-1/2">
            <img src={Logo} alt="PeakAmp Logo" className="mb-6 h-8" />
            <p className="mb-8 max-w-md">
              Subscribe to our newsletter to stay updated with the latest news
              and insights in battery recycling.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-eastern-blue hover:bg-eastern-blue-dark rounded-lg px-6 py-3 font-medium text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Wrapper */}
          <div className="flex flex-1 flex-col p-4 md:flex-row">
            {/* Sitemap Section */}
            <div className="flex-1">
              <ul className="space-y-4">
                {siteMapLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-caribbean-green-dark"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact and Social Section */}
            <div className="flex-1 space-y-8">
              {/* Address */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Address</h3>
                <p>
                  123 Battery Street
                  <br />
                  Green City, EC 12345
                  <br />
                  United States
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                <p>
                  info@peakamp.com
                  <br />
                  +1 (555) 123-4567
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="hover:text-caribbean-green-dark"
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="h-6 w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-12 border-t border-white/10 pt-8 text-sm lg:flex-row">
          <div className="flex flex-wrap gap-6">
            <p>
              © 2025 Made by{" "}
              <a
                href="https://github.com/SadhuG"
                className="hover:text-caribbean-green-dark underline"
              >
                SadhuG
              </a>
              .
            </p>
            <p>
              Icon by{" "}
              <a
                href="https://freeicons.io"
                className="hover:text-caribbean-green-dark underline"
              >
                freeicons.io
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-caribbean-green-dark underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
