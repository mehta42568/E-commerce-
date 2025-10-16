import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCartDispatch } from "../contexts/CartContext";
import { useToast } from "../components/ToastProvider";

export default function Home() {
  const dispatch = useCartDispatch();
  const toast = useToast();

  function add(p) {
    dispatch({ type: "ADD", item: p, qty: 1 });
    toast.push("✅ Added to cart");
  }

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 min-h-screen overflow-hidden">
      {/* 🌟 Hero Section */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10 py-16">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Shop <span className="text-indigo-600">Smarter</span>, Live{" "}
            <span className="text-pink-600">Better</span> ✨
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Experience modern shopping with secure payments, fast delivery, and
            exclusive offers you’ll love.
          </p>
          <Link
            to="/products"
            className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            🛍️ Start Shopping
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="Shopping"
            className="w-full max-w-md drop-shadow-xl rounded-2xl"
          />
        </motion.div>
      </section>

      {/* 🛍️ Featured Products */}
      <section className="container mx-auto px-6 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-10"
        >
          🌟 Featured Products
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {products.slice(0, 10).map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProductCard product={p} onAdd={add} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🎯 Category Highlights */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "👕 Clothing", color: "bg-indigo-500" },
              { name: "💻 Electronics", color: "bg-purple-500" },
              { name: "🏡 Home & Living", color: "bg-pink-500" },
              { name: "🎲 Toys", color: "bg-rose-500" },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-8 text-lg font-semibold shadow-lg ${cat.color}`}
              >
                {cat.name}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🔥 Offers Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          💥 Exclusive Offers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Mega Electronics Sale ⚡",
              desc: "Get up to 50% off on laptops, headphones, and more.",
              color: "bg-indigo-600",
            },
            {
              title: "Fashion Fiesta 👗",
              desc: "Buy 2 Get 1 Free on clothing & accessories.",
              color: "bg-purple-600",
            },
            {
              title: "Home Essentials 🏠",
              desc: "Upgrade your space with up to 40% OFF.",
              color: "bg-pink-600",
            },
          ].map((offer, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`${offer.color} text-white rounded-2xl p-8 shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
              <p className="mb-4 text-sm opacity-90">{offer.desc}</p>
              <Link
                to="/products"
                className="inline-block bg-white text-gray-800 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
              >
                Shop Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🌈 Promo Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 mt-10"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">
            🎉 Weekend Deal — 30% OFF Storewide!
          </h2>
          <p className="text-lg mb-6">
            Don't miss out on our biggest sale of the season. Limited time only!
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-pink-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Explore Deals
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
