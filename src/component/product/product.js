import React, { useEffect, useState } from "react";
import ProductCard from "../product/productCard";
import axios from "axios"; // Make sure axios is imported
import Classes from "./product.module.css";
function Product() {
  const [products, setProducts] = useState([]); // Initialize as empty array

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <section className={Classes.products_container}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
  );
}

export default Product;
