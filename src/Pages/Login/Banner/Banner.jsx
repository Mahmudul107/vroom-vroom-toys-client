import React from "react";
import image from "../../../assets/Designer _Isometric.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="relative mr-28 py-32">
        <div>
          <img className="w-[600px]" src={image} alt="" />
        </div>
        <div className="absolute bg-gradient-to-r from-gray-400 to-[rgba(21, 21, 21, 0)] inset-0 p-10 rounded-lg">
          <h2 className="text-5xl font-bold font-mono animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-white to-fuchsia-600 opacity-90 mt-24 mb-28">
            Vroom Vroom
          </h2>
          <h1 className="text-2xl text-white font-semibold mb-5">
            Welcome to Our Vrooms World.
          </h1>
          <p className="text-md text-gray-600 font-semibold mb-5">
            We are glad to see you again! Get access to your Orders, Wishlist
            and Recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
