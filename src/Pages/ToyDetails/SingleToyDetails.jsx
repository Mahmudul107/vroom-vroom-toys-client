import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const SingleToyDetails = () => {
  const singleCar = useLoaderData()
  const location = useLocation()


  
  const from = location.state?.from?.pathname || '/';




  return (
    <div>
      <h2>Single toy details page</h2>
      <p>{singleCar.name}</p>
     
    </div>
  );
};

export default SingleToyDetails;
