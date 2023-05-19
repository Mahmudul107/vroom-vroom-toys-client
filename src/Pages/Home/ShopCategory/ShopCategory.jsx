import React, { useEffect, useState } from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RatingStars from "react-rating-stars-component";

const ShopCategory = () => {
  const [toyCars, setToyCars] = useState([]);

  useEffect(() => {
    const fetchToyCars = async () => {
      try {
        const response = await fetch("toyCars.json");
        const data = await response.json();
        setToyCars(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchToyCars();
  }, []);

  return (
    <div className="p-4 max-w-[1400px] mx-auto">
      <h2 className="text-5xl font-bold font-mono mb-20 text-center divider text-red-500">Shop By Category Page</h2>

      {toyCars.length > 0 && (
        <Tabs>
          <TabList className="flex justify-center mb-4">
            {toyCars.slice(0, 3).map((category, index) => (
              <Tab
                key={index}
                className="text-lg px-4 py-2 mr-2 bg-fuchsia-500 text-white rounded cursor-pointer"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          {toyCars.slice(0, 3).map((category, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-self- items-center p-10 ">
                {category.toys.map((toy) => (
                  <div
                    key={toy.id}
                    className="max-w-xl rounded overflow-hidden shadow-lg m-4"
                  >
                    <div className={`card card-compact bg-base-100 shadow-xl duration-500 hover:bg-fuchsia-200`}>
                      <figure>
                        <img
                          src={toy.picture}
                          alt={toy.name}
                          style={{
                            objectFit: "cover",
                            height: "400px",
                            width: "100%",
                          }}
                        />
                      </figure>
                      <div className="pb-14 pl-5 mt-6">
                        <h2 className="card-title text-2xl font-mono text-red-500">
                          {toy.name}
                        </h2>
                        <p className="mt-4">
                          <span className="text-lg font-semibold">Price: </span>
                          ${toy.price}
                        </p>
                        <div className="flex">
                          <div className="mt-4">
                            <span className="font-semibold mr-2 ">Rating: </span>
                            {toy.rating}
                          </div>
                        </div>
                      </div>
                      <button className=" text-white transition ease-in-out delay-150 bg-red-400 hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-500 px-5 py-3 rounded-xl w-1/2 mb-6 ml-4">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default ShopCategory;
