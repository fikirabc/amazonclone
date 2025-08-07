import { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/endPoint";
import ProductCard from "../../component/product/productCard";
// @ts-ignore
import Classes from "./results.module.css";

function Results() {
  const { catagoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [catagoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "20px" }}>Results</h1>
        <p style={{ padding: "20px" }}>catagory /{catagoryName}</p>
        <hr />
        <div className={Classes.products_container}>
          {results.map((product) => (
            // @ts-ignore
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
