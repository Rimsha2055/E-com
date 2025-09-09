"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const router = useRouter();

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      setNotification("⚠️ Your cart is empty. Please add items before checkout.");
      setTimeout(() => setNotification(""), 2500);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      clearCart();
      setNotification(" Your order has been placed successfully!");
      setLoading(false);

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('/images/back.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md w-full max-w-3xl rounded-2xl shadow-2xl p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          🛍️ Checkout
        </h1>

        {/* Back to Cart Button */}
        <div className="mb-6 text-left">
          <button
            onClick={() => router.push("/cart")}
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 transition"
          >
            ← Back to Cart
          </button>
        </div>

        {/* Notification */}
        {notification && (
          <div className="mb-6 p-3 text-center rounded-lg bg-green-100 text-green-800 font-semibold shadow">
            {notification}
          </div>
        )}

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                <span className="font-bold text-indigo-600">${item.price}</span>
              </div>
            ))}

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-green-700 hover:to-emerald-700 transition w-full"
            >
              {loading ? "⏳ Placing Order..." : " Place Order"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
