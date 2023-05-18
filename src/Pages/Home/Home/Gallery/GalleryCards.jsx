import React, { useState } from "react";
import Rating from "react-rating-stars-component";

const GalleryCards = ({ car }) => {
  const { name, image, id, price, manufacturer, year } = car;

  const cardStyle = {
    height: "100%",
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div
        className={`card card-compact bg-base-100 shadow-xl`}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <figure>
          <img
            src={image}
            alt={name}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </figure>
        <div
          className={`card-body ${isHovered ? "hover:bg-red-200 duration-700" : ""}`}
          
        >
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-semibold">Manufacturer:</span> {manufacturer}
          </p>
          <p>
            <span className="font-semibold">Year:</span> {year}
          </p>
          <p>
            <span className="font-semibold">Price: </span> ${price}
          </p>
          <div className="flex">
            <div className="rating">
              <span className="font-semibold">Rating: </span>
              <Rating
                count={5}
                size={24}
                activeColor="#ffd700"
                value={5} // Replace with the actual rating value
                edit={false}
              />
              <div>
                {isHovered && (
                  <div className="card-actions justify-end -mt-8 -mr-20">
                    <button className="btn duration-700 bg-fuchsia-500 hover:bg-red-400 border-none text-white">
                      Quick View
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
