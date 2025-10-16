import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(form);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 px-4">
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Welcome Back
        </h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your email"
        />

        <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transition"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </motion.form>
    </div>
  );
}
