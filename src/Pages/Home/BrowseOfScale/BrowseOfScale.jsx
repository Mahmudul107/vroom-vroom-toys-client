import React from "react";

const BrowseOfScale = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 max-w-7xl mx-auto rounded-lg bg-gradient-to-r from-gray-200 via-red-200 mb-10">
      <h1 className="text-4xl font-bold text-white mb-8">Vroom Vroom Toys</h1>
      <form className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Subscribe to our newsletter and never miss a new toy!
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            aria-label="Email"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-fuchsia-500 hover:bg-red-500 duration-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Subscribe Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrowseOfScale;
