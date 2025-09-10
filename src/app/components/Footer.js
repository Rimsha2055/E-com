"use client";

import { Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold">E Shop</h2>
          <p className="mt-3 text-sm text-gray-200">
            Your one-stop online shop for beauty, perfumes, furniture, and food items.  
            Quality products with fast delivery, just a click away.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#makeup" className="hover:text-white">Makeup</a></li>
            <li><a href="#perfumes" className="hover:text-white">Perfumes</a></li>
            <li><a href="#furniture" className="hover:text-white">Furniture</a></li>
            <li><a href="#food" className="hover:text-white">Food Items</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><Instagram size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-yellow-300"><Github size={20} /></a>
            <a href="mailto:support@eshop.com" className="hover:text-yellow-300"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-6 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} <span className="font-semibold">E Shop</span>. All rights reserved.
      </div>
    </footer>
  );
}
