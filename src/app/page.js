import { fetchProducts } from "../utils/api";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const data = await fetchProducts();
  const products = data.products;

  return (
    <div>
      <Hero />

      {/* Products Section with ID */}
      <div id="products" className="mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
