import Layout from "../../component/layout/layout";
import CarouselEffect from "../../component/carousel/carouselEffect";
import Catagory from "../../component/catagory/catagory";
import Product from "../../component/product/product";
function landing() {
  return (
    <div>
      <Layout>
        <CarouselEffect />
        <Catagory />
        <Product />
      </Layout>
    </div>
  );
}

export default landing;
