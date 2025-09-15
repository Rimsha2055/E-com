export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 px-6 py-16">
      {/* Background Design (circles / blur shapes) */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content Card */}
      <div className="relative max-w-4xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center border border-gray-200">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">
          About <span className="text-purple-600">Us</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-indigo-600">E-Shop</span>!  
          We are passionate about bringing you the best products in{" "}
          <span className="font-medium">makeup, perfumes, furniture, and food</span>.  
          Our mission is to provide high-quality items at affordable prices while
          making your shopping experience smooth and enjoyable.  
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-purple-600">E-Shop</span>, customer
          satisfaction is our top priority. Whether you're shopping for{" "}
          <span className="font-medium">beauty products</span>,{" "}
          <span className="font-medium">home essentials</span>, or{" "}
          <span className="font-medium">lifestyle items</span>, we are here to
          serve you with dedication and care.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Thank you for choosing <span className="font-semibold text-indigo-600">E-Shop</span>.  
          We look forward to making your shopping journey{" "}
          <span className="font-medium">special & memorable</span>!
        </p>
      </div>
    </section>
  );
}
