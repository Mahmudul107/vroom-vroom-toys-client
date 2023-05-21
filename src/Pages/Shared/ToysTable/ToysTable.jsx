import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const ToysTable = () => {
  const toys = useLoaderData();
  const [searchText, setSearchText] = useState("")


  const handleSearch = () => {
    useEffect(() => {
      fetch(`http://localhost:5000//toysSearch/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          searchText(data);
        });
    }, []);
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-center  w-4/5 mx-auto mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-72 mr-2 px-2 py-1 border rounded"
          //   value={searchTerm}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch} className="btn border-none bg-fuchsia-500 hover:bg-red-500 text-white">
          Search
        </button>
      </div>
      <table className="table w-4/5 mx-auto">
        <thead>
          <tr>
            <th className="text-base px-4 py-6 border">Seller</th>
            <th className="text-base px-4 py-2 border">Toy Name</th>
            <th className="text-base px-4 py-2 border">Sub-category</th>
            <th className="text-base px-4 py-2 border">Price</th>
            <th className="text-base px-4 py-2 border">Available Quantity</th>
            <th className="text-base px-4 py-2 border"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="hover:text-fuchsia-500">
              <td className="px-4 py-2 border">
                {toy.sellerName ? (
                  <div className="flex items-center gap-3">
                    <div className="avatar w-10 h-10 inset-0 rounded-full overflow-hidden">
                      <img src={toy.pictureUrl} alt={toy.toyName} />
                    </div>
                    <div className="ml-2">
                      <div className="text-base opacity-50 font-bold">
                        {toy.sellerName}
                      </div>
                      <div className="text-base opacity-50">
                        {toy.sellerEmail}
                      </div>
                    </div>
                  </div>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="text-base px-4 py-2 border">{toy.toyName}</td>
              <td className="text-base px-4 py-2 border">{toy.subCategory}</td>
              <td className="text-base px-4 py-2 border">${toy.price}</td>
              <td className="text-base px-4 py-2 border">{toy.quantity}</td>
              <td className="text-base px-4 py-2 border">
                <Link to={`/toyDetails/${toy._id}`}>
                  <button className="btn btn-primary border-none bg-fuchsia-500 hover:bg-red-500 text-white btn-xs">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToysTable;
