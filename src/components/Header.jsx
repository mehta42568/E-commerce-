import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaShoppingCart, FaStore, FaUserCircle, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const cart = useCart();
  const { user, logout } = useAuth();
  const totalItems = cart.items.reduce((s, i) => s + i.qty, 0);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* 🛍️ Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <FaStore className="text-indigo-600 text-2xl" />
          </motion.div>
          <span className="text-2xl font-extrabold tracking-wide group-hover:text-yellow-300 transition-colors">
            E-Shop
          </span>
        </Link>

        {/* 🧭 Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }`
            }
          >
            Orders
          </NavLink>

          {/* 👤 Auth Links */}
          {user ? (
            <>
              <span className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1.5 rounded-full">
                <FaUserCircle /> {user.name || user.email}
              </span>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition"
              >
                <FaSignInAlt /> Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-3 py-1.5 rounded-full font-semibold transition"
              >
                <FaUserCircle /> Sign Up
              </Link>
            </>
          )}

          {/* 🛒 Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition"
          >
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full shadow"
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
