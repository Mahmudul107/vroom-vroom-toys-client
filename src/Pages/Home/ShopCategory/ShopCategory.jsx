import React, { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";

const ShopCategory = () => {
  const { user } = useContext(AuthContext);
  const [toyCars, setToyCars] = useState([]);
  // const navigate = useNavigate()

  useEffect(() => {
    const fetchToyCars = async () => {
      try {
        const response = await fetch("https://vroom-vroom-toys-server.vercel.app/cars");
        const data = await response.json();
        setToyCars(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchToyCars();
  }, []);

  const handleViewDetails = (toyId) => {
    if (!user) {
      toast.error("You have to log in first to view details");
      // navigate("/login");
      setTimeout(() => {
      }, 8000);
    } else {
      // Handle view details logic here
    }
  };

  return (
    <div className="p-4 max-w-[1400px] mx-auto bg-gradient-to-r from-gray-200 via-red-100 mb-10 rounded-xl">
      <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold font-mono mb-20 text-center divider text-red-500">
        Shop By Category Page
      </h2>

      {toyCars.length > 0 && (
        <Tabs>
          <TabList className="flex justify-center mb-4">
            {toyCars.slice(0, 3).map((category) => (
              <Tab
                key={category._id}
                className="text-lg px-4 py-2 mr-2 bg-fuchsia-500 text-white rounded cursor-pointer"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          {toyCars.slice(0, 3).map((category) => (
            <TabPanel key={category._id}>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-self- items-center p-10 ">
                {category.toys.map((toy) => (
                  <div
                    key={toy.id}
                    className="max-w-xl rounded overflow-hidden shadow-lg m-4"
                  >
                    <div
                      className={`card card-compact bg-base-100 shadow-xl duration-500 hover:bg-fuchsia-200`}
                    >
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
                            <span className="font-semibold mr-2 ">
                              Rating:{" "}
                            </span>
                            {toy.rating}
                          </div>
                        </div>
                      </div>
                      <Link to={'/single-toy-details/'+toy.id}>
                        <button
                          className="text-white transition ease-in-out delay-150 bg-fuchsia-400 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-500 px-5 py-3 rounded-xl w-1/2 mb-6 ml-4"
                          onClick={() => handleViewDetails(toy._id)}
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}

      <ToastContainer />
    </div>
  );
};

export default ShopCategory;
