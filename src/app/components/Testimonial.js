"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // DummyJSON users API se data fetch
    fetch("https://dummyjson.com/users?limit=5")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.users || []));
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000); // Har 3 second baad change hoga
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-50 to-pink-100 px-6 py-16 overflow-hidden">
      {/* Background design */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <h2 className="text-4xl font-extrabold text-indigo-700 mb-12 z-10">
        What Our Customers Say
      </h2>

      {/* Testimonials Carousel */}
      <div className="relative w-full max-w-3xl overflow-hidden">
        {testimonials.length > 0 && (
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((user) => (
              <div
                key={user.id}
                className="min-w-full px-6 flex flex-col items-center text-center"
              >
                <Image
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-indigo-500 mb-4 shadow-lg object-cover"
                />
                <h3 className="text-xl font-semibold text-indigo-700">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {user.company?.title}
                </p>
                <p className="text-gray-600 italic max-w-md">
                  &quot;Shopping at E-Shop has been a wonderful experience. Great
                  quality and amazing service!&quot;
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-indigo-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
