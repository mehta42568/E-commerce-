import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import { useCartDispatch } from "../contexts/CartContext";
import { useToast } from "../components/ToastProvider";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch = useCartDispatch();
  const toast = useToast();

  if (!product)
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Product not found 😕
      </div>
    );

  function add() {
    dispatch({ type: "ADD", item: product, qty: 1 });
    toast.push("Added to cart");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 py-12"
    >
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition"
        >
          <FaArrowLeft /> Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="relative"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[480px] object-cover rounded-2xl shadow-lg"
          />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-3 left-3 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow-md"
          >
            {product.category}
          </motion.span>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200"
        >
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            {product.description}
          </p>

          <div className="text-2xl font-bold text-indigo-700 mb-6">
            ${product.price}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={add}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold"
          >
            <FaShoppingCart /> Add to Cart
          </motion.button>

          {/* Delivery Info */}
          <div className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-4">
            <p>✅ Free shipping on orders above $50</p>
            <p>⚡ Fast 2-day delivery available</p>
            <p>💳 Secure payment guaranteed</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
