import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-gray-100 mt-20"
    >
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 🛍️ Brand Info */}
        <div>
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-extrabold text-white mb-4"
          >
            MyShop
          </motion.h2>
          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            Experience a new way of shopping with premium products, exclusive
            deals, and lightning-fast delivery — all in one place.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-indigo-700 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Shop Now →
          </Link>
        </div>

        {/* ⚡ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { name: "Home", link: "/" },
              { name: "Products", link: "/products" },
              { name: "Cart", link: "/cart" },
              { name: "Orders", link: "/orders" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.link}
                  className="hover:text-yellow-300 transition duration-200"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-300" />
              vicky@d-vmedia.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-300" />
              +91 7070250071
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-300" />
              Ashok Nagar , Kankarbagh, patna 800020
            </li>
          </ul>
        </div>

        {/* 🌐 Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <FaInstagram size={24} />
            </motion.a>
          </div>

          {/* Newsletter */}
          <form className="flex bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Subscribe for offers"
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-5 py-2 hover:bg-yellow-300 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-t border-white/20 text-center py-4 text-sm text-gray-200 bg-black/20"
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-yellow-300">MyShop</span>. All
        Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}
