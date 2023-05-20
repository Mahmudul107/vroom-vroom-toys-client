import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysTable from "./ToysTable/ToysTable";

const AllToys = () => {
//   const toys = useLoaderData();

  return (
    <div>
      <div className="mt-12">
        {/* {toys.map((toy) => (
          <ToysTable key={toy._id} toy={toy} />
        ))} */}
        <ToysTable/>
      </div>
    </div>
  );
};

export default AllToys;
