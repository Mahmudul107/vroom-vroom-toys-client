import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const AddAToy = () => {
    const {user} = useContext(AuthContext)


  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const pictureUrl = form.pictureUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.name.value;

    const addedToy = {
      name,
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
    fetch('http://localhost:5000/addToy',{
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(addedToy)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-bold mb-4">Add a Toy Page</h3>
      <form onSubmit={handleAddToy} className="max-w-6xl mx-auto">
        <div className="mb-4">
          <label htmlFor="pictureUrl" className="text-gray-700 font-medium">
            Picture URL of the toy:
          </label>
          <input
            type="text"
            name="pictureUrl"
            placeholder="Upload picture"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your name"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="text-gray-700 font-medium">
            Seller Name:
          </label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.name}
            placeholder="Enter Seller's name"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="text-gray-700 font-medium">
            Seller Email:
          </label>
          <input
            type="email"
            name="sellerEmail"
            placeholder="Enter Seller's email"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="text-gray-700 font-medium">
            Sub-category:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          >
            <option value="Racing Car">Racing Car</option>
            <option value="Construction Vehicles">Construction Vehicles</option>
            <option value="Remote Control Cars">Remote Control Cars</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-700 font-medium">
            Price: $
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="text-gray-700 font-medium">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            min="0"
            max="5"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="text-gray-700 font-medium">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            className="mt-1 px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="text-gray-700 font-medium">
            Detail Description:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="mt-1 px-4 py-2 border rounded-md w-full"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-fuchsia-500 text-white px-4 py-2 rounded-md"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddAToy;
