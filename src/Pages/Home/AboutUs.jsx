import React from "react";

const AboutUs = () => {
  return (
    <div className="rounded-lg mb-10">
      <h1 className="text-5xl text-center font-bold font-serif mb-16 text-transparent bg-gradient-to-r from-purple-400 to-red-700 bg-clip-text">
        What Peoples Say About Us
      </h1>
      <div className="carousel relative w-full">
        <div id="i1" className="flex justify-center carousel-item w-full">
          <div className="relative rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1622020920816-cd528763211a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=408&q=80"
              className="w-full h-full"
            />
            <div className="flex flex-col justify-center items-center  absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 hover:opacity-60">
              <p className="text-white font-bold text-3xl text-center">
                Philip Cors
              </p>
              <p className="text-gray-300 text-lg text-center p-2">
                Vroom Vroom Toys has an incredible selection of toys for all
                ages, making it the go-to destination for fun and imaginative
                play!
              </p>
            </div>
          </div>
        </div>
        <div id="i2" className="flex justify-center carousel-item w-full">
          <div className="relative rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605664042097-e172a325d4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80"
              className="w-full h-full"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 hover:opacity-60">
              <p className="text-white font-bold text-3xl text-center">
                Alan Workshop
              </p>
              <p className="text-gray-300 text-lg text-center">
                Customers rave about the exceptional quality and durability of
                the toys from Vroom Vroom Toys, ensuring hours of enjoyment for
                kids everywhere.
              </p>
            </div>
          </div>
        </div>
        <div id="i3" className="flex justify-center carousel-item w-full">
          <div className="relative rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              className="w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-1000 hover:opacity-60">
              <p className="text-white font-bold text-3xl text-center">
                Alex Salt
              </p>
              <p className="text-gray-300 text-lg text-center">
              Parents love the excellent customer service provided by Vroom Vroom Toys, always going above and beyond to ensure a smooth and enjoyable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#i1" className="btn btn-xs">
          1
        </a>
        <a href="#i2" className="btn btn-xs">
          2
        </a>
        <a href="#i3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
