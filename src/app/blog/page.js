"use client";

import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from DummyJSON API
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.posts); // posts array return hota hai
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading blogs...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pt-24">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            {/* Background Image instead of <img> or <Image /> */}
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/400/300?random=${blog.id})`,
              }}
            ></div>

            <div className="p-5">
              <p className="text-sm text-gray-500">Blog ID: {blog.id}</p>
              <h2 className="text-xl font-bold mt-2 mb-3">{blog.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{blog.body}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
