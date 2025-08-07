import axios from "axios";
import Layout from "../../component/layout/layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../api/endPoint";
import { useEffect, useState } from "react";
import ProductCard from "../../component/product/productCard";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
 useEffect(() => {
   axios
     .get(`${productUrl}/products/${productId}`)
     .then((res) => {
       setProduct(res.data);
     })
     .catch((err) => {
       console.log(err);
     });
 }, []);


  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  );
}

export default ProductDetail;
