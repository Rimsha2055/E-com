import { fetchProductById } from "../../../utils/api";
import Image from "next/image";

export default async function ProductDetail({ params }) {
  const product = await fetchProductById(params.id);

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.thumbnail} className="w-80 my-4" />
      <p>{product.description}</p>
      <p className="text-xl font-semibold mt-2">${product.price}</p>
    </div>
  );
}
