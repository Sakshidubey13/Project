import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await API.get("/users");

    const userExists = res.data.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      alert("Email already exists");
      return;
    }

    await API.post("/users", formData);

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
