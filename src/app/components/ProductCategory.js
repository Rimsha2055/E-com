"use client"

import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

export default function ProductsByCategory({ category, title }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`)
        const data = await res.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [category])

  return (
    <section className="my-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
