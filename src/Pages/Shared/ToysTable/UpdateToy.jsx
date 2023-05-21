import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { price, quantity, description, _id } = toy;


  const handleUpdateCoffee = (e) => {
    event.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const UpdatedToy = {
      description,
      price,
      quantity,
    };

    console.log(UpdatedToy);

    fetch(`http://localhost:5000/updateToy/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(UpdatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  }

  return (
    <div className="container max-w-5xl mx-auto py-8 my-16">
      <div className="mb-16">
        <p className="divider"></p>
        <h3 className="text-3xl text-red-400 font-semibold m-10 font-mono text-center">
          Update Your Toy Details
        </h3>
        <p className="divider"></p>
      </div>
      <form onSubmit={handleUpdateCoffee} className="max-w-6xl mx-auto p-12 rounded-lg shadow-xl">
        <div className="mb-4">
          <label htmlFor="price" className="text-gray-500 font-bold">
            Price: $
          </label>
          <input
            type="number"
            id="price"
            defaultValue={price}
            name="price"
            placeholder="Enter price"
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
            defaultValue={quantity}
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
            defaultValue={description}
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
          Update Toy
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
