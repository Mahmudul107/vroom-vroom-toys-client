import React from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();

  return (
    <div className="hero min-h-fit my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 p-20 shadow-xl w-3/4">
        <div>
          <img
            src={details.pictureUrl}
            className="max-w-full rounded-lg shadow-2xl"
          />
          <p className="mt-8 text-xl font-semibold">
            Price : $ {details.price}
          </p>
          <p className="flex items-center text-xl font-semibold mt-8">
            Ratings : {details.rating}
            <FaStar className="text-rose-500 ml-1" />
          </p>
          <p className="mt-8 text-xl font-semibold">
            Available Quantity : {details.quantity}
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{details.subCategory}</h1>
          <p className="py-6 text-lg font-serif">{details.description}</p>
          <p className="text-2xl font-bold font-serif mb-4">
            Seller : {details.sellerName}
          </p>
          <p className="text-sm text-gray-600 font-bold font-serif">
            Email : {details.sellerEmail}
          </p>
          <div className="mt-36 ml-52">
          <Link to="/allToys">
            {" "}
            <button className="btn bg-fuchsia-600 hover:bg-red-600 duration-700 border-none text-white">
              <FaArrowLeft className="mr-5" />
              Back To Previous
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
