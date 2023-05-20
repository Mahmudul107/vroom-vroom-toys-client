import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysTable = () => {
  const toys = useLoaderData();

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-4/5 mx-auto">
        <thead>
          <tr>
            <th className="text-lg px-4 py-6 border">Seller</th>
            <th className="text-lg px-4 py-2 border">Toy Name</th>
            <th className="text-lg px-4 py-2 border">Sub-category</th>
            <th className="text-lg px-4 py-2 border">Price</th>
            <th className="text-lg px-4 py-2 border">Available Quantity</th>
            <th className="text-lg px-4 py-2 border"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="hover:text-fuchsia-500">
              <td className="px-4 py-4 border">
                {toy.sellerName ? (
                  <div className="flex items-center gap-3">
                    <div className="avatar w-20 h-20 inset-0 rounded-full overflow-hidden">
                      <img src={toy.pictureUrl} alt={toy.name} />
                    </div>
                    <div className="ml-2">
                      <div className="text-lg font-bold">{toy.sellerName}</div>
                      <div className="text-base opacity-50">{toy.sellerEmail}</div>
                    </div>
                  </div>
                ) : 'N/A'}
              </td>
              <td className="text-xl px-4 py-2 border">{toy.name}</td>
              <td className="text-xl px-4 py-2 border">{toy.subCategory}</td>
              <td className="text-xl px-4 py-2 border">${toy.price}</td>
              <td className="text-xl px-4 py-2 border">{toy.quantity}</td>
              <td className="text-xl px-4 py-2 border">
                <button className="btn btn-primary btn-xs">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToysTable;
