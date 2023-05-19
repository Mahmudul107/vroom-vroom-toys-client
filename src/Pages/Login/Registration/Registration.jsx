import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // Add your login logic here
    console.log(email, password, name, photoUrl);
  };

  return (
    <div>
      
    </div>
  );
};

export default Registration;
