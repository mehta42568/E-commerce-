import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import ToastProvider from "./components/ToastProvider";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ToastProvider>
        <Header />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
         <Footer />
      </ToastProvider>
    </div>
  );
}
