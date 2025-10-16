import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 px-4">
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Create Your Account
        </h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
        <input
          name="name"
          type="text"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your full name"
        />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your email"
        />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Phone</label>
        <input
          name="phone"
          type="tel"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter phone number"
        />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Create a password"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transition"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </motion.form>
    </div>
  );
}
