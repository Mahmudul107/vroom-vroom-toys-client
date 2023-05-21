import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useTitle from "../../Hooks/useTitle";
import MyToysData from "./MyToysData";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState([]);
  console.log(userData);

  useEffect(() => {
    fetch(`http://localhost:5000/userData/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, [user]);



  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">My Toys Page</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((toy) => <MyToysData
              key={toy._id}
              toy={toy}
            />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
