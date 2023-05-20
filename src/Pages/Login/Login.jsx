import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Banner from "./Banner/Banner";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { signInUser, googleSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(email, password);



    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setError("");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid Email or Password. Please try again.");
      });
  };

  // Google sign in with popup
  const handleGoogleSignIn = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <Banner />
        <div className="p-6 rounded-lg ">
          <h2 className="text-3xl font-semibold mb-3 mt-12">Login Here</h2>
          <h4 className="text-gray-600 font-semibold text-base mb-8">
            Log In to try our amazing services
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 my-auto "
          >
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
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-10 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Log in
            </button>
            {error && <p className="text-warning">{error}</p>}
          </form>
          <div className="mt-10 text-center">
            <p className="text-lg">Or sign up using:</p>
            <div className="flex gap-4 justify-center mt-6">
              <button className="bg-red-400 border-none btn-circle flex items-center justify-center">
                <FaGoogle onClick={handleGoogleSignIn} />
              </button>
              <button className="bg-blue-600 border-none btn-circle flex items-center justify-center">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg my-10 font-bold text-center">
        Already have an account ? please{" "}
        <Link
          to="/registration"
          className="text-red-500 hover:underline font-bold"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
