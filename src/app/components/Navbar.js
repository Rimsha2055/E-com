"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Makeup", href: "#makeup" },
    { name: "Perfumes", href: "#perfumes" },
    { name: "Furniture", href: "#furniture" },
    { name: "Food", href: "#food" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold tracking-wide hover:opacity-90 transition duration-200"
          >
            E-Shop
          </Link>

        
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-lg font-medium hover:text-yellow-300 transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-lg font-medium hover:text-yellow-300 transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              )
            )}

            <Link
              href="/cart"
              className="flex items-center gap-2 bg-yellow-400 text-indigo-800 px-3 py-1 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-200"
            >
              <ShoppingCart size={20} /> Cart ({cart.length})
            </Link>
          </div>

         
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/20 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-indigo-700/95 px-6 py-4 space-y-4 shadow-lg rounded-b-xl">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium hover:text-yellow-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

          
          <Link
            href="/cart"
            className="block flex items-center gap-2 bg-yellow-400 text-indigo-800 px-3 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} /> Cart ({cart.length})
          </Link>
        </div>
      )}
    </nav>
  );
}
