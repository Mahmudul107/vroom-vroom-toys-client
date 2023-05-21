import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysData = ({ toy,userData ,setUserData }) => {
    // const [toys, setToys] = useState([])
    

  const handleDeleteToy = (toyId) => {
    // console.log(toyId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://vroom-vroom-toys-server.vercel.app/deleteToy/${toy._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
            // const remaining = toys.filter( t => t._id !== _id );
            // setToys(remaining)
          });
      }
    });
  };

  return (
    <tr>
      <td>
        {toy.sellerName ? (
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toy.pictureUrl} alt="Avatar" />
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
      <td>{toy.toyName}</td>
      <td>${toy.price}</td>
      <td>{toy.quantity}</td>
      <td>
        <div className="flex items-center space-x-2">
          <Link to={`updateToyDetails/${toy._id}`}>
            <button className="btn btn-primary btn-sm">Update</button>
          </Link>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleDeleteToy(toy._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToysData;
