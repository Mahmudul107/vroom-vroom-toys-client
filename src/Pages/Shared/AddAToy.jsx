import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  useTitle('Add Toys')

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.toyName.value;
    const pictureUrl = form.pictureUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addedToy = {
      toyName,
      description,
      price,
      quantity,
      pictureUrl,
      sellerEmail,
      subCategory,
      sellerEmail,
      rating,
      sellerName,
    };

    console.log(addedToy);

    // To the server
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "Success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container max-w-5xl mx-auto py-8 my-16">
      <div className="mb-16">
        <p className="divider"></p>
        <h3 className="text-5xl text-red-400 font-semibold m-10 font-mono text-center">
          Share Your Toys with the World!"
        </h3>
        <p className="divider"></p>
      </div>
      <form onSubmit={handleAddToy} className="max-w-6xl mx-auto p-12 rounded-lg shadow-xl">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="text-gray-500 font-bold">
            Picture URL of the toy:
          </label>
          <input
            type="text"
            name="pictureUrl"
            placeholder="Upload picture"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-500 font-bold">
            Name:
          </label>
          <input
            type="text"
            name="toyName"
            placeholder="Enter Toy name"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="text-gray-500 font-bold">
            Seller Name:
          </label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.name}
            placeholder="Enter Seller's name"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="text-gray-500 font-bold">
            Seller Email:
          </label>
          <input
            type="email"
            name="sellerEmail"
            placeholder="Enter Seller's email"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="text-gray-500 font-bold">
            Sub-category:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="text-lg font-mono font-semibold px-4 py-5 border rounded-md w-full"
          >
            <option value="Racing Car">Racing Car</option>
            <option value="Construction Vehicles">Construction Vehicles</option>
            <option value="Remote Control Cars">Remote Control Cars</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-500 font-bold">
            Price: $
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="text-gray-500 font-bold">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            min="0"
            max="5"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="text-gray-500 font-bold">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-gray-500 font-bold">
            Detail Description:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="font-mono font-semibold px-4 py-5 border rounded-md w-full"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-fuchsia-500 hover:bg-red-500 duration-500 text-white px-12 py-3 rounded-md"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddAToy;
