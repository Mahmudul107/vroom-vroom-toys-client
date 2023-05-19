import React, { useContext, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Registration = () => {
  const { createUser, updateUserData } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false); // state for success message

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(email, password, name, photoUrl);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(result.user, name, photoUrl);
        setIsRegistered(true); // set isRegistered to true if registration is successful
      })
      .catch((err) => {
        console.error(err);
      });

    const newErrors = {};
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!email) {
      newErrors.email = "Email cannot be empty";
    }
    if (!password) {
      newErrors.password = "Password cannot be empty";
    }
    // Display errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  // Redirect to login form after registration
  if (isRegistered) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 ">
        <div className="bg-fuchsia-200 p-6 rounded-lg shadow-lg md:w-1/2 text-center">
          <h2 className="text-lg font-semibold mb-4">
            Registration successful!
          </h2>
          <Link className="text-red-500 hover:underline font-bold" to="/login">
            Click here to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <Banner />
        <div className="p-6 rounded-lg ">
          <h2 className="text-3xl font-semibold mb-3 mt-12">
            Registration Here
          </h2>
          <h4 className="text-gray-600 font-semibold text-base mb-8">
            Sign Up to try our amazing services
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 my-auto "
          >
            <h2 className="text-xl font-semibold">Your Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            <h2 className="text-xl font-semibold">Photo URL</h2>
            <input
              type="text"
              name="photo"
              placeholder="Upload your photo"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />

            <h2 className="text-xl font-semibold">Email Address</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email}</span>
            )}
            <h2 className="text-xl font-semibold">Password</h2>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              className="w-[500px] p-3 border-2 border-gray-300 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <span className="text-red-500 text-xs mb-12">
                {errors.password}
              </span>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-10 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <p className="text-lg my-10 font-bold text-center">
        Already have an account ? please{" "}
        <Link to="/login" className="text-red-500 hover:underline font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registration;
