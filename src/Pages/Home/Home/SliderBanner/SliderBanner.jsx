import React from "react";
import {
  FaEye,
  FaEyeDropper,
  FaEyeSlash,
  FaFacebook,
  FaInstagram,
  FaRegEye,
  FaTwitter,
} from "react-icons/fa";

const SliderBanner = () => {
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <div className="carousel w-full h-screen relative">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.unsplash.com/photo-1592784082277-46e33f897110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full rounded-xl"
          />
          <div className="">
            <div className="absolute text-white space-y-8 inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl">
              <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-56xl font-sans font-bold mb-6 text-red-500 animate-pulse bg-gradient-to-r bg-clip-text text-transparent from-red-200 to-fuchsia-500 opacity-90">
                Rev Up the Fun with Toy Cars!
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-base font-serif opacity-90">
                Experience the excitement and joy of playing with toy cars,
                where adventure awaits at every turn!
              </p>
              <div className="absolute bottom-20 mb-8">
                <button className="mt-8 text-white bg-fuchsia-500 rounded-md hover:bg-red-600 duration-700 animate-bounce font-bold py-3 px-5">
                  Explore Vroom
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1594787317554-dcc17c53f741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full rounded-xl"
          />
          <div className="absolute text-white space-y-8 inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <h2 className="text-5xl font-bold font-serif opacity-70">
            Zoom into Adventure with Toy Car Racing!
            </h2>
            <p className="font-serif">
            Get ready for thrilling races and high-speed action as you zoom into exciting adventures with toy car racing!
            </p>
            <div className="absolute bottom-12 mb-8">
              <button className="mt-8 text-white bg-fuchsia-500 rounded-md hover:bg-red-600 duration-700 animate-bounce font-bold py-3 px-5">
                Explore Vroom
              </button>
            </div>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full rounded-xl"
          />
          <div className="absolute text-white space-y-8 inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <h2 className="text-5xl font-bold font-serif opacity-70">
            Ignite Imagination with Toy Car Collections!
            </h2>
            <p className="font-serif">
            Spark your imagination and create endless stories with captivating toy car collections that fuel creativity.
            </p>
            <div className="absolute bottom-12 mb-8">
              <button className="mt-8 text-white bg-fuchsia-500 rounded-md hover:bg-red-600 duration-700 animate-bounce font-bold py-3 px-5">
                Explore Vroom
              </button>
            </div>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="w-full rounded-xl"
          />
          <div className="absolute text-white space-y-8 inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <h2 className="text-5xl font-bold font-serif opacity-70">
            Experience Thrilling Toy Car Action!
            </h2>
            <p className="font-serif">
            Brace yourself for thrilling action as you embark on incredible toy car adventures filled with adrenaline-pumping moments!
            </p>
            <div className="absolute bottom-12 mb-8">
              <button className="mt-8 text-white bg-fuchsia-500 rounded-md hover:bg-red-600 duration-700 animate-bounce font-bold py-3 px-5">
                Explore Vroom
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute bottom-0">
        <a
          href="#item1"
          className="btn btn-xs text-white hover:bg-red-500 bg-fuchsia-400 border-none"
        >
          <FaEye />
        </a>
        <a
          href="#item2"
          className="btn btn-xs text-white hover:bg-red-500 bg-fuchsia-400 border-none"
        >
          <FaRegEye />
        </a>
        <a
          href="#item3"
          className="btn btn-xs text-white hover:bg-red-500 bg-fuchsia-400 border-none"
        >
          <FaEye />
        </a>
        <a
          href="#item4"
          className="btn btn-xs text-white hover:bg-red-500 bg-fuchsia-400 border-none"
        >
          <FaEye />
        </a>
      </div>
    </div>
  );
};

export default SliderBanner;
