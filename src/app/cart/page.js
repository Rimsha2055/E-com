"use client";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/back2.jpg')" }}
    >
      <div className="bg-white/90 backdrop-blur-md w-full max-w-3xl rounded-2xl shadow-2xl p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          🛒 Your Cart
        </h1>

        {/* Back Button */}
        <div className="mb-6 text-left">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 && (
          <p className="text-center text-gray-600 text-lg">
            No items in cart.
          </p>
        )}

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total & Checkout */}
        {cart.length > 0 && (
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Total: ${total.toFixed(2)}
            </p>
            <button
              onClick={() => router.push("/checkout")}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:from-green-700 hover:to-emerald-700 transition"
            >
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
