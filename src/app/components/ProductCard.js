"use client";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
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

       
        <button
          onClick={handleAddToCart}
          className="product-card-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
