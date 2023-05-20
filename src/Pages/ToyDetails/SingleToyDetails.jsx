import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const singleCar = useLoaderData()




  return (
    <div>
      <h2>Single toy details page</h2>
      <p>{singleCar.name}</p>
     
    </div>
  );
};

export default SingleToyDetails;
