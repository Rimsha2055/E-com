"use client";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/fav.jpg')" }} // apni image public folder me daalna
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-pink-400">E-Shop</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6">
          Discover amazing products at the best prices!
        </p>
        <a
          href="/products"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
