export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}
export async function fetchProductsByCategory(category) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  return res.json();
}
