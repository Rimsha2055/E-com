"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import { fetchProductsByCategory } from "../utils/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from "@/components/ui/pagination";

export default function Home() {
  
  const [makeup, setMakeup] = useState([]);
  const [perfumes, setPerfumes] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [food, setFood] = useState([]);

  
  const [foodPage, setFoodPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    async function loadData() {
      const makeupData = await fetchProductsByCategory("beauty");
      setMakeup(makeupData.products);

      const perfumesData = await fetchProductsByCategory("fragrances");
      setPerfumes(perfumesData.products);

      const furnitureData = await fetchProductsByCategory("furniture");
      setFurniture(furnitureData.products);

      const foodData = await fetchProductsByCategory("groceries");
      setFood(foodData.products);
    }
    loadData();
  }, []);

  
  const paginateFood = () => {
    const indexOfLast = foodPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = food.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(food.length / productsPerPage);
    return { currentProducts, totalPages };
  };

  return (
    <div>
      <Hero />

      
      <section id="makeup" className="mt-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Makeup Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {makeup.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      
      <section id="perfumes" className="mt-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Perfumes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perfumes.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

     
      <section id="furniture" className="mt-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Furniture</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {furniture.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      
      <section id="food" className="mt-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Food Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginateFood().currentProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

       
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setFoodPage((prev) => Math.max(prev - 1, 1))}
                  className={foodPage === 1 ? "opacity-50 pointer-events-none" : ""}
                />
              </PaginationItem>

              {[...Array(paginateFood().totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={foodPage === index + 1}
                    onClick={() => setFoodPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setFoodPage((prev) =>
                      Math.min(prev + 1, paginateFood().totalPages)
                    )
                  }
                  className={
                    foodPage === paginateFood().totalPages
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      <section id="testimonial">
      <Testimonial />
      </section>

      <section id="faq">
      <FAQ />
      </section>
      <section id="contact">
      <ContactUs />
      </section>
     
    </div>
  );
}
