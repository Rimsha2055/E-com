"use client";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="product-card-content">
        <h2 className="product-card-title">{product.title}</h2>
        <p className="product-card-price">${product.price}</p>

        <div className="flex gap-2">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="product-card-button bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-1/2"
          >
            Add to Cart
          </button>

          {/* Add to Wishlist Button */}
          <button
            onClick={handleAddToWishlist}
            className="product-card-button bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition w-1/2"
          >
            ❤️ Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
