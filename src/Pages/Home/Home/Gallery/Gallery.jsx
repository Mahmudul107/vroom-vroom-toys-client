import React, { useState, useEffect } from "react";
import GalleryCards from "./GalleryCards";

const Gallery = () => {
  const [carData, setCarData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch("cars.json");
        const data = await response.json();
        setCarData(data);
      } catch (error) {
        console.log("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedCars = showAll ? carData : carData.slice(0, 8);

  return (
    <div className="bg-gradient-to-r from-gray-200 via-red-100 mb-10 rounded-xl py-2">
      <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-56xl font-sans font-bold text-red-500 animate-pulse bg-gradient-to-r bg-clip-text  from-red-200 to-fuchsia-500 opacity-90 text-center my-20 mb-20 divider">
        Vroom Vroom's Gallery
      </h2>
      <p className="text-center mb-8 text-gray-500 font-mono">
        Rev up your senses and step into Vroom Vroom's Gallery, where automotive
        art takes the wheel. <br /> Discover a captivating collection of speed, style,
        and craftsmanship that will ignite your <br /> passion for all things on four
        wheels.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:mx-4 md:mx-8 lg:mx-12">
        {displayedCars.map((car) => (
          <GalleryCards key={car.id} car={car} />
        ))}
      </div>
      <div className="flex justify-center mt-14 mb-14">
        <button
          onClick={handleShowAll}
          className="text-white transition ease-in-out delay-150 bg-fuchsia-400 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-700 duration-500 px-5 py-3 rounded-xl"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
