import React from "react";

const ToysTable = ({ toy }) => {
  return (
    <tr>
      <td className="px-4 py-2">
        {toy.sellerName ? (
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toy.pictureUrl} alt={toy.name} />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy.sellerName}</div>
              <div className="text-sm opacity-50">{toy.sellerEmail}</div>
            </div>
          </div>
        ) : (
          "N/A"
        )}
      </td>
      <td className="px-4 py-2">{toy.name}</td>
      <td className="px-4 py-2">{toy.subCategory}</td>
      <td className="px-4 py-2">{toy.price}</td>
      <td className="px-4 py-2">{toy.quantity}</td>
      <td className="px-4 py-2">
        <button className="btn btn-primary btn-xs">View Details</button>
      </td>
    </tr>
  );
};

export default ToysTable;
