"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react"; // modern icons

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wide hover:opacity-90 transition"
          >
            E-Shop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-200 transition">
              Home
            </Link>
            {/* Products Scroll Link */}
            <a
              href="#products"
              className="hover:text-gray-200 transition cursor-pointer"
            >
              Products
            </a>
            <Link
              href="/cart"
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <ShoppingCart size={20} /> Cart ({cart.length})
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/20 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-4 py-3 space-y-3">
          <Link
            href="/"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          
          <Link
            href="/cart"
            className="block flex items-center gap-2 hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} /> Cart ({cart.length})
          </Link>
        </div>
      )}
    </nav>
  );
}
