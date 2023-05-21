import React from "react";

const GalleryCards = ({ car }) => {
  const { id, image, name } = car;

  return (
    <div className="relative group">
      <div className="w-full h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-300 transform-gpu group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black bg-opacity-50 py-2 px-4 rounded-lg">
          <h3 className="text-white text-lg">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
