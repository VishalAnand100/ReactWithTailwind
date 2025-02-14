import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300 pb-6">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Why us</li>
              <li>Mission</li>
              <li>Vision</li>
              <li>Values</li>
              <li>What we do</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Research</h3>
            <ul className="space-y-2 text-sm">
              <li>NEP</li>
              <li>Global Exposure</li>
              <li>Fellowships</li>
              <li>STEM</li>
              <li>OAT</li>
              <li>DREAM</li>
              <li>RASGC</li>
              <li>ODBE</li>
              <li>S2I</li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Other's</h3>
            <ul className="space-y-2 text-sm">
              <li>Blogs</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* Clubs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Clubs</h3>
            <ul className="space-y-2 text-sm">
              <li>Entrepreneurship League</li>
              <li>Engineering Explorers</li>
              <li>Medical Mavericks</li>
              <li>Artists' Volunteering</li>
              <li>Business Trailblazers</li>
              <li>Administrative Achievers</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Branding & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Logo & Newsletter */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-blue-600">SIMPLIFYING SKILLS</h2>
            <p className="text-sm mt-2">Subscribe Our Newsletter for Latest Updates</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaYoutube className="text-red-600 text-2xl cursor-pointer" />
            <FaFacebookF className="text-blue-600 text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
            <FaLinkedinIn className="text-blue-700 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-xs text-gray-500 mt-4">
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

