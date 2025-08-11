import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Auth from "./pages/auth/auth"; // If it's signup, rename component or file properly
import Cart from "./pages/cart/cart";
import Payments from "./pages/payment/payment";
import ProductDetail from "./pages/productDetail/productDetail";
import Results from "./pages/results/results";
import Order from "./pages/order/order";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default Routing;
