import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8 mt-10"
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Have questions or feedback? We’d love to hear from you!
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
