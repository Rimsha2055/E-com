"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Makeup", href: "#makeup" },
    { name: "Perfumes", href: "#perfumes" },
    { name: "Furniture", href: "#furniture" },
    { name: "Food", href: "#food" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimonial", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50 backdrop-blur-md">
      <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold tracking-wide hover:opacity-90 transition duration-200 text-rendering-optimizeLegibility"
          >
            E-Shop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-lg font-medium hover:text-yellow-300 transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 text-rendering-optimizeLegibility"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-lg font-medium hover:text-yellow-300 transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 text-rendering-optimizeLegibility"
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Blog Button */}
            <Link
              href="/blog"
              className="flex items-center gap-2 bg-blue-400 text-white px-3 py-1 rounded-full font-semibold shadow-md hover:bg-blue-500 transition duration-200 text-rendering-optimizeLegibility"
            >
               Blog
            </Link>

            {/* Wishlist Button */}
            <Link
              href="/wishlist"
              className="flex items-center gap-2 bg-pink-400 text-white px-3 py-1 rounded-full font-semibold shadow-md hover:bg-pink-500 transition duration-200 text-rendering-optimizeLegibility"
            >
              <Heart size={20} /> Wishlist ({wishlist.length})
            </Link>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="flex items-center gap-2 bg-yellow-400 text-indigo-800 px-3 py-1 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-200 text-rendering-optimizeLegibility"
            >
              <ShoppingCart size={20} /> Cart ({cart.length})
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/20 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700/95 px-6 py-4 space-y-4 shadow-lg rounded-b-xl">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium hover:text-yellow-300 transition text-rendering-optimizeLegibility"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium hover:text-yellow-300 transition text-rendering-optimizeLegibility"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

          {/* Blog in Mobile */}
          <Link
            href="/blog"
            className="block flex items-center gap-2 bg-blue-400 text-white px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-500 transition text-rendering-optimizeLegibility"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>

          {/* Wishlist in Mobile */}
          <Link
            href="/wishlist"
            className="block flex items-center gap-2 bg-pink-400 text-white px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-pink-500 transition text-rendering-optimizeLegibility"
            onClick={() => setIsOpen(false)}
          >
            <Heart size={20} /> Wishlist ({wishlist.length})
          </Link>

          {/* Cart in Mobile */}
          <Link
            href="/cart"
            className="block flex items-center gap-2 bg-yellow-400 text-indigo-800 px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition text-rendering-optimizeLegibility"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} /> Cart ({cart.length})
          </Link>
        </div>
      )}
    </nav>
  );
}