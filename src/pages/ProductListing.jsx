import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { useCartDispatch } from "../contexts/CartContext";
import { useToast } from "../components/ToastProvider";
import { FaSearch } from "react-icons/fa";

export default function ProductListing() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useCartDispatch();
  const toast = useToast();

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    []
  );

  const filtered = products.filter(
    (p) =>
      (category ? p.category === category : true) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  function add(p) {
    dispatch({ type: "ADD", item: p, qty: 1 });
    toast.push("✅ Added to cart");
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-6"
      >
        {/* 🛒 Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 md:mb-0">
            Our <span className="text-indigo-600">Products</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Browse our latest collection of quality products just for you.
          </p>
        </div>

        {/* 🔍 Search + Filter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
        >
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
            />
          </div>

          {/* Filter Dropdown */}
          <Filters
            categories={categories}
            active={category}
            onChange={setCategory}
          />
        </motion.div>

        {/* Showing Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          Showing{" "}
          <span className="font-semibold text-indigo-600">
            {filtered.length}
          </span>{" "}
          products found
        </motion.div>

        {/* 🧩 Product Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={add} />
          ))}
        </motion.div>

        {/* 💥 Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found matching your search 😕
          </div>
        )}
      </motion.div>

      {/* 🌈 Promo Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Special Weekend Offer!</h2>
          <p className="text-lg mb-6">
            Get up to <span className="font-semibold">30% OFF</span> on selected
            categories. Hurry, limited time only!
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Explore Offers
          </button>
        </div>
      </motion.section>
    </div>
  );
}
