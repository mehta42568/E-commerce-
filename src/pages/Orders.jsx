import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage when page loads
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 text-center mb-8"
        >
          🛍️ Your Orders
        </motion.h1>

        {orders.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {orders.map((order, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100"
              >
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  Order #{idx + 1}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  {order.items.length} items |{" "}
                  <span className="font-semibold text-indigo-600">
                    ${order.total.toFixed(2)}
                  </span>
                </p>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center bg-gray-50 rounded-lg p-2"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-lg mr-3"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-700">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs">
                          Qty: {item.qty}
                        </p>
                        <p className="font-bold text-indigo-600 text-sm">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition">
                  Buy Again
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl shadow-lg p-10 max-w-md mx-auto"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
              alt="No orders"
              className="w-40 mx-auto mb-4 opacity-80"
            />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              No Orders Yet
            </h2>
            <p className="text-gray-500 mb-6">
              You haven’t purchased anything yet. Start shopping now!
            </p>
            <Link
              to="/products"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Shop Now
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
