"use client";

export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/fav.jpg')" }} // apni image dalna public folder me
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to <span className="text-pink-400">E-Shop</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover amazing products at the best prices!
        </p>
        <a
          href="/products"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
