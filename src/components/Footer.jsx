import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Mauqah</h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-gray-400 hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              // href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-pink-400 rounded-full bg-pink-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              // href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-pink-400 rounded-full bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-pink-400 rounded-full bg-pink-600 transition"
            >
              <FaXTwitter />
            </a>
            <a
              // href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-pink-400 rounded-full bg-pink-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-pink-100 mt-8 pt-4 text-center">
        <p className="text-pink-100">
          &copy; {new Date().getFullYear()} Mauqah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
