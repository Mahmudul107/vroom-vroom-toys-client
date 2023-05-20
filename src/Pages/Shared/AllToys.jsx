import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable/ToysTable";

const AllToys = () => {
  //   const toys = useLoaderData();

  return (
    <div>
      <div className="mb-16">
        <p className="divider w-3/4 mx-auto"></p>
        <h3 className="text-5xl text-red-400 font-semibold m-10 font-mono text-center">
          Share Your Toys with the World!"
        </h3>
        <p className="divider w-2/3 mx-auto"></p>
      </div>
      <div className="my-20">
        {/* {toys.map((toy) => (
          <ToysTable key={toy._id} toy={toy} />
        ))} */}
        <ToysTable />
      </div>
    </div>
  );
};

export default AllToys;
