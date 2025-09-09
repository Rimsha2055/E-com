export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

export async function fetchProductById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}
