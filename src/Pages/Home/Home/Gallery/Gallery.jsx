import React, { useState, useEffect } from "react";
import GalleryCards from "./GalleryCards";

const Gallery = () => {
  const [carData, setCarData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch("/cars.json");
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
    <div>
      <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-56xl font-sans font-bold text-red-500 animate-pulse bg-gradient-to-r bg-clip-text  from-red-200 to-fuchsia-500 opacity-90 text-center my-20 mb-20 divider">
        Vroom Vroom's Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:mx-4 md:mx-8 lg:mx-12">
        {displayedCars.map((car) => (
          <GalleryCards key={car.id} car={car} />
        ))}
      </div>
      <div className="flex justify-center mt-14 mb-14">
        <button
          onClick={handleShowAll}
          className=" text-white bg-fuchsia-500 rounded-md hover:bg-red-600 duration-700 font-bold py-3 px-5"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
