"use client";
import { useWishlist } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md">
              <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover mb-2 rounded" />
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2 w-full hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
