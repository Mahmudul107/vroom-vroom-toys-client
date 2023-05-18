import React from "react";
import logo from "../../assets/VroomVroom.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 1st Column */}
        <div>
          <div className="flex items-center mb-2">
            <img src={logo} alt="Website Logo" className="h-24 w-24 mr-2" />
            <h1 className="text-red-500 text-lg font-bold -ml-4 -mt-3">
              VroomVroom
            </h1>
          </div>
          <p className="text-gray-500 mb-2">Address Line 1, City, State, ZIP</p>
          <p className="text-gray-500 mb-4">Email: info@vroomvroomtoys.com</p>
          <div className="flex space-x-4">
            <Link>
              <button className="btn btn-circle btn-outline bg-fuchsia-300 border-none">
                <FaFacebook />
              </button>
            </Link>
            <Link>
              {" "}
              <button className="btn btn-circle btn-outline bg-fuchsia-300 hover:bg-red-400 border-none">
                <FaTwitter />
              </button>
            </Link>
            <Link>
              <button className="btn btn-circle btn-outline bg-fuchsia-300 hover:bg-red-400 border-none">
                <FaInstagram />
              </button>
            </Link>
          </div>
        </div>

        {/* 2nd Column */}
        <div>
          <h2 className="text-black font-bold mb-4 border-b w-32 border-gray-600 pb-2">
            VroomVroom
          </h2>
          <ul className="text-gray-500 space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/learning">Learning</a>
            </li>
            <li>
              <a href="/activity">Activity</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>

        {/* 3rd Column */}
        <div>
          <h2 className="text-black font-bold mb-4 border-b w-32 border-gray-600 pb-2">
            Explore
          </h2>
          <ul className="text-gray-500 space-y-2">
            <li>
              <a href="/vaccination">Vaccination</a>
            </li>
            <li>
              <a href="/schools">Schools</a>
            </li>
            <li>
              <a href="/qna">Q&A</a>
            </li>
            <li>
              <a href="/moments">Moments</a>
            </li>
          </ul>
        </div>

        {/* 4th Column */}
        <div>
          <h2 className="text-black font-bold mb-4 border-b w-32 border-gray-600 pb-2">
            Help
          </h2>
          <ul className="text-gray-500 space-y-2">
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-conditions">Terms and Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container mx-auto text-center text-gray-500 text-sm">
        <p>&copy; {currentYear} VroomVroomToys. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
