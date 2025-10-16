import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { useCart, useCartDispatch } from "../contexts/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "../components/ToastProvider";

export default function Checkout() {
  const { user } = useAuth();
  const { items } = useCart();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [showSummary, setShowSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  // Calculate totals
  const totalAmount = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);

  function handlePlaceOrder() {
    if (items.length === 0) {
      toast.push("🛒 Your cart is empty!");
      return;
    }
    setShowSummary(true);
  }

  function confirmOrder() {
    setOrderPlaced(true);
    dispatch({ type: "CLEAR" }); // Empty the cart
    toast.push("🎉 Order placed successfully!");
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 text-center mb-10"
        >
          🧾 Checkout
        </motion.h1>

        {!orderPlaced ? (
          <>
            {/* Cart Items */}
            {items.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-700 mb-4">
                    Your Items
                  </h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center bg-white rounded-xl shadow p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Qty: {item.qty}
                          </p>
                          <p className="font-bold text-indigo-600">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary Section */}
                <div className="bg-white p-6 rounded-xl shadow">
                  <h2 className="text-2xl font-bold text-gray-700 mb-4">
                    Order Summary
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Total Items: <span className="font-semibold">{totalItems}</span>
                  </p>
                  <p className="text-gray-600 mb-6">
                    Total Amount:{" "}
                    <span className="font-semibold text-indigo-600">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </p>

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-semibold shadow-md transition"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center bg-white rounded-2xl shadow-lg p-10 max-w-md mx-auto"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
                  alt="Empty cart"
                  className="w-40 mx-auto mb-4 opacity-80"
                />
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                  Your cart is empty!
                </h2>
                <p className="text-gray-500 mb-6">
                  Add products to your cart before checkout.
                </p>
                <Link
                  to="/products"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition"
                >
                  Browse Products
                </Link>
              </motion.div>
            )}
          </>
        ) : (
          // ✅ Order Placed Message
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl shadow-lg p-10 max-w-md mx-auto"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Success"
              className="w-32 mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully.
            </p>
            <Link
              to="/orders"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              View My Orders
            </Link>
          </motion.div>
        )}

        {/* 💰 Order Summary Popup */}
        <AnimatePresence>
          {showSummary && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Confirm Your Order
                </h2>
                <p className="text-gray-600 mb-2">
                  You’re about to purchase <strong>{totalItems}</strong> items.
                </p>
                <p className="text-xl font-bold text-indigo-600 mb-6">
                  Total: ${totalAmount.toFixed(2)}
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={confirmOrder}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowSummary(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-full font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
